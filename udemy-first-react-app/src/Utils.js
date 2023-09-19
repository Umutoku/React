const isArrayEmpty = (arr) =>{
    if(arr !== undefined && arr !== null && arr.length >0){
    return false;
}
    return true;
}

const dumpLogs = (x) =>{
    console.log(x);
}

export {isArrayEmpty,dumpLogs}