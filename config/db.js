const Sequelize = require('sequelize');

const sequelize = new Sequelize('LKE', 'ali', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
}); //db isea
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.UtamaModel = require('../models/UtamaModel.js')(sequelize, Sequelize);
db.AreaModel = require('../models/AreaModel.js')(sequelize, Sequelize);
db.SubAreaModel = require('../models/SubAreaModel.js')(sequelize, Sequelize);
db.PertanyaanModel = require('../models/PertanyaanModel.js')(sequelize, Sequelize);
db.JawabanModel = require('../models/JawabanModel.js')(sequelize, Sequelize);
db.BuktiModel = require('../models/BuktiModel.js')(sequelize, Sequelize);

// digunakan untuk associated
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
module.exports = db;