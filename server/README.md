# Server

Create `.env` file:

```text
PORT=3000
DB_HOST='127.0.0.1'
DB_USERNAME=[USERNAME]
DB_PASSWORD=[PASSWORD]
DB_NAME='notes'
```

Commands used to set up database:

```bash
npx sequelize db:create
npx sequelize model:create --name Notes --attributes title:string,note:text,tag:string
npx sequelize db:migrate
npx sequelize seed:generate --name Notes
npx sequelize db:seed:all
npx nodemon
```
