FROM node:12

RUN git clone https://github.com/Otche/back-facemash.git
WORKDIR /back-facemash
RUN npm install

CMD npm run start:prod

EXPOSE 3000