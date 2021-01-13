FROM mongo:latest
RUN apt-get update -yq \
&& apt-get install curl -yq 
RUN mkdir /db
RUN curl -X GET "https://raw.githubusercontent.com/Otche/orchestre-facemash/master/db/facemash-db-init.js" -H "accept: */*" > /db/facemash-db-init.js
RUN curl -X GET "https://latelier.co/data/cats.json" -H "accept: */*" > /db/init-data.json
RUN curl -X GET "https://raw.githubusercontent.com/Otche/orchestre-facemash/master/db/mongo-init.sh" -H "accept: */*" > /docker-entrypoint-initdb.d/mongo-init.sh
