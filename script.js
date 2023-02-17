console.log(pow(5, 5))
console.log(fibo(8)) // 1, 1, 2, 3, 5, 8, 13, 21, 34

function pow (number, degree){
    if(degree === 1) return number
    return number*pow(number, degree - 1)
}

function fibo (number){
    if(number === 0) return 0
    if(number === 1) return 1
    if(number > 1) return fibo(number-1) + fibo(number-2)
}
