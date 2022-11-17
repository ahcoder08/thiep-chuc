var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(oders){
    var sum = 0 ;
    for(var i = 0 ; i<oders.lenght; i++){
        sum = sum + oders[i].price
    }
    return sum 
}
getTotal(oders);