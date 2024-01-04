FROM node:16-alpine
 
WORKDIR /app
 
COPY package.json pnpm-lock.yaml ./
 
RUN pnpm install --frozen-lockfile 
 
COPY . .
 
EXPOSE 4000
 
CMD [ "pnpm", "start" ]
