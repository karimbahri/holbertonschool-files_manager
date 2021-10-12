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
    client.connect((err) => {
      if (err) {
        console.log(err);
      }
      this.status = true;
      this.db = client.db(db_database);
    });
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
