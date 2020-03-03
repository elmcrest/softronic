ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

clean.build: $(ROOT_DIR)
	@rm -rf dist
	@rm -rf src/.temp

clean.modules: $(ROOT_DIR)
	@rm -rf node_modules

clean: clean.build
clean.all: clean clean.modules

install: $(ROOT_DIR)
	@yarn install

build: $(ROOT_DIR) clean.build
	@test -d node_modules || make install
	@yarn eslint || exit 1
	@yarn build
