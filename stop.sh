#! /bin/sh

echo "stoping application"

cd front_end

docker-compose down

cd ..

cd product_service

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

cd ..

cd user_service

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

cd ..
echo "all services down"
