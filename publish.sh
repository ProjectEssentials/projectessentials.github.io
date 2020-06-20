#!/usr/bin/env bash

cd dist || exit
find . -maxdepth 1 ! -name 'favicon.ico' ! -name 'index.html' ! -name 'main.js' ! -name 'highlight-properties.js' ! -name 'highlight-plaintext.js' ! -name 'highlight-json.js' -type f -exec rm -v {} +

cd ../ || exit
cp ./dist/index.html ./index.html
cp ./index.html ./200.html
cp ./index.html ./404.html

cd dist || exit
rm index.html 200.html 404.html

git add ./
git commit -m "Deploy."
git push
