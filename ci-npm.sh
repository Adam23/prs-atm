#!/bin/sh

# need to updated

npm version patch && ./ci-readme.sh && git f && git io && npm publish && git pull && git push
