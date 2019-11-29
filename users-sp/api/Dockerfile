# docker build -t users-sp-api .

FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src

EXPOSE 8000

CMD ["npm", "start"]
