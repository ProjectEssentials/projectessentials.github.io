#!/usr/bin/env bash
cp ./dist/index.html ./dist/200.html
cp ./dist/index.html ./dist/404.html
cd dist || exit
find . -maxdepth 1 ! -name '200.html' ! -name '404.html' ! -name 'favicon.ico' ! -name 'index.html' ! -name 'main.js' ! -name 'highlight-properties.js' ! -name 'highlight-plaintext.js' ! -name 'highlight-json.js' -type f -exec rm -v {} +
