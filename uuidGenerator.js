var baseConvert = require('baseconvert');

function randomHexInc (low, high) {
    let decimalNumber = Math.floor(Math.random() * (high - low + 1) + low);
    let hexNumber = baseConvert.dec2hex(decimalNumber)
    return hexNumber
}

let randomHexs=function(hexs,min,max){
    let result=randomHexInc(min,max)
    for(let i =1;i<hexs;i++){
        result=result+randomHexInc(min,max)
    }
    return result
}

timeLow=randomHexs(8,0,15)               
timeMid=randomHexs(4,0,15)               
timeHighandVersion="4"+randomHexs(3,0,15)
clockSeqandReserved=randomHexs(1,8,11)+randomHexs(1,0,15)   
clockSeqLow=randomHexs(2,0,15)           
item=randomHexs(12,0,15)                 

console.log("uuid_v4: "+timeLow+'-'+timeMid+'-'+timeHighandVersion+'-'+clockSeqandReserved+clockSeqLow+'-'+item)

