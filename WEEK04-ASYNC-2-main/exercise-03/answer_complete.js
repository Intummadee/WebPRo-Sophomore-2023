// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร

  let num = document.getElementById('dogTime').innerHTML

  console.log(num)
  let time = setInterval(() => {
    num = parseInt(num) - 1
    document.getElementById('dogTime').innerHTML = "" + num
    if(num == 0){
      loadJoke()
      clearTimeout(time)
    }
  }, 1000)


  function getAPI(url, success, error){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        const res = JSON.parse(this.response);
        success(res)
      }
      else if(this.readyState == 4){
        const res = JSON.parse(this.response);
        error(res)
      }
    };

    xhttp.open('GET' , url, true)
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send();



  }

  function loadJoke(){
    getAPI('https://dog.ceo/api/breeds/image/random' , (res) => {
      console.log(res)
      document.getElementById('dogImg').src = res.message
    }, (err) => {
      console.log(err)
    })
  }

  


}
























// // ข้อ 3.2
// function Rainbow() {
//   //TODO
//   // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
//   // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
//   // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

//   const rainbow = document.getElementById("rainbow")
//   setTimeout(() => {
//     // STATE 1 color = 'has-text-primary'
//     rainbow.className = 'has-text-primary'
//     // console.log(rainbow.className)
//       setTimeout(() => {
//         // STATE 2 color = 'has-text-success'
//         rainbow.className = 'has-text-success'
//         setTimeout(() => {
//             // STATE 3 color = 'has-text-success'
//             rainbow.className = 'has-text-success'
//         }, 2000)

//       }, 2000)

//   }, 2000)


  
  
// }
// async function error_ja(){
//   try{
//     let color = await Rainbow()
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// function getResult(){
//   const num = Math.floor(Math.random() * 10)
//   console.log(num)
//   if(num > 5) {
//     return {
//       'status': 'success',
//       'text': num
//     }
//   }else{
//     return {
//       'status': 'error',
//       'text': num
//     }
//   }
// }



// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow")
  let a = getResult()
  console.log(a.status)

  

  setTimeout(() => {
    // STATE 1 color = 'has-text-primary'
    let a = getResult()
    if(a.status == "error"){
      rainbow.className = 'has-text-danger'
      rainbow.innerHTML = "STATE 1"
    }
    else{
      rainbow.innerHTML = "STATE 1"
    rainbow.className = 'has-text-primary'
    }
      setTimeout(() => {
        let a = getResult()
        // STATE 2 color = 'has-text-success'
        if(a.status == "error"){
          rainbow.className = 'has-text-danger'
          rainbow.innerHTML = "STATE 2"
        }
        else{
          rainbow.innerHTML = "STATE 2"
        rainbow.className = 'has-text-success'
        }
        setTimeout(() => {
          let a = getResult()
            // STATE 3 color = 'has-text-success'
            if(a.status == "error"){
              rainbow.className = 'has-text-danger'
              rainbow.innerHTML = "STATE 3"
            }
            else{
              rainbow.innerHTML = "STATE 3"
              rainbow.className = 'has-text-success'
            }
        }, 2000)

      }, 2000)

  }, 2000)




}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
}













// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้

  let dogdiv = document.getElementById('result1').innerText

  let cat = new Promise(function (resolve, reject){
    if(num % 2 == 0){
      resolve("success")
    }
    else{
      reject("error")
    }
  })

  cat.then((success) => {
    console.log(success);
    document.getElementById('result1').innerText = "success : " + document.getElementById('number').value + " is an even number" 
    
  }).catch((error) => {
    console.log(error);
    document.getElementById('result1').innerText = "error : " + document.getElementById('number').value + " is not an even number" 
  })



}


















var num = 1

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  

  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(delay < 500){
        resolve(delay)
      }
      else{
        reject(delay)
      }
    } , delay)
  })

  // return promise
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ


  task(1).then(result => {
    console.log("task 1: " + result + "ms ... PASS")
  })
  .catch((error) => {
    console.log("task 1: " + error + "ms ... NOT PASS")
  })


  task(2).then(result => {
    console.log("task 2: " + result + "ms ... PASS")
  })
  .catch((error) => {
    console.log("task 2: " + error+ "ms ... NOT PASS")
  })

  task(3).then(result => {
    console.log("task 3: " + result + "ms ... PASS")
  })
  .catch((error) => {
    console.log("task 3: " + error+ "ms ... NOT PASS")
  })


  task(4).then(result => {
    console.log("task 4: " + result + "ms ... PASS")
  })
  .catch((error) => {
    console.log("task 4: " + error+ "ms ... NOT PASS")
  })



}























// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด

// password


function checkAuth(password) {
 

  return new Promise((resolve, reject) => {
    if(document.getElementById('password').value == "Cisco"){
      resolve("รหัสผ่านถูกต้อง")
    }
    else{
      reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง")
    }
  })


}



function fetchData(password) {
  checkAuth(password).then((result) => {
    alert(result)
    getAPI('https://dog.ceo/api/breeds/image/random' , (res) => {
      console.log(res)
      document.getElementById('cat').src = res.message
    }, (err) => {
      console.log(err)
    })
    console.log(result)
  }).catch((error) => {
    alert(error)
  })
}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
