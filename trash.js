function setup(){
    //noCanvas();
    delay(1000)
        .then(()=>console.log("Hello"))
        .catch((err)=>console.error(err));

}
function delay(data){
    return new Promise((resolve, reject)=> setTimeout(resolve,data));
}







//Setting deadline with 1 month+ date of creation of todo item
//Date.now(): returns a numerical value corresponding to current date
//but we require a Date object to apply getMonth() and setMonth() functions
// const now=new Date(Date.now())
// const month=now.getMonth()// 0-11
// now.setMonth(month+1)
// console.log(now)
// //OR
// console.log(new Date((new Date(Date.now())).setMonth((new Date(Date.now())).getMonth()+1)))

// About Postgresql:

// select * from "todoitems";

// 1. \l : show databases
// 2. sudo -u postgres psql  : enter shell with postgres username


// 3. switch to a database e.g.., dvdrental:

//     postgres=# \c dvdrental
//     You are now connected to database "dvdrental" as user "postgres".
//     Note that you can connect to a specific database when you log in to the PostgreSQL database server:

//     $ psql -U postgres -d dvdrental
//     In this command, -d flag means database.
//     In this command, you connect to the dvdrental datbase using the postgres user.

function setup(){
    fetch(wordnikAPI)
        .then(response=>response.json())
        .then(json=>{
             
        })
}
