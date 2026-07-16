console.log("Challenge 2");


function maskify(str) {
    strArr = [...str];
    strArrMasked = strArr.map((element, index) => (index < strArr.length - 4)? element = "#" : element = element);
    
    const maskified = strArrMasked.join("");
    console.log(maskified);
    return maskified; 
}  

maskify("4556364607935616");
maskify("1");
maskify("");
maskify("skippy");
maskify("Nananananananananananananananana Batman!");