let arr = [1,2,3,4,5,6]



let result = arr
                .filter(num => num % 2 === 0)
                .map(num => num * 3)
                .reduce((total, curr) => total + curr, 0);
                
console.log(result)