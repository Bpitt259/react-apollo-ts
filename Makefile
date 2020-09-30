install:
	@echo "Installing front-end dependencies (./package.json)"
	@yarn install --silent
	@echo "Installing server dependencies (./server/package.json)"
	@cd server && yarn install --silent
	@if [ ! -f ./server/.env ] ; then echo "Creating ./server/.env configuration. You may need to update this for local development"; \
		cp ./server/.env.template ./server/.env; fi

start:
	npx concurrently --kill-others "npm start" "npm --prefix server start"

.PHONY: install, start
