NVM_DIR ?= $(shell echo ~/.nvm)

runserver:
	source "$(NVM_DIR)/nvm.sh"; nvm use; npm run dev

prereqs:
	source "$(NVM_DIR)/nvm.sh"; nvm install

setup:
	source "$(NVM_DIR)/nvm.sh"; nvm use; npm install

pristine:
	rm -rf node_modules;
