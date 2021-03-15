require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;


sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'adoptables-do-user-8535508-0.b.db.ondigitalocean.com',
    port: 25060
})
// } else {
//     sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });
// }


module.exports = sequelize;