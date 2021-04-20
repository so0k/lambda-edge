#!/bin/bash

mkdir -p out
rm -rf temp
cp origin-request temp/
cd temp/origin-request
version=`jq -r .version package.json`
name=`jq -r .name package.json`
rm -rf ../out/refapp-static-${name}-${version}.zip
rm -rf ./node_modules
rm -rf ./__tests__
yarn --production
node-prune
7z a -r ../out/refapp-static-${name}-${version}.zip ./
