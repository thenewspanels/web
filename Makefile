
start:
	open http://localhost:4000
	bundle exec jekyll serve --config _config.yml,_config-dev.yml

build:
	bundle exec jekyll build --config _config.yml,_config-dev.yml
	bundle exec htmlproofer ./_site

algolia:
	bundle exec jekyll algolia

deploy: algolia
	rm -rf /tmp/thenewspanels
	git clone https://github.com/thenewspanels/web.git ../web-deploy -b gh-pages
	bundle exec jekyll build --config _config.yml,_config-deploy.yml
	mogrify -quality 5 ./_deploy/images/comics/*/*/*/*.jpg
	if [ "${TRAVIS_REPO_SLUG}" != "" ]; then \
	  git remote set-url origin https://${GITHUB_TOKEN_OWNER}:${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git; \
	fi
	git add _deploy/ && git commit -m 'Auto-commit: make deploy'
	git subtree push --prefix _deploy origin gh-pages

install:
	bundle install

clean:
	bundle exec jekyll clean
