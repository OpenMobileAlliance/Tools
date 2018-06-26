#!/bin/bash
while getopts :m: option
do
        case "${option}"
        in
                m) 
                    COMMITMSG=${OPTARG}
                    npm run build
                    git add -A
                    git commit -m "$COMMITMSG"
                    git push
                    node tools/oma-release
                    exit 1
                ;;

                \?) 
                    echo "Invalid option: -$OPTARG" >&2
                    exit 1
                ;;

                :)
                    echo "Option -$OPTARG requires a commit message." >&2
                    exit 1
                ;;
        esac
done

