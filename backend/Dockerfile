FROM node:22-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 9000

CMD ["npx","tsx", "watch", "src/index.ts"]