/*document.getElementById("ahmed").addEventListener("dblclick",()=>{
    alert("تم تنفيد الاوامر")
});*/

/*function beforeunload(){
    return "";
}
function beforeprint(){
alert("tm");
}*/


/*function key(event){
    if(event.key == "1"){
        location.reload();
    }
    alert(event.key);
}*/
/*let ahmed = document.getElementById("email");
ahmed.addEventListener("invalid", ()=>{
    aitmouh()
});

ahmed.addEventListener("input", ()=>{
    aitmouh()
});


function aitmouh(){
    if(ahmed.validity.valueMissing){
        ahmed.setCustomValidity("لم تقم بوضع بيانات ضمن هدا الحقل ");
    }else if(ahmed.validity.typeMismatch){
        ahmed.setCustomValidity("بيانات غير صالحة");

    }else{
        ahmed.setCustomValidity("");
        return true;

    }
document.getElementById("not").innerText = ahmed.validationMessage;
}*/





/*let aitmouh = document.getElementById("ahmed");
aitmouh.addEventListener("submit",(error)=>{
    let email = document.getElementById("email");
    if(email.value.indexOf("@gmail") != -1){
        return true;

    }else{
        email.style.borderColor = "red";
        document.getElementById("error").innerHTML = "ايمايل غير صالح من نوع جيمايل"
        alert("ايمايل غير صالح من نوع جيمايل");
    }
    error.preventDefault();
    
});*/

var text = "ahmed ait mouh";
var encide_text = btoa(text);

let decode_text = atob(encide_text);

let textarea = document.getElementById("text");
let result = document.getElementById("Result");
let select = document.getElementById("select");

textarea.addEventListener("input",()=>{
    aitmouh();

});
select.addEventListener("change",()=>{
    aitmouh();
});

function aitmouh(){
    if(select.value == "decode"){
        result.value = window.atob(textarea.value) ;

    }else{
        result.value = window.btoa(textarea.value) ;


    }
}





