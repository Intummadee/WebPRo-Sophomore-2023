// ข้อ4.1
async function getAllUser(){
    //TODO
    // 1. ให้ใช้ Try Catch
    // 2. เรียกใช้ฟังก์ชัน ApiDelay()
    // 3. หากเรียกฟังก์ชันสำเร็จให้ (status: 200) ให้นำ message แสดงในกล่องข้อความ
    // 4. หากเรียกฟังก์ชันไม่สำเร็จ (message: "SERVER ERROR") ให้นำ message แสดงในกล่องข้อความ

    try{
        const numva = await ApiDelay()
        console.log(numva)
        document.getElementById('TA').innerHTML = numva.message
        
    }
    catch(err){
        document.getElementById('TA').innerHTML = err.message

    }

}

// ข้อ 4.2 
function checkAuth(password) {
    return new Promise((resolve, reject) => {
        if(document.getElementById('password').value == "In4matioN"){
          resolve("รหัสผ่านถูกต้อง")
        }
        else{
          reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง")
        }
      })
}

async function fetchData(password) {
   try {
        const cat = await checkAuth(password)   
        alert(cat)
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {'Accept': 'application/json'}
        }).then(response => response.json()).then(data => {
            console.log(data[0].url)
            document.getElementById('cat1').src = data[0].url
        })
        console.log(document.getElementById('cat1'))

   } catch (error) {
        alert(cat)
        console.log(error)
   }
}


/* 
    Function สำหรับ TA กับ อาจารย์
    นักศึกษากรุณา อย่าแก้ไข
*/

async function ApiDelay () {
      return new Promise(resolve => {
        setTimeout(() => resolve(_fakeAPI()), 1000)
       
    })
}

async function _fakeAPI() {
    const user = ["Bank", "Mac", "Takai", "Fluke"]
    
    if(Math.floor(Math.random() * 3) === 1){
        throw new Error("SERVER ERROR")
    }

    return {
        status: 200,
        message:user[Math.floor(Math.random() * 4)]
    }
}
