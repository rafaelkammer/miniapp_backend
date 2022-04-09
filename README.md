# REST API Miniapp

## Getting started

### 1. Install dependencies

Inside the folder project install dependencies:

```
npm install
```

### 2. Configure environment variables on .env

Create a .env file and follow the .env.example file to configure environment variables such as the application port and database details:

```
RUN_PORT=3001
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

### 3. Create and seed the database

Run the following command to create your POSTGRESQL database file. This also creates the tables defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.

### 4. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:3001`.

## API Endpoints

You can access the following endpoints:

## - Categories

`GET /categories - Response example`

```json
[
  {
    "ukey": 1,
    "name": "Processors"
  },
  {
    "ukey": 2,
    "name": "Graphic Cards"
  },
  {
    "ukey": 3,
    "name": "Motherboards"
  }
]
```

`POST /categories - Body request example`

```json
{
  "name": "Solid State Drive"
}
```

`POST /categories - Response example`

```json
{
  "ukey": 4,
  "name": "Solid State Drive"
}
```

## - Products

`GET /products - Response example`

```json
[
  {
    "ukey": 1,
    "name": "Intel Core i9 12900k",
    "code": "12900k",
    "quantity": 10,
    "is_active": true,
    "category_ukey": 1
  }
]
```

`POST /products - Body request example`

```json
{
  {
    "name": "AMD Ryzen 5600x",
    "code": "AMD5600x",
    "quantity": 15,
    "is_active": true,
    "category_ukey": 1
  }
}
```

`POST /products - Response example`

```json
{
  "ukey": 2,
  "name": "AMD Ryzen 5600x",
  "code": "AMD5600x",
  "quantity": 15,
  "is_active": true,
  "category_ukey": 1
}
```

`PUT /products/:ukey - Body request example`

```json
PUT - /products/2

{
  {
    "quantity": 0,
    "is_active": false
  }
}
```

`PUT /products/:ukey - Response example`

```json
{
  "ukey": 2,
  "name": "AMD Ryzen 5600x",
  "code": "AMD5600x",
  "quantity": 0,
  "is_active": false,
  "category_ukey": 1
}
```

`DELETE /products/:ukey - Request example`

```json
DELETE - products/2

No responde body.
```
