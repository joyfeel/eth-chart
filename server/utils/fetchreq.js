
let fetchJSON = async (url)=>{
  
    let response  =  await fetch(url);
    let JOSNdata = await response.json();
    return JOSNdata;
} 

module.exports = fetchJSON;