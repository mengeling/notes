// "use strict";
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
import { fileURLToPath } from "url";
import dbConfig from "../config/config.js";

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require("sequelize");
// const process = require("process");
// const config = require(__dirname + "/../config/config.js")[env];
// const basename = path.basename(__filename);
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const basename = path.basename(filename);

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

(async () => {
  const files = fs
    .readdirSync(dirname)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );

  await Promise.all(
    files.map(async (file) => {
      const module = await import(path.join(dirname, file));
      const model = module.default(sequelize, Sequelize);
      db[model.name] = model;
    })
  );

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
})();

// fs.readdirSync(dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const module = await import(path.join(dirname, file));
//     import model from path.join(__dirname, file)
//     const modelClass = sequelize.define(path.join(__dirname, file));
//     const model = new modelClass(
//       // const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     console.log(model.name);
//     db[model.name] = model;
//   });
// console.log(db);

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
