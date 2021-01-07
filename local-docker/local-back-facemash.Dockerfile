FROM node:12

RUN npm i -g @nestjs/cli -yq 

WORKDIR /back-facemash

CMD npm run start:dev

EXPOSE 3000