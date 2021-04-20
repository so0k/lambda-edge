#!/bin/bash

rm -rf temp
mkdir -p out

# copy $1 to temp except node_modules and tests
mkdir -p temp/$1
cp -r `ls -A $1 | egrep -v '(node_modules|__tests__)' | sed "s|^|$1/|"` temp/$1

# build $1
cd temp/$1
version=`jq -r .version package.json`
name=`jq -r .name package.json`
yarn --production
node-prune

# replace archive in `../../out`
rm -rf ../../out/alpaca-${name}-${version}.zip
7z a -r ../../out/alpaca-${name}-${version}.zip ./
