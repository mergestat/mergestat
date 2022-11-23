# How to Contribute 
We'd love to accept your contributions to this project.Here are the guidelines you need to follow.

# How to submit a change

- For branching we use trunk based development across all our repos https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development
- Test your changes
- To organize our commit history we use conventional commit strategy https://www.conventionalcommits.org/en/v1.0.0/
- PR should be run with healthy habits and for that we recommend follow the tips from this article https://thenewstack.io/6-pull-request-tricks-you-should-adopt-now-doordash/
# Usage
we use docker and make to build our system .

## Running locally

```
make dev
```

## Building changes

```
make docker-build

make docker-build-worker

make docker-build-ui

make docker-build-graphql
```


## Cleaning Context

```
make docker-clean

make docker-down
```

## Running test

You can either run your test via your visual studio code or running this command

```
go test ./...
```





