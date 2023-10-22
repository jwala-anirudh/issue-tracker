FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

# To resolve sentry errors with docker
RUN npm install @sentry/cli

COPY . .

RUN npx prisma generate && npx prisma migrate deploy && npm run build

COPY .next ./.next/

CMD ["npm", "run", "dev"]
