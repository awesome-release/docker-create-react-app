FROM node:15-alpine
 
WORKDIR /app
 
COPY package.json yarn.lock ./
 
RUN yarn
 
COPY . .
 
EXPOSE 4000
 
CMD [ "npm", "start" ]