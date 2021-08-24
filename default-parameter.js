function sumNumber(num1 = 0 , num2 = 0){ // set default parameter 


    // option one
    // if( num2 == undefined){
    //     num2 = 0;
    // };

    //option two
    // num2 = num2 || 0;

    const sum  = num1 + num2 ;
    return sum;
};


console.log(sumNumber());