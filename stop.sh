#! /bin/sh

echo "stoping application"

docker volume prune

cd front_end

docker-compose down

cd ..

cd product_service

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

cd ..

cd user_service

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

cd ..

docker network prune -f

echo "all services down"
