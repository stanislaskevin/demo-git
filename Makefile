#!/usr/bin/make -f

#THEME_OPT=-t simple
#THEME_OPT=-t gnuside
THEME_OPT=-t netcat
#REVEALJS_THEMES=node_modules/reveal-md/node_modules/reveal.js/css/theme
REVEALJS_THEMES=node_modules/reveal.js/css/theme
#REVEALJS_DIR=node_modules/reveal-md/node_modules/reveal.js
REVEALJS_DIR=node_modules/reveal.js
BUILD_DIR=build
#BUILD_DIR=slides
SLIDES_DIR=slides
SLIDES_MD=$(wildcard $(SLIDES_DIR)/**/*.md)
#SLIDES_PDF=$(patsubst %.md,%.pdf,$(SLIDES_MD)),
SLIDES_PDF=$(patsubst $(SLIDES_DIR)/%,$(BUILD_DIR)/%,$(patsubst %.md,%.pdf,$(SLIDES_MD)))
NAME=$(shell basename "$$(pwd)")

REVEALMD=node_modules/.bin/reveal-md
all: live

install: install-reveal install-style

install-reveal:
	npm install reveal-md # -v 0.0.19
	npm install node-sass

install-style:
	# cp -a themes/gnuside.css $(REVEALJS_THEMES)
	cp -a themes/gnuside.scss $(REVEALJS_THEMES)/source
	cp -a themes/netcat.scss $(REVEALJS_THEMES)/source
	cd $(REVEALJS_DIR) && ../.bin/node-sass \
		css/theme/source/gnuside.scss \
		css/theme/gnuside.css \
	cd $(REVEALJS_DIR) && ../.bin/node-sass \
		css/theme/source/netcat.scss \
		css/theme/netcat.css \

zip:
	(git ls-files ; find assets) |grep -v '^ext' | zip -r "$(NAME)-latest.zip" -@

live:
	$(REVEALMD) --disable-auto-open --host 0.0.0.0 $(THEME_OPT) $(SLIDES_DIR)

.PHONY: build
build: $(SLIDES_PDF)

DOCKER_IP=$(shell ip addr show dev docker0 |sed -n 's|^.*\<inet\>\s\+\([^/]\+\)/.*|\1|p' )
$(BUILD_DIR)/%.pdf: $(SLIDES_DIR)/%.md
	mkdir -p "$$(dirname "$@")"
	# $(REVEALMD) $(THEME_OPT) -r $@ $<
	docker run --rm -v `pwd`:/slides astefanutti/decktape http://$(DOCKER_IP):1948/$(notdir $(<)) /slides/$@ || true


clean:
	rm -f $(BUILD_DIR)/*.pdf
