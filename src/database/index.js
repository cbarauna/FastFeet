import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Recipient from '../app/models/Recipient';

const models = [Recipient];

class Datebase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Datebase();
