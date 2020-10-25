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
const now=new Date(Date.now())
const month=now.getMonth()// 0-11
now.setMonth(month+1)
console.log(now)
//OR
console.log(new Date((new Date(Date.now())).setMonth((new Date(Date.now())).getMonth()+1)))