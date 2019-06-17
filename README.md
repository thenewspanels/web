# [thenewspanels.com](https://thenewspanels.com/)

[![Build Status](https://travis-ci.com/thenewspanels/web.svg?branch=master)](https://travis-ci.com/thenewspanels/web)

This file contains basic docs explaining how the site is built, what dependencies it uses,
and how to host/test it locally.

## TODO

- [x] comments w Disqus
- [ ] create more newspaper-like layouts
- [ ] design polish, animations, transitions, etc
- [ ] ensure compatibility with other browsers
- [x] content management system - forestry.io

## Building

This site has a [Makefile](https://cmake.org/) that is used to build and deploy it. It is
assumed that you are using a Linux environment in these instructions. OSX is mostly
compatible. If you are using Windows 10, you should install the
[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
to build and test the site.

Here's a list of the dependencies you will need to configure manually before using the
Makefile:
- [Ruby](https://www.ruby-lang.org/en/)
- [Bundler](https://bundler.io/)
- [ImageMagick](https://imagemagick.org/) (for image optimization - part of the build process)

Once these are installed, you should be able to run `make install`, and see the rest of the
project's dependencies install without error. After that, you can run `make`, which will
build and `open` a local version of the site.

### Deployment

You may have noticed by now, but this repository consists of several branches - the main ones
being `staging`, `master`, and `gh-pages`. You are free to make your own branches, but these
three must remain operational. In addition, `gh-pages` should not be manually pushed to. And
neither should the master branch of
[thenewspanels.github.io](https://github.com/thenewspanels/thenewspanels.github.io/).

This is because of a fancy thing I've set up called a
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration).
It runs on [Travis CI](https://travis-ci.com/thenewspanels/web), and builds a copy of the site
whenever you push to a branch of this repo. It also merges changes from the CMS when it is
updated.

For general changes that are not ready to be rolled out to the public, you should work in
`staging`. When this branch is pushed to, Travis will commit the built site to the `gh-pages`
branch, which is hosted at [preview.thenewspanels.com](https://preview.thenewspanels.com/).

When these changes are functional, they should be merged into the `master` branch, which will
then push to [thenewspanels.github.io](https://github.com/thenewspanels/thenewspanels.github.io/).
This should also push updates to any services associated with the site, such as
[Algolia](https://algolia.com/).

## Docs

### Page Structure

The index file, "/", always redirects to the latest "page", or set of comics. Pages have a url
equivalent to their `:slug` parameter, which should start at 1 and increment each time a new page
is added.

Comics are handled similarly; each new comic increments an integer, except they are located in
the `/comics/` subdirectory. If the page at `/1` contains 40 comics, then the url for the first
comic of page 2 should be `/comics/41`.

### Layouts

Each "page" of comics has a "grid" attribute which tells it which predefined set of positions it
should place the comics in. The page layout (`_layouts/page.html`) then determines how many comics
it needs and adds them to the grid using the comic include (`_includes/comic.html`).

Each page has a `start` variable which defines the number of the first comic to be used in the
layout; the rest are obtained in sequential order.

### Identifiers

Pages and comics both have two variables that are used to identify them; the `slug` and the
`hash`. The `slug` is used only to determine the URL of the comic, while the `hash` is used for
sorting the comics internally (this is what the sequential layouts - described above - and pagination
use). These variables _should_ both have the same numerical value in each comic, but the `hash`
should have some amount of zeros prepended so that it is a uniform length. Currently, this length is
6 characters. Unless you plan to host more than 999999 comics, I think that this will be enough.

Example: for comic #1, the `slug` would be "1", and the `hash` would be "000001".

These identifiers are used in many places throughout the site, but their main purpose is to satiate
the paginator element, located at `_includes/paginator.html`.

### CSS

This site has a lot of CSS. However, it is split into separate files (using SCSS) with a strict naming
convention ([Block Element Modifier](http://getbem.com/naming/)) to make it easier to manage. 
