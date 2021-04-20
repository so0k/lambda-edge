#!/bin/bash

rm -rf temp
mkdir -p out

# copy origin-request to temp except node_modules and tests
mkdir -p temp/origin-request
cp -r `ls -A origin-request | egrep -v '(node_modules|__tests__)' | sed 's|^|origin-request/|'` temp/origin-request

# build origin-request
cd temp/origin-request
version=`jq -r .version package.json`
name=`jq -r .name package.json`
yarn --production
node-prune

# replace archive in `../../out`
rm -rf ../../out/refapp-static-${name}-${version}.zip
7z a -r ../../out/refapp-static-${name}-${version}.zip ./
