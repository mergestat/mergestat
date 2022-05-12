FROM golang:1.17-buster AS builder
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates cmake libssl-dev
COPY scripts/install_libgit2.sh install_libgit2.sh
RUN ./install_libgit2.sh
WORKDIR /src
COPY . .
RUN PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/share/pkgconfig/libgit2/lib/pkgconfig/ make

FROM debian:buster-slim
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates curl postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# copy over migrations
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.15.1/migrate.linux-amd64.tar.gz | tar xvz
RUN mv migrate /usr/local/bin
COPY migrations migrations

COPY scripts/docker-init-entrypoint.sh docker-init-entrypoint.sh

# for pprof and prom metrics over http
EXPOSE 8080

COPY --from=builder /src/.build/worker /worker
ENTRYPOINT [ "/worker" ]
