# Server

Create `.env` file:

```text
PORT=3000
DB_HOST='127.0.0.1'
DB_USERNAME=[USERNAME]
DB_PASSWORD=[PASSWORD]
DB_NAME='notes'
```

Sequelize Commands:

```bash
npx sequelize db:create
npx sequelize model:create --name notes --attributes note:text,tag:string
npx sequelize db:migrate
npx sequelize seed:generate --name notes
```
