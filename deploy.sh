#!/usr/bin/env sh

set -e

npm run build
# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploy to github pages'
git push -f git@github.com:tasyald/webtask-vue.git master:gh-pages

cd -