# Plug.DJ - Metal Friday Tools

Information/Description here

## About Plug.DJ - Metal Friday Tools

## Roadmap
V1 Hide Ads, Add Auto-Woot function
v1.5 Move Skip button from user menu to control bar

## Build
Requires NPM, Yarn, Gulp and Web-Ext.

To get started, make sure you have NPM installed as well as Yarn. Run `yarn install`

To bundle CSS/JS, run `gulp`. For just JS, run `gulp compress`. For just CSS, run `gulp sass`

To package and run for testing in browser, run `npm run start:firefox`. This will prepare the Add On for Firefox and install the latest as a Temporary Add On.

To package for AOM or other addon repositories, run `npm run-script build`, this will create a new .zip file for upload.

Build instructiions for other browsers to come soon.
