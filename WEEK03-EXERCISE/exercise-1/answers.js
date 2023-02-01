function sayHello () {
    return "Hello world!"
}

function isString (input) {
    if(typeof input == "string"){
        return true
    }
    else{
        return false
    }
    
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น String ให้ return true, ถ้าไม่ใช่ return false
}

function isNumber (input) {
    if(typeof input == "number"){
        return true
    }
    else{
        return false
    }
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Number ให้ return true, ถ้าไม่ใช่ return false
}

function isArray (input) {
    if(Array.isArray(input)){
        return true
    }
    else{
        return false
    }
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Array ให้ return true, ถ้าไม่ใช่ return false
}

function isObject (input) {
    if(input != null && typeof input === "object" && Array.isArray(input) == false){
        return true
    }
    
    else{
        return false
    }
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Object ให้ return true, ถ้าไม่ใช่ return false
}

function isFunction (input) {
    if(typeof input == "function"){
        return true
    }
    else{
        return false
    }
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Function ให้ return true, ถ้าไม่ใช่ return false
}