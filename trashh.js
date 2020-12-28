// const { Pool } = require("pg");
// const add_vendor=(req,res)=>{
//     try{
//         let id=req.body.id;
//         let name =req.body.name;
//         let state= req.body.state;
//         let address= req.body.address;
//         const values = [id,name,state,address];
//         const query="INSERT INTO energy_services(id,name,state,office_address)VALUES($1,$2,$3,$4)";
//         const pool = new Pool({
//             user: "energy_services",
//             host: "dev-pg-master.oyerides.in",
//             database: "energy_services",
//             password: "d123lambda",
//             port: "5432"
//         });
//         pool.query(query
//             ,values,
//             (err, res) => {
//                 if(err){
//                     console.log(err);
//                 }
//                 pool.end();
//             }
//         );
//     }
//     catch(error){
//         res.status(500).send({
//         status: false,
//         message: "Unformatted Data"
//         });
//     }
// }
// module.exports=add_vendor;
////



var qr=require('qr-image');
//// generating random string of format random(10)+currentTimeStamp+random(8)
let a='0';
while(a=='0'){
    a=Math.random().toString(36);
}
let b='0';
while(b=='0'){
    b=Math.random().toString(36);
}
let qr_code = a.substring(2,12)+Date.now()+b.substring(2,10);

//generating qr image
let qr_image=qr.image(qr_code);//default png type
console.log(qr_image);

//// Uploading qr_image
const AWS = require('aws -sdk');
//configuring the Aws environment
AWS.config.update({
    accesskeyid: "<Access Key Here>";
    secretAccesskey: "<secret Access Key Here>"
    region: "<Region here>"
});
let s3 = new AWS.S3();

//configuring parameters
const params = {
    Bucket: '<Bucket Name Here>',
    Body: qr_image
    Key: "battery"+Date.now()+batteryid;//battery_currentTimestamp_vendor_battery_id 
    
};
s3.upload(params, function (err, data){
    //handle error
    if (err) {
        console.log("Error", err);
    }
    //success
    if (data) {
        console.log("uploaded in:", data.Location);
    }
});