
document.querySelector('.crs').addEventListener('click',click1);

function click1() {
    document.querySelector(".change_notice1").style.display = "block";
    document.querySelector(".change_notice2").style.display = "none";
    document.querySelector(".change_notice3").style.display = "none";
}

document.querySelector('.skl').addEventListener('click',click2);

function click2() {
    document.querySelector(".change_notice1").style.display = "none";
    document.querySelector(".change_notice2").style.display = "block";
    document.querySelector(".change_notice3").style.display = "none";
}

document.querySelector('.exp').addEventListener('click',click3);

function click3() {
    document.querySelector(".change_notice1").style.display = "none";
    document.querySelector(".change_notice2").style.display = "none";
    document.querySelector(".change_notice3").style.display = "block";
}