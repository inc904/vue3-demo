const requestList = []
const pool = new setInterval()
const waitQueue = []
const request = (reqFn, max)={
  return new Promise((resolve, reject)=>{
    const isFull = pool.size >= max
    const newReqFn = ()=>{
      reqFn().then(res =>  resolve(res)).catch(error => reject(error)).finally(()=>{
        pool.delete(newReqFn)
        const next = waitQueue.shift()
        if(next){
          pool.add(next)
          next()
        }
      })
    }
    if(isFull){
      waitQueue.push(newReqFn)
    }else{
      pool.add(newReqFn)
      newReqFn()
    }
  })
}
requestList.forEach(async(item)=>{
  const res=  await request(item.reqFn, item.max)
  console.log(res)
})