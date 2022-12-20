let array = [8, 5, 2, 9, 5, 6, 3]

bubleSort(array)
 
function bubleSort(array){
    for(let n = 0 ; n < array.length; n++){
        for (let i = 0; i <array.length-1-n; i++){
                if (array[i]> array[i + 1]){
                    const buff = array[i]
                    array[i] = array [ i + 1]
                    array [ i + 1] = buff
                
                }
            }
    }

   
    return array
}

console.log(array);