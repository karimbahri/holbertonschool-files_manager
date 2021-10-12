/* eslint-disable */
const { MongoClient } = require("mongodb");
const DBClient = class {
  constructor() {
    const db_host = process.env.DB_HOST || "localhost";
    const db_port = process.env.DB_PORT || "27017";
    const db_database = process.env.DB_DATABASE || "files_manager";
    this.status = false;

    const client = new MongoClient(`mongodb://${db_host}:${db_port}`, {
      useUnifiedTopology: true,
    });
    let d;
    client.connect((err, data) => {
      console.log(data, err);
      if (!err) {
        this.status = true;
        this.db = data.db(db_database);
        this.users = this.db.collection("users");
      }
    });
    console.log(client.db, " - ", d);
  }
  isAlive() {
    return this.status;
  }
  async nbUsers() {
    return this.db.collection("users").countDocuments();
  }
  async nbFiles() {
    return this.db.collection("files").countDocuments();
  }
};
module.exports = new DBClient();
