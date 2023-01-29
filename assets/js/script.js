function bordeRojo() {
    vimg = document.querySelector('#p1_img');
    if (vimg.style.border == "") {
        vimg.style.border = "2px solid red";
    } else {
        vimg.style.border = "";
    }
}

function validaInput() {
    vInput1 = Number(vSt1.value);
    vInput2 = Number(vSt2.value);
    vInput3 = Number(vSt3.value);
    vStMsg = document.querySelector('#stMensaje');
    vStTotal = vInput1 + vInput2 + vInput3;
    console.log(vInput1<0 && vInput1>10);

    if (vInput1 < 0 || vInput1 > 10 || vInput2 < 0 || vInput2 > 10 || vInput3 < 0 || vInput3 > 10) {
        alert("Ingresaste un número incorrecto. Los valores válidos están entre 0 y 10");
        vStMsg.innerHTML = "Intenta nuevamente";
    } else {
        if (vStTotal <= 10 && vStTotal > 0) {
            vStMsg.innerHTML = "Excelente! Llevas " + vStTotal + " stickers"; 
        } else {
            if (vStTotal == 0) {
                vStMsg.innerHTML = ":( de verdad no quieres siquiera 1 sticker?";
            } else {
                vStMsg.innerHTML = "Llevas demasiados stickers";
            }
        }
    }
}

function validaPassword() {
    vdgt1 = Number(vdigito1.value);
    vdgt2 = Number(vdigito2.value);
    vdgt3 = Number(vdigito3.value);
    if (vdgt1 === 9 && vdgt2 === 1 && vdgt3 === 1) {
        vPassMsg.innerHTML = "Password 1 correcto";
    } else {
        if (vdgt1 === 7 && vdgt2 === 1 && vdgt3 === 4) {
            vPassMsg.innerHTML = "Password 2 correcto";
        } else {
            vPassMsg.innerHTML = "Password incorrecto";
        }
    }
}

vimg = document.querySelector('#p1_img');
vimg.addEventListener("click", bordeRojo);
vBotonSt = document.querySelector('#boton_sticker');
vBotonSt.addEventListener("click", validaInput);
vSt1 = document.querySelector('#input01');
vSt2 = document.querySelector('#input02');
vSt3 = document.querySelector('#input03');
vdigito1 = document.querySelector('#digito01');
vdigito2 = document.querySelector('#digito02');
vdigito3 = document.querySelector('#digito03');
vPassMsg = document.querySelector('#Res_Password');
vBotonPass = document.querySelector('#boton_password');
vBotonPass.addEventListener("click", validaPassword);