const btnOff = document.getElementById('btn_off');
const btnOn = document.getElementById('btn_on');
const btnWrap = document.getElementById('btn_off_content');

const onImg = document.getElementById('on');
const offImg = document.getElementById('off');

var btnSwitch = false;
function on(){
    if(btnSwitch==false){
        btnOn.style.display='block';
        btnOff.style.display='none';
        btnSwitch=true;
        btnOn.style.left='none';
        onImg.style.display='block';
        offImg.style.display='none';
    }
}
function off(){
    if(btnSwitch==true){
        btnOff.style.display='block';
        btnOn.style.display='none';
        btnSwitch=false;
        btnOff.style.right='none';
        offImg.style.display='block';
        onImg.style.display='none';
    }
}

btnOff.addEventListener('click',on);
btnOn.addEventListener('click',off);