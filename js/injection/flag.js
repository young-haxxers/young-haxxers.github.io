const flag = process.env.JS_INJECTION_FLAG;

if (document.cookie.includes("complete=true")){
       alert(flag);
} else {
      alert("STOPP CHEATING IT DIDNT WORK");
}
