const app = require('./app')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'tododata',
    'postgres',
    'mypassword',
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

sequelize.authenticate().then(log => console.log('Postgres DB Connection Successful'))
.catch('DB Connection Not Successful')

const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log('Running on port', port)
})