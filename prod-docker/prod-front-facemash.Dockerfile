FROM node:12

RUN git clone https://github.com/Otche/front-facemash.git
WORKDIR /front-facemash
RUN npm install
CMD npm run start

EXPOSE 3000