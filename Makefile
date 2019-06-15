
start:
	open http://localhost:4000
	bundle exec jekyll serve --config _config.yml,_config-dev.yml

build:
	bundle exec jekyll build --config _config.yml,_config-dev.yml

algolia:
	bundle exec jekyll algolia

deploy: algolia
	rm -rf /tmp/thenewspanels
	git clone git@github.com:thenewspanels/web /tmp/thenewspanels -b gh-pages
	bundle exec jekyll build
	cd /tmp/thenewspanels/; \
	mogrify -quality 5 ./images/comics/*/*/*/*.jpg; \
	git add .; \
	git commit -m "make deploy"; \
	git push;

install:
	bundle install

clean:
	bundle exec jekyll clean
