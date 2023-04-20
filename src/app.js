/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
var aSide=document.querySelector("#aSide");
var bSide=document.querySelector("#bSide");
var cSide=document.querySelector("#cSide");
var calcButton=document.querySelector("#calcButton");
var result=document.querySelector("#result")

    if (calcButton) {
        calcButton.addEventListener("click",()=>{
        workInput();
        })
    }
function workInput() {
    let aSideGood=checkInput(aSide.value);
    let bSideGood=checkInput(bSide.value);
    let cSideGood=checkInput(cSide.value);
    if (aSideGood&&bSideGood&&cSideGood) {
        //alert("jó")
        let A=Number(aSide.value);
        let B=Number(bSide.value);
        let C=Number(cSide.value);
        let volume=calcVolume(A,B,C);
        result.value=volume+" cm3";
    }else{
        alert("hibás adat")
    }
    
    //console.log(typeof aSide.value)
    //console.log(typeof bSide.value)
    //console.log(typeof cSide.value)
    
}

function calcVolume(A,B,C) {
    return A*B*C;
}
function checkInput(input) {
    let res=input.match(/^[0-9]+$/);
    return res;
}