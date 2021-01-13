#!/bin/bash

mkdir -p ${KEYS_PATH}
cd ${KEYS_PATH}

echo "" | ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
