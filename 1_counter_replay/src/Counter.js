module.exports= function count_to(start_on=10,callback){
  console.log('start_on='+start_on)
  count= start_on;
  const timer= setInterval(_ =>{
    callback(count)
    if(count--==0)
      clearInterval(timer)
  },1000);
}
