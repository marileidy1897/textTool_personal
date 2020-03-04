
window.onload = function(){
    var text = document.getElementById("text_tranform");
    let uppercase = document.getElementById("uppercase");
    let lowercase = document.getElementById("lowercase");
    let capitalize= document.getElementById("capitalize");

    lowercase.onclick = ()=>{
        let textResult=text.value.toLocaleLowerCase();
        text.value=textResult;
    }
    capitalize.onclick = ()=>{
        let textResult=text.value.toLocaleLowerCase();
        textResult=textResult.charAt(0).toUpperCase()+textResult.slice(1);
        text.value=textResult;
    }
    uppercase.onclick = ()=>{
        let textResult=text.value.toLocaleUpperCase();
        text.value=textResult;
    }
}