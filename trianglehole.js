function doesTriangleFit(arr1,arr2){
  console.log(arr1)
  
  for(let i=0; i<arr1.length; i++){
      if(arr1[i] <= arr2[i]){
          continue
      } else{
          return false
      }
  }
  return true
  
  
  
   
}


console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]))