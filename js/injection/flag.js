const flag = process.env.JS_INJECTION_FLAG;

function flag() {
       if (document.cookie.includes("complete=true")){
              alert(flag);
       } else {
             alert("STOPP CHEATING IT DIDNT WORK");
       }
}
