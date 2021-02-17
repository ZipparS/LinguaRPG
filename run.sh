#!/bin/bash

concurrently "cd client && npm run start" "cd servers/client && npm run start" "cd servers/cache && npm run start"