
SCSS=$(wildcard *.scss)
CSS=$(patsubst %.scss,%.css,$(SCSS))

all: build
	
build: $(CSS)

watch: 
	sass --watch .

%.css: %.scss 
	sass $< > $@


