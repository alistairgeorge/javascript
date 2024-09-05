const buf = Buffer.from("abc").toString("base64");
console.log(buf);
// YWJj

let decimalValues = "abc";
decimalValues = decimalValues.split("")
.map((char) => char.charCodeAt(0).toString(10));

console.log(decimalValues);
// [ '97', '98', '99' ]

let binaryValues = decimalValues.map((decimal) => {
    let binary = (decimal >>> 0).toString(2);
    return "00000000".substring(binary.length) + binary;
});  

console.log(binaryValues);
// ["01100001", "01100010", "01100011"]

binaryValues = binaryValues.join("").match(/.{1,6}/g); 
console.log(binaryValues);

// ["011000", "010110", "001001", "100011"]

let indexes = binaryValues.map(b => parseInt(b, 2)); 
console.log(indexes)
// [24, 22, 9, 35]

let encodingTab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let out = indexes.map(e => encodingTab.charAt(e)).join(""); 
console.log(out);
// YWJj