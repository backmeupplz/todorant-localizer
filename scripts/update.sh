#!/bin/bash

rm -rf src &&
mkdir src &&
cp -R ../localizer-frontend/src ./ &&
yarn build &&
git add . &&
git commit -m "update" &&
git push