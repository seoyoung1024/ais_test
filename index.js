const express = require('express')
const app = express() //메소드 실행됨 이거 안쓰면 위에거 소용 없음 이 두줄만 하면 서버가 만들어진 것임

const cors = require('cors')
app.use(cors()) //

app.get('/login/:id', (req, res)=>{

  const id = req.params.id
  
  let name = ""

  if(id=="lee"){
    name = "이다영"
  }
  else if(id=="kim"){
    name = "김한비"
  }
  else if(id=="hong"){
    name = "홍혜정"
  }
  else if(id=="ju"){
    name = "주서영"
  }

  // let msg = ""
  // if(name!=""){
  //   msg = name + "님 환영합니다!"
  // }
//아래의 코드와 같은 것

  const returnValue = {
    msg: name == "" ? "" : name + "님 환영합니다!"
  }

  // const name = req.params.name
  // const collage = req.params.collage
  // console.log(name, collage)
  // let age = 0

  // if(name == "lee" && collage == "A"){
  //     age = 20

  // }else if(name == "hong" && collage == "B"){
  //     age = 21
  // }
  res.send(returnValue)
}) 

// app.get('/get_collage', (res, res)=>{
//   res.send("글큔..")
// })
// //req가 응답을 받음 그리고 db검색 후 res로 보냄?
// //post와 get의 차이점 post는 많이 담을 수 있지만 무겁다. get은 많이 못 담지만 속도는 빠르다. 그리고 보안상문제

app.listen(process.env.PORT || 3002, ()=>{ //거기서 제공해주는 포트를 쓰겠다는 뜻, 아니면 3002 로컬호스트를 쓴다는 의미
  console.log("connected on server port 3002")
})