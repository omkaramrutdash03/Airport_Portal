const button=document.getElementById("mybutton");
const takenemail=document.getElementById("email");
const takenpassword=document.getElementById("password");
function submitData(){
     if(takenemail.value !== "" && takenpassword.value !==""){
        const obj={
            id:Date.now(),
            email: takenemail.value,
            password:takenpassword.value,
        };
        fetch("http://localhost:8000/mydata", {
            method:"POST",
            headers: {
                "content-Type":"application/json",
            },
            body: JSON.stringify(obj),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            alert("Account Created Successfully! Login to continue ");
            window.location.href = './valid.html';
        })
        .catch((err)=> console.log(err));
     }
     else{
        alert("fill in the form");
     }
}
function call(){
    window.location.href='./valid.html';
}
