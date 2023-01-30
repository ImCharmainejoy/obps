dev:
	@echo "\033[92mStarting an environment for local development...\033[0m"
	npm run dev

clean:
	rm -rf dist

local: # NEED TO INSTALL PYTHON 3
	python lan.py

clean-build:
	rm -rf node_modules
	rm -rf package-lock.json
	npm install

ds:
	sh staging.sh

dp:
	sh production.sh
