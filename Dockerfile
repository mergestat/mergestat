# syntax=docker/dockerfile:1-experimental

FROM golang:1.19-buster AS builder
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates cmake libssl-dev
COPY scripts/install_libgit2.sh install_libgit2.sh
RUN ./install_libgit2.sh
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download && go mod verify
COPY . .
RUN --mount=type=cache,target=/root/.cache/go-build \
PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/share/pkgconfig/libgit2/lib/pkgconfig/ make

FROM debian:buster-slim
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates curl postgresql-client git && \
    rm -rf /var/lib/apt/lists/*

# copy over migrations
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.15.1/migrate.linux-amd64.tar.gz | tar xvz
RUN mv migrate /usr/local/bin
COPY migrations migrations

COPY scripts/docker-init-entrypoint.sh docker-init-entrypoint.sh

# install trivy binary for `TRIVY_REPO_SCAN` sync type
RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin v0.31.3

# install syft binary
RUN curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin v0.58.0

# for pprof and prom metrics over http
EXPOSE 8080

COPY --from=builder /src/.build/worker /worker
ENTRYPOINT [ "/worker" ]
