#! /bin/sh

echo "STARTING APPLICATION"

docker network create nginx_net

cd product_service

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build -V

cd ..

cd user_service

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build -V

cd ..

cd front_end

docker-compose up -d --build -V

cd ..

docker volume prune
# docker network prune

echo "started all services"
