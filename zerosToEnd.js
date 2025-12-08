function zeroesToEnd(numarr){
  
    
    let final = []
    let count = 0
    
    numarr.forEach((na) => {
        if(na !== 0){
            final.push(na)
        }else{
            count = count + 1
        }
    })
   
    final = [...final,...Array(count).fill(0)]
    return final
    
    
   
}


console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]))