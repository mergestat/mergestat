# How to Contribute 
We'd love to accept your contributions to this project.Here are the guidelines you need to follow.

# Usage
we use docker and make to build our system .

## Running locally

```
make dev
```

This one runs build and runs all images .

```
make docker-build
```

This build any changes you make on your local enviroment .

```
make docker-build-worker
```

This build any changes specific for the worker image .

```
make docker-build-ui
```

This build any changes specific for ui image .

```
make docker-build-graphql
```

This build any changes specific for graphql image .

## Cleaning Context

```
make docker-down
```




