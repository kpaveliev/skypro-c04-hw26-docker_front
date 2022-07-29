FROM node:12-alpine as build
WORKDIR /app
COPY . /app
RUN npm install && npm run build

CMD ["npm", "start"]