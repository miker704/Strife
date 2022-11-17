#!/usr/bin/env bash

# exit on error
set -o errexit
npm install
npm run build
bundle install
rails db:migrate
rails db:seed #if needed