FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

WORKDIR /usr/src/app/authorization_code

EXPOSE 8888
CMD [ "node", "app.js" ]


## Build
# docker build -t spotify-node-web-app .
## Run
# docker run -p 49160:8888 -d --name spotify-web spotify-node-web-app