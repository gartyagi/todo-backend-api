scanning qr_code from qr_image
get battery_id from battery table
deduct charges of recharging battery, if not available return error 
then update battery id in battery vehicle mapping

const qrSwap = async(qrObject)=>{
    const qrCode=qrObject.qr_code
    const vehicleID=qrObject.vehicle_id
    let query=`select battery_id from battery where qr_code = ${qrCode}`
    const queryResult = await PostgreSql.query(query);
    if(!queryResult.status) {
        return queryResult.status;
    }
    const batteryID = queryResult.data;
    //deduct charges if available else return error
    query= 'update vehicle_battery_mapping set battery_id = ${batteryID} where vehicle_id = ${vehicleID}'
    const queryResult = await PostgreSql.query(query);
    return queryResult.status;
} 





//configuring the Aws environment
Aws.config.update({
    accesskeyid: "<Access Key Here>";
    secretAccesskey: "<secret Access Key Here>"
    region: "<Region here>"
});
let s3 = new Aws.S3();
const params = {
    Bucket: '<Bucket Name Here>',
    Body: qrImage
    Key: "battery"+Date.now()+batteryObject.vendorBatteryId;
};
s3.upload(params, function (err, data){
    if (err) {
        logger.error(`${generateError(err)}`)
    }
});