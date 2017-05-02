#!/bin/bash
while getopts m: option
do
        case "${option}"
        in
                m) COMMITMSG=${OPTARG};;
        esac
done

npm run build
git add -A
git commit -m COMMITMSG
git push
node tools/oma-release