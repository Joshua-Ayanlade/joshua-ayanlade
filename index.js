const form= document.querySelector("#myform");
const textInput= document.querySelector("#text1");
const emailInput= document.querySelector("#email");
const telInput = document.querySelector("#tel");
const msgInput =document.querySelector("#message");
const msg =document.querySelector("#msg");
const send= document.querySelector("#send");
const hire= document.querySelector("#hire");
const about= document.querySelector("#abt");
const contact= document.querySelector("#contact");
const aboutme= document.querySelector("#txt");
const detail= document.querySelector(".detail");


form.addEventListener("submit", onsubmit)

function onsubmit(e){
    e.preventDefault();

    

        if(textInput.value=="" || emailInput.value=="" || telInput.value=="" || msgInput.value==""){
            msg.innerHTML="Please, enter all fields";
            msg.classList.add("error");

            setTimeout(toremove, 4000)
            function toremove(){
                msg.remove()
            }
        } 
        else{
            console.log("success")

            textInput.value="";
            emailInput.value="";
            telInput.value="";
            msgInput.value="";
        }
    
   
}

// To add style when filling form
const text= document.querySelector("#text1");
const email= document.querySelector("#email");
const tel= document.querySelector("#tel");
const message= document.querySelector("#message");



text.addEventListener("click", totext)

function totext(e){
    e.preventDefault();
    text.classList.add("tofill")
    email.classList.remove("tofill")
    tel.classList.remove("tofill")
    message.classList.remove("tofill")
}




email.addEventListener("click", toemail)

function toemail(e){
    e.preventDefault();
    email.classList.add("tofill")
    text.classList.remove("tofill")
    tel.classList.remove("tofill")
    message.classList.remove("tofill")
}




tel.addEventListener("click", totel)

function totel(e){
    e.preventDefault();
    tel.classList.add("tofill")
    email.classList.remove("tofill")
    text.classList.remove("tofill")
    message.classList.remove("tofill")

}




message.addEventListener("click", tomsg)

function tomsg(e){
    e.preventDefault();

    message.classList.add("tofill")
    tel.classList.remove("tofill")
    email.classList.remove("tofill")
    text.classList.remove("tofill")
    }

// End of style to form


hire.addEventListener("click", tohire)

function tohire(e){
    e.preventDefault();
    hire.style.background ="red";

    setTimeout(remove,3000)
    function remove(){
        hire.style.background="blue";
    }
}



about.addEventListener("mouseout", toabout)

function toabout(e){
    e.preventDefault();
    aboutme.classList.add("abtme");

    setTimeout(toremove, 3000)
    function toremove(){
        aboutme.classList.remove("abtme");
    }

}

contact.addEventListener("mouseout", oncontact)

function oncontact(e){
    e.preventDefault();
    detail.classList.add("dtail")

    setTimeout(tremove, 3000)
    function tremove(){
        detail.classList.remove("dtail");
    }
}

const abt= document.querySelector("#abt2");
const cont= document.querySelector("#cont2");

abt.addEventListener("mouseout",abt2)

function abt2(e){
    e.preventDefault();
    aboutme.classList.add("abtme");

    setTimeout(rmv, 3000)
    function rmv(){
        aboutme.classList.remove("abtme");
    }
}

cont.addEventListener("mouseout", cont2)

function cont2(e){
    e.preventDefault();
    detail.classList.add("dtail")

    setTimeout(tremove, 3000)
    function tremove(){
        detail.classList.remove("dtail");
    }
}