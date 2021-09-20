
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

console.log('Предполагаемая оценка - 90-100');
console.log('1. Вёрстка семантическая +10');
console.log('2. Для оформления СV используются css-стили +10');
console.log('3. контент размещается в блоке, который горизонтально центрируется на странице. +10');
console.log('4. Для оформления СV используются css-стили +10');
console.log('5. Верстка адаптивная +10');  
console.log('6. на странице СV присутствует изображение +10');
console.log('7. контакты для связи и перечень навыков оформлены в виде списка ul > li  +10');
console.log('8. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10');
console.log('9. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода.+10');
            
