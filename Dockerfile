# syntax=docker/dockerfile:1-experimental

FROM golang:1.19-alpine3.16 AS builder
RUN set -x && apk add --no-cache git make gcc g++
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download && go mod verify
COPY . .
RUN make

FROM alpine:3.16
RUN apk upgrade && apk add --no-cache curl postgresql-client ca-certificates git go podman fuse-overlayfs tini

# copy over migrations
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.15.1/migrate.linux-amd64.tar.gz | tar xvz
RUN mv migrate /usr/local/bin
COPY migrations migrations

COPY scripts/docker-init-entrypoint.sh docker-init-entrypoint.sh

# for pprof and prom metrics over http
EXPOSE 8080

COPY --from=builder /src/.build/worker /worker

RUN addgroup --gid 1002 mergestat; \
    adduser -Ds /bin/sh -G mergestat --uid 1001 mergestat; \
    echo mergestat:10000:5000 > /etc/subuid; \
    echo mergestat:10000:5000 > /etc/subgid;

USER mergestat

ENTRYPOINT ["/sbin/tini", "/worker" ]
