
    let Root=document.getElementById("root");
    let FetchBtn=document.getElementById("fetchData");
    FetchBtn.addEventListener("click",()=>{ fetch(`https://reqres.in/api/users?page=2`)
    .then(response=>response.json()).then(data=>{

    //  fetch()
    // .then(function(response){return response.json()}).then(function(resObj){printData(resObj.data)})
    // // =>console.log(Data.data))
    // .catch(function(err){
    //     console.error("fetching error",error);
        // })
        
      Root.innerHTML="";
      data.data.forEach(function(user){
        let userCard=document.createElement("div");
        userCard.classList.add('usercard');

        let userImg= document.createElement("img")
        userImg.classList.add('userimg');
        userImg.src=user.avatar;

        let userName=document.createElement("p")
        userName.classList.add('username');
        userName.innerText=`${user.first_name} ${user.last_name}`

        let userEmail=document.createElement("p")
        userEmail.classList.add('useremail');
        userEmail.innerText=user.email;

        userCard.append(userImg,userName,userEmail)
        
        Root.append(userCard)
       
      });
    })
    .catch(error=>{
        console.error("Error occured while fetching user data",error)
    })
})
  

    

