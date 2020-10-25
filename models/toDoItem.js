const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'tododata',  //database
    'postgres',  //username
    'mypassword',//password
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

const toDoItem = sequelize.define('toDoItem', {
    // id: {
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV4,
    //     primaryKey: true,
    //     allowNull: false
    // },
    title: {    
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
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
        defaultValue: new Date((new Date(Date.now())).setMonth((new Date(Date.now())).getMonth()+1)),// refer 43 line
    }
})

//
//Setting deadline with 1 month+ date of creation of todo item
//Date.now(): returns a numerical value corresponding to current date
//but we require a Date object to apply getMonth() and setMonth() functions
const now=new Date(Date.now())
const month=now.getMonth()// 0-11
now.setMonth(month+1)
console.log(now)
//OR Directly
console.log(new Date((new Date(Date.now())).setMonth((new Date(Date.now())).getMonth()+1)))
//

//toDoItem.sync({ force: true })// comment after running once

module.exports = toDoItem