FROM node:16-alpine

# install the application
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

# Set up our Environment from the docker-compose file


# 3000 is the port we need for nextjs
EXPOSE 3000

# build and start
RUN npm run build
CMD npm run start
