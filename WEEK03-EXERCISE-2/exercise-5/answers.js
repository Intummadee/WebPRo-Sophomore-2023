function plus(input){
    // TODO: สร้าง function ที่นำ input จำนวน 2 ตัวมาบวกกัน
    let ans = 0;
    for(let i = 0 ; i < input.length; i++){
        ans += input[i]
    }
    return ans
}

// TODO: แก้ประเภทตัวแปลใน function นี้ให้ค่าที่ return ออกมาตรงกับคำตอบ 41
// *** เปลี่ยนได้เฉพาะประเภทตัวแปล ***  
// global variable
// Variables declared Globally (outside any function) have Global Scope.
var a = 'Hello';

function greet() {
    // local variable
    var b = 'World';
    if (b == 'World') {
        // block-scoped variable
        var c = 'hello';
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
    return a + ' ' + b + ' ' + c
    

}

function varLetConst() {
    // TODO: แก้ประเภทตัวแปลใน function นี้ให้ค่าที่ return ออกมาตรงกับคำตอบ 41
    // *** เปลี่ยนได้เฉพาะประเภทตัวแปล ***
    var k = 5
    var j = 30
    var i = 0
    for (let j = 0; j <= 5; j++) {
        i++
    }
    for (let  j = 0; j <= 5; j++) {
        j++
    }
    console.log(j)
    console.log(i)
    console.log(k)
    console.log(j + k + i)
    return j + k + i
}

function chainfunction(input){
    // TODO: จงใช้ String method และการ chain function ให้ผลลัพธ์ตรงตามโจทย์

    //เขียนต่อจาก Return ได้เลยครับ
    input = input.trimStart();
    input = input.trimEnd();

    var space = input.indexOf(" ")
    let part = input.slice(0, space);
    let part2 = input.slice(space+1)
    console.log(part2)

    // for(let el of input){

    //     let newText = input.replace(" ", "");
    // }

    input = input.replace(part, part.toUpperCase()) 
    input = input.replace(part2, part2.toLowerCase()) 
     
    return input
}