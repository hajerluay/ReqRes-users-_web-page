const div = document.getElementById('users');
//to save user info 
let users=[];
fetch("https://reqres.in/api/users?page=2").then(response => response.json()).then(result => {
    //to get the users info inside users varaible
    //data is a key of result object
    users=result.data
    //to print out the users data
    renderUser(users);
});

function renderUser(user){
    for(user of user){

        console.log(user.first_name);
        div.insertAdjacentHTML ("beforeend",`<div class="user">
        <h3>${user.first_name} ${user.last_name}</h3>
        <h3>${user.email}</h3>
        <img src="${user.avatar}">`)
    }

}


const input=document.getElementsByTagName("input")[0];
//when we type  in  an input the  div will be empty;
input.addEventListener("input",(event)=>{
    //when we type anything the other users will delete
    div.innerHTML="";
    //to print out the users data
    renderUser(users.filter((user)=>{
        //in this case event.target==input
        //startwith method means the begining of word
        if(user.first_name.startsWith(`${event.target.value}`)||user.last_name.startsWith(`${event.target.value}`)||user.email.startsWith(`${event.target.value}`)){

            return user;
        }


    }));

})