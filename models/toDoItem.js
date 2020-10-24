const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'tododata',
    'me',
    'password',
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

const toDoItem = sequelize.define('toDoItem', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {    
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    priority: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    deadlineDate: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
        allowNull: false
    }
})

// toDoItem.sync({ force: true })

module.exports = toDoItem