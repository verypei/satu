
function hasNumbers(t){
    var regex = /\d/g;
    return regex.test(t);
}  

function polynominal(str){

    let arr = str.split("+");
    let result = [];
    // [ '270a', '33ab', '45b', '4a', '3b' ]

    for (let i = 0; i < arr.length; i++) {
        let arrTemp = [];
        let tempNum = ""
        let tempAlph = ""
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j].match(/\d+/g)){
                tempNum+=arr[i][j]
            }
            if(arr[i][j].match(/[a-zA-Z]+/g)){
                tempAlph+=arr[i][j]
            }
        }
        arrTemp.push(tempNum,tempAlph)
        result.push(arrTemp)
        arrTemp=[]
        tempAlph=""
        tempNum=""
    }  
    console.log(result)
    // let result2 = result
    // console.log(result2,"...")

    let poly = []

    for (let i = 0; i < result.length; i++) {
        // console.log(result2[i][1])
        let flag =false
        for (let j = 0; j < result.length-1; j++) {
            console.log(result)
            let temp="";
            if(result[j][1]==result[j+num][1]){
                flag=true
                temp+=Number(result[j][0]+Number(result[j+1][0]))
                temp+=result[j][1]
                poly.push(temp)
                temp=""
                // break;
            }
        }
        if(flag==false){

        }
    }
    console.log(poly)
}
console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
//   console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
//   console.log(polynominal('a+2a+3a+4a+5a')) // 15a
//   console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
//   console.log(polynominal('4a+2c+3z+2+z+5')) // 4a+2c+4z+7
//   console.log(polynominal('1')) // 1
//   console.log(polynominal('a'))  // a