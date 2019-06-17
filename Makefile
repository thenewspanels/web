.PHONY: start build algolia preview deploy publish install clean

start:
	open http://localhost:4000
	bundle exec jekyll serve --config _config.yml,_config-dev.yml

build:
	bundle exec jekyll build --config _config.yml,_config-dev.yml
	bundle exec htmlproofer ./_site

algolia:
	bundle exec jekyll algolia

preview-clone:
	git clone https://${GITHUB_TOKEN_OWNER}:${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git ../web-deploy -b gh-pages

preview-build:
	bundle exec jekyll build --config _config.yml,_config-preview.yml

preview: preview-clone preview-build publish

deploy-clone:
	git clone https://${GITHUB_TOKEN_OWNER}:${GITHUB_TOKEN}@github.com/thenewspanels.github.io.git ../web-deploy

deploy-build:
	bundle exec jekyll build --config _config.yml,_config-deploy.yml

deploy: algolia deploy-clone deploy-build publish

publish:
	cd ../web-deploy; \
	mogrify -quality 5 ./images/comics/*/*/*.jpg; \
	git add . && git commit -m 'Auto-commit: makefile'; \
	git push;

install:
	bundle install

clean:
	bundle exec jekyll clean
