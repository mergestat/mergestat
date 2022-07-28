TAGS = "static,system_libgit2"

.PHONY: all vendor test vet lint lint-ci update ui-dev

all: clean worker

# pass these flags to linker to suppress missing symbol errors in intermediate artifacts
export CGO_CFLAGS = -DUSE_LIBSQLITE3
export CPATH = ${PWD}/pkg/sqlite
export CGO_LDFLAGS = -Wl,--unresolved-symbols=ignore-in-object-files
ifeq ($(shell uname -s),Darwin)
	export CGO_LDFLAGS = -Wl,-undefined,dynamic_lookup
endif

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
	./bin/golangci-lint run --build-tags $(TAGS) --out-format github-actions

update:
	go get -u -tags=$(TAGS) ./...

# target to download latest sqlite3 amalgamation code
pkg/sqlite/sqlite3.c:
	$(call log, $(CYAN), "downloading sqlite3 amalgamation source v3.37.0")
	$(eval SQLITE_DOWNLOAD_DIR = $(shell mktemp -d))
	@curl -sSLo $(SQLITE_DOWNLOAD_DIR)/sqlite3.zip https://www.sqlite.org/2021/sqlite-amalgamation-3370000.zip
	$(call log, $(GREEN), "downloaded sqlite3 amalgamation source v3.37.0")
	$(call log, $(CYAN), "unzipping to $(SQLITE_DOWNLOAD_DIR)")
	@(cd $(SQLITE_DOWNLOAD_DIR) && unzip sqlite3.zip > /dev/null)
	@-rm $(SQLITE_DOWNLOAD_DIR)/sqlite-amalgamation-3370000/shell.c
	$(call log, $(CYAN), "moving to pkg/sqlite")
	@mv $(SQLITE_DOWNLOAD_DIR)/sqlite-amalgamation-3370000/* pkg/sqlite

ui-dev:
	docker compose -f docker-compose.yaml -f docker-compose.ui-dev.yaml up
