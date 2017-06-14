let dateToTimestamp = (date)=>{
    if (!(date instanceof Date)) throw new Error('timestamp must be an instance of Date.');
    return Math.floor(date.getTime() / 1000);
}

module.exports = dateToTimestamp;