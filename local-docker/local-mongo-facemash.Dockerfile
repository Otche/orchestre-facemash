FROM mongo:latest
RUN apt-get update -yq \
&& apt-get install curl -yq 
ADD ./db/facemash-db-init.js /db/facemash-db-init.js
RUN  curl -X GET "https://latelier.co/data/cats.json" -H "accept: */*" > /db/init-data.json
ADD ./db/mongo-init.sh docker-entrypoint-initdb.d/mongo-init.sh
