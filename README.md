# Issue tracker

## Dependencies & Setup

1. Prisma

```
npm i prisma
npx prisma init
```

Add changes to your schema.prisma where all the models are defined. Once that is completed, you need to run following to structure your schema.prisma file with proper syntax

```
npx prisma format
```

Inorder to update your actual DB with these new models as Tables run the following:

```
npx prisma migrate dev
```
