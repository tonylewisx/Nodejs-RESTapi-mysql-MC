module.exports = {
    HOST: "localhost",
    USER: "giftaid",
    PASSWORD: "giftaid",
    DB: "giftaiddb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };