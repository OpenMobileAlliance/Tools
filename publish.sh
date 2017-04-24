#!/bin/bash

npm run build
git add -A
git commit -m "Added customisable URLs and copyright notice"
git push
node tools/oma-release