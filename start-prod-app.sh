#!/usr/bin/env bash

IMAGE_NAME=blackbird
docker rm -f $IMAGE_NAME || true
docker rmi -f $IMAGE_NAME ||  true
cd ~/app
sh build-image.sh

# https://serverfault.com/questions/238715/routing-port-25-to-another-machine
docker run -dit -v /dev/shm:/dev/shm --name $IMAGE_NAME --net=host -p 4545:3000 --restart always $IMAGE_NAME:latest
rm secrets.json
rm build-image.sh
rm Dockerfile
cd ..
rm -r app