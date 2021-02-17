#!/bin/bash

concurrently "cd game && npm run startFront" "cd game && npm run startBack"