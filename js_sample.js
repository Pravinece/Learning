const inputFields = document.querySelectorAll("input");

// Add event listeners to each input field
inputFields.forEach((input, index) => {
  input.addEventListener("keypress", function(event) {
    const key = event.keyCode;
    if (key === 13) {
      // Check if Enter key is pressed (key code 13)

      // Prevent the default form submission behavior
    //   event.preventDefault();

      // Focus on the next input field if available
      if (index < inputFields.length - 1) {
        inputFields[index + 1].focus();
      } else if(index = inputFields.length - 1){
       const z=document.querySelector("button");
       z.focus();
      } else{
        // If the current input field is the last one, submit the form
        inputFields[index].blur(); // Remove focus from the current field
        // Optionally, you can submit the form here:
        // document.querySelector("form").submit();
      }
    }
  });
});
(myfun=()=>{
  const date=new Date();
  document.getElementById("time").innerHTML=date.toLocaleTimeString();
  document.getElementById("date").innerHTML=date.toLocaleDateString();

  setTimeout(myfun,1000);
})();
     


// function login(){
//          const username=document.getElementById("names").value;
//          const password=document.getElementById("pass").value;
//         }
    //         function aa(){
    //         document.addEventListener("keyup",function(event){
    //             let namess=document.getElementById("names").value;
    //             // document.getElementById("asd").innerHTML=namess;
    //             return names;
    //         })
    // }
    //     function bb(){
    //         document.addEventListener("keyup",function(event){
    //             let passs=document.getElementById("pass").value;
    //             // document.getElementById("asdf").innerHTML=passs;
    //             return passs;
    //         })
    //     }

       function login(){
        x=document.getElementById("names").value;
        y=document.getElementById("pass").value;

        let  users='{"user":[' +
    '{"name":"pravin","pass":"creator"},'+
    '{"name":"dhana","pass":"sister"},'+
    '{"name":"kartick","pass":"friend"},'+
    '{"name":"uday","pass":"friend"},'+
    '{"name":"arvind","pass":"brother"}]}';
  const myobj=JSON.parse(users);
       var flag=0;
       for(const i in myobj.user){
        if(x==myobj.user[i].name && y==myobj.user[i].pass){
          flag=1;
        }
      }
      if(flag==1){
        const myWindow = window.open();
         myWindow.document.open();
         myWindow.document.write("<h1>PRAVIN's WEBSITE</h1>");
         myWindow.document.close();

        }else{
            window.alert("SORRY");
        }
       }
       function checkbox(){
          if(check.checked)
           pass.type="text";
           else
           pass.type="password";
        }