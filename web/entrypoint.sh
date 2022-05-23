#!/bin/bash

set -e

npm run build
exec node /usr/src/app/build/index.js
