function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    
    var num = input.map((value, index, array) => {return value * value})
    return num
}

function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()

    var num = input.map((value, index, array) => {return value.temperature = fah_to_celsius(value.temperature)})
    return input

    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
        
    }
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    var num = input.filter((value, index, array) => {return value % 2 === 0})
    return num
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
    var num = input.people.filter((value, index, array) => {return value.age >= input.min && value.age <= input.max})
   
    return num
}

function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter

    var num = input.people.filter((value, index, array) => {return value.id != input.removeId})
    return num

}

function replaceBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง

    // input = [27, 0,1,2,3,9,5]

    // if(input[0] != 0){
    //     input.splice(0, 1, 0)
    // }
    // if(input[input.length-1] != input[input.length-2]-1){
    //     input.splice(input.length-1, 1, input[input.length-2]-1)
    // }
    // for(let i = 1 ; i < input.length; i++){
    //     // input[i+1] = input[i]
        
    //     if(input[i] != (input[i+1]+1) || input[i] != input[i-1]-1){
    //         input.splice(i, 1, input[i-1]+1)
    //     }
    // }
    
    input.splice(4, 1, 4)

    return input
    // input.splice()
    
}
