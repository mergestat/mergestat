FROM golang:1.17-buster AS builder
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates cmake libssl-dev
COPY scripts/install_libgit2.sh install_libgit2.sh
RUN ./install_libgit2.sh
WORKDIR /src
COPY . .
RUN PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/share/pkgconfig/libgit2/lib/pkgconfig/ make

FROM debian:buster-slim
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY scripts/init.sh /init.sh

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive \
        apt-get install -y curl \
    && rm -rf /var/lib/apt/lists/*

# install Hasura CLI
RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash

# for pprof and prom metrics over http
EXPOSE 8080

COPY --from=builder /src/.build/worker /worker
ENTRYPOINT [ "/worker" ]
