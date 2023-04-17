    var input_text = document.querySelector("#input_text");
	var input_password = document.querySelector("#input_password");
	var error_msg = document.querySelector(".error_msg");

    let finalURL = `https://randomuser.me/api/?results=1`;
  //console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.results[0].login.username);
        const username = data.results[0].login.username;
        const password = data.results[0].login.password;
       // console.log(username);
        //console.log(data.results[0].login.password);
        let uname = username;
        let pword = password;
        let my_object_ser1 = JSON.stringify(uname);
        localStorage.setItem("username",my_object_ser1);
        let my_object_ser2 = JSON.stringify(pword);
        localStorage.setItem("password",my_object_ser2);
    });
    console.log(JSON.parse(window.localStorage.getItem("username")));
    console.log(JSON.parse(window.localStorage.getItem("password")));



function validation(){


    if((input_text.value!=JSON.parse(window.localStorage.getItem("username")))||(input_password.value!=JSON.parse(window.localStorage.getItem("password"))))
    {
        error_msg.style.display = "inline-block";
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
    }
    else 
    {
        return true;
    }
} 

var input_fields = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length > 0){
			login_btn.disabled = false;
			login_btn.className = "btn enabled"
		}
	})
})
