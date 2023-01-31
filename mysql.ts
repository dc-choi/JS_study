import { Sequelize } from 'sequelize';

import { env } from '../env';

import logger from '../lib/logger';

import Qoo10Service from '../marketplace/qoo10/qoo10.service';

import { Categories } from '../models/mysql/categories.model';
import { Items } from '../models/mysql/items.model';
import { Orders } from '../models/mysql/orders.model';
import { OrderDetails } from '../models/mysql/order_details.model';
import { Deliverys } from '../models/mysql/deliverys.model';
import { Emails } from 'src/models/mysql/emails.model';

// import { Orders } from '../models/mysql/orders.model';
// import { OrderDetails } from '../models/mysql/order_details.model';
// import { Deliverys } from '../models/mysql/deliverys.model';

/**
 * sequelize-auto -o "./src/models/mysql" -d adhoc_marketplace -h localhost -p 3306 -e mysql -u root -x -l ts --cm p --indentation 4
 */
const sequelize = new Sequelize(env.mysql.schema, env.mysql.username, env.mysql.password, {
    host: env.mysql.host,
    dialect: 'mysql',
    port: parseInt(env.mysql.port, 10),
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        freezeTableName: true
    },
    timezone: '+09:00',
    logQueryParameters: env.mode.dev,
    logging: (query) => {
        if (query?.includes('SELECT 1+1 AS result')) return;
        logger.sql(query);
    }
});

export {
    sequelize as mysql
};

export function initModels() {
    // Categories.initModel(sequelize);
    // Items.initModel(sequelize);
    // Orders.initModel(sequelize);
    // OrderDetails.initModel(sequelize);
    // Deliverys.initModel(sequelize);
    // Emails.initModel(sequelize);
}

export function connect() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async(resolve, reject) => {
        initModels();

        try {
            await sequelize.authenticate();
            logger.log('MySQL Connection has been established successfully.');
            resolve(null);
        } catch (error) {
            logger.error('Unable to connect to the MySQL:', error);
            reject(error);
        }
    });
}
