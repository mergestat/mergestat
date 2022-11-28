# Contributing

We'd love to have you as a contributor!
This document outlines some general guidelines and instructions to follow when developing and submitting a PR.

# Submitting a PR

- We use [trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) off of our `main` branch
- Try to test your changes as much as possible before submitting a PR - ideally with tests defined in code
- We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to roughly categorize the work done in this repo
- We try to use the habits described in [this article](https://thenewstack.io/6-pull-request-tricks-you-should-adopt-now-doordash/) when opening PRs 

# Development

To run MergeStat locally for development, we use `docker-compose` with some targets defined in the `Makefile`.

## Running locally

```sh
# bring up all containers locally, building from the local source
make dev
```

## Building changes

```sh
# build all images
make docker-build

# build the worker image
make docker-build-worker

# build the ui image
make docker-build-ui

# build the graphql service image
make docker-build-graphql
```

## Cleaning Up

```sh
# stop running docker containers
make docker-down

# stop running docker containers and remove all networks/volumes (resets the state of the app)
make docker-clean
```

## Running Tests

```sh
# run all the Go tests
make test

# run UI tests
cd ui && npm run test
```
