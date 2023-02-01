function convertADtoBE(input) {
    // AD คือคริสดศักราย
    // BE คือพุทธศักราช
    //
    // TODO: แปลงปีใน คริสตศักราช เป็น พุทธศักราช เช่น 2000 เป็น "พ.ศ. 2543"
    // โดยให้เติมตัวอักษร พ.ศ. เข้าไปด้านหน้าด้วย\
 
    if(input < 0 || typeof input != "number"){
        return "ไม่ถูกต้อง"
    }
    else{
        return "พ.ศ. " + (input+543) + ""
    }
    // return input+543
}

function evenOrOdd(input) {
    // TODO: ให้ตรวจสอบว่าตัวเลข input เป็นเลขคู่หรือเลขคี่
    if(input % 2 == 0){
        return "even"
    }
    else{
        return "odd"
    }
}

function getFullName(input) {
    
    // TODO: ให้นำคำนำหน้าชื่อ ชื่อต้น นามสกุล มาต่อกัน
    if(input.sex == "female"){
        return "Ms." + " " + input.firstName + " " + input.lastName
    }
    if(input.sex == "male"){
        return "Mr." + " " + input.firstName + " " + input.lastName
    }
}

function getFirstName(input) {
    // TODO: ให้ทำการตัดนามสกุลออกโดยใช้ indexOf() และ substring()
    let space = input.indexOf(" ")
    return input.substring(space+1) 
    // return "1"
}