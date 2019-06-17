FROM node:10.13-alpine

WORKDIR /usr/src/app
COPY ["package.json",  "/usr/src/app/"]
RUN yarn install
COPY . ./
EXPOSE 3000
CMD yarn build

