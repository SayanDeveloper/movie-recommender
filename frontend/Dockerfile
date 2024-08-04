FROM node:18-alpine3.19

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
