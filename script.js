

function record_open() {
    document.getElementById("record").style.display = "flex";
    document.getElementById("Rec").style.display = "flex";
}

function record_close() {
    document.getElementById("Rec").style.display = "none";
    document.getElementById("record").style.display = "none";
}

function opros_open() {
    document.getElementById("record").style.display = "none";
    document.getElementById("oprosiki").style.display = "flex";
}

let fl = false;
function podtr_yes() {
    document.getElementById("podtr_button").style.background = "url(CES/popup/quiz/accept_3.png) center 0 no-repeat";
    fl = true;
}

function opr_start() {
    if(fl){  
        document.getElementById("oprosiki").style.display = "none";
        document.getElementById("opros_start").style.display = "flex";
    }
}

function ofer_open() {
    document.getElementById("Rec").style.display = "flex";
    document.getElementById("ofer_start").style.display = "flex";

}
function opros_open1() {
    document.getElementById("Rec").style.display = "flex";
    document.getElementById("oprosiki").style.display = "flex";

}
function ofer_acept() {
    document.getElementById("Rec").style.display = "none";
    document.getElementById("ofer_start").style.display = "none";
}
function ofer_close() {
    document.getElementById("Rec").style.display = "none";
    document.getElementById("ofer_start").style.display = "none";
}
function pravila_open() {
    document.getElementById("Rec").style.display = "flex";
    document.getElementById("pravila_start").style.display = "flex";

}
function prav_close() {
    document.getElementById("Rec").style.display = "none";
    document.getElementById("pravila_start").style.display = "none";
}

function menu_open() {
    document.getElementById("Rec").style.display = "flex";
    document.getElementById("l-s").style.display = "flex";
    document.getElementById("l-s").style.zIndex = "99";
}
function all_close() {
    fl = false;
    document.getElementById("Rec").style.display = "none";
    document.getElementById("opros_start").style.display = "none";
    document.getElementById("pravila_start").style.display = "none";
    document.getElementById("ofer_start").style.display = "none";
    document.getElementById("oprosiki").style.display = "none";
    document.getElementById("record").style.display = "none";
    document.getElementById("podtr_button").style.background = "url(CES/popup/quiz/accept_1.png) center 0 no-repeat";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("l-s").style.display = "none";
        }
}
function drop_open() {
    document.getElementById("sc-start").style.display = "none";
    document.getElementById("sc-menu").style.display = "flex";
}

function set_coef1(){
    var text = document.getElementById("coef1").textContent;
    document.getElementById("sc-start").textContent = text;
    document.getElementById("sc-start").style.display = "flex";
    document.getElementById("sc-menu").style.display = "none";
}
function set_coef2(){
    var text = document.getElementById("coef2").textContent;
    document.getElementById("sc-start").textContent = text;
    document.getElementById("sc-start").style.display = "flex";
    document.getElementById("sc-menu").style.display = "none";
}
function set_coef3(){
    var text = document.getElementById("coef3").textContent;
    document.getElementById("sc-start").textContent = text;
    document.getElementById("sc-start").style.display = "flex";
    document.getElementById("sc-menu").style.display = "none";
}

window.addEventListener("load", function() {
    const filterGames = document.querySelectorAll(".game");
    document.querySelector('nav').addEventListener('click', event =>{
        if((event.target.tagName !== 'IMG')&&(event.target.tagName !== 'H1') ) return false;
        document.querySelectorAll('.all-games-active').forEach(el => {
            el.classList.remove('all-games-active'); 
            el.classList.add('igrosoft');
        });
        event.target.parentNode.classList.remove('igrosoft');
        event.target.parentNode.classList.add('all-games-active');
        let filterClass = event.target.dataset['f'];
        filterGames.forEach(elem =>{
            elem.classList.remove('del-game');
            if(!elem.classList.contains(filterClass) && filterClass!=='all'){
                elem.classList.add('del-game');
            }
        })
    }) 
});
