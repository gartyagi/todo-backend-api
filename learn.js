function setup(){
    //noCanvas();
    delay(1000)
        .then(()=>console.log("Hello"))
        .catch((err)=>console.error(err));

}
function delay(data){
    return new Promise((resolve, reject)=> setTimeout(resolve,data));
}
setup();