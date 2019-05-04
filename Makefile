install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish
test:
	npm test
lint:
	npx eslint .
