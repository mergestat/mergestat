TAGS = ""

.PHONY: all vendor test vet lint lint-ci update ui-dev dev docker-build docker-build-worker docker-build-ui docker-build-graphql docker-down docker-clean

all: clean worker

clean:
	-rm -f worker

worker:
	go build -v -tags=$(TAGS) -o .build/$@ cmd/$@/*.go

test:
	go test -v -tags=$(TAGS) ./...

vet:
	go vet -v -tags=$(TAGS) ./...

lint:
	golangci-lint run --build-tags $(TAGS)

lint-ci:
	./bin/golangci-lint run --build-tags $(TAGS) --out-format github-actions --timeout 5m

update:
	go get -u -tags=$(TAGS) ./...

ui-dev:
	docker-compose -f docker-compose.yaml -f docker-compose.ui-dev.yaml up

dev:
	docker-compose -f docker-compose.dev.yaml -f docker-compose.yaml up

docker-build:
	docker-compose -f docker-compose.dev.yaml -f docker-compose.yaml build

docker-build-worker:
	docker-compose -f docker-compose.dev.yaml -f docker-compose.yaml build worker

docker-build-ui:
	docker-compose -f docker-compose.dev.yaml -f docker-compose.yaml build ui

docker-build-graphql:
	docker-compose -f docker-compose.dev.yaml -f docker-compose.yaml build graphql

docker-down:
	docker-compose down

docker-clean:
	docker-compose down -v
