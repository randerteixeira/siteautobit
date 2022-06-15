//----- Add events by page Home index Project------
let width_tela = window.innerWidth;
console.log(width_tela)

//events by poupUP login
document.querySelector('.poupUp_action').addEventListener('click', () => {

    document.querySelector('.poupUp_login').style.display = 'flex';
});
document.querySelector('.poupUp_exit').addEventListener('click', () => {

    document.querySelector('.poupUp_login').style.display = 'none';
});
//events by carrocel

let totalSlides = document.querySelectorAll(".carrocel_item").length;//get by quant images of carrocel
document.querySelector('.carrocel').style.width = `calc(100vw*${totalSlides})`;//pega com base na quantidade de itens e calcula a largura


let time = 0;
//animacao do carrocel
setInterval(() => {
    if (time == 0) {
        slide1()

    }
    else if (time == 1) {
        slide2()
        console.log('2')
    }
    else if (time == 2) {
        slide3()
        console.log('2')
    }
    else if (time == 3) {
        slide4()

    }
    else if (time == 4) {
        console.log('3')
        slide5()
        setTimeout(() => {
            time = 0
        }, 4000)

    }
    time++
}, 5000);
function slide1() {
    if (document.querySelector('.control').classList.contains('control_selected')) {
        document.querySelector('.control').classList.remove('control_selected');
        document.querySelector('.control1').classList.add('control_selected')

    }

    document.querySelector('.carrocel').style.marginLeft = `0px`;


    setTimeout(() => {
        document.querySelector('.carrocel').style.opacity = '1';

    }, 1000)

}

function slide3() {
    if (document.querySelector('.control').classList.contains('control_selected')) {
        document.querySelector('.control').classList.remove('control_selected');
        document.querySelector('.control3').classList.add('control_selected')

    }

    document.querySelector('.carrocel').style.marginLeft = `-${width_tela * 2}px`;
}
function slide2() {
    if (document.querySelector('.control').classList.contains('control_selected')) {
        document.querySelector('.control').classList.remove('control_selected');
        document.querySelector('.control2').classList.add('control_selected')

    }

    document.querySelector('.carrocel').style.marginLeft = `-${width_tela}px`;

}
function slide4() {
    if (document.querySelector('.control').classList.contains('control_selected')) {
        document.querySelector('.control').classList.remove('control_selected');
        document.querySelector('.control4').classList.add('control_selected')

    }


    document.querySelector('.carrocel').style.marginLeft = `-${width_tela * 3}px`;

}
function slide5() {
    if (document.querySelector('.control').classList.contains('control_selected')) {
        document.querySelector('.control').classList.remove('control_selected');
        document.querySelector('.control5').classList.add('control_selected')

    }
    document.querySelector('.carrocel').style.marginLeft = `-${width_tela * 4}px`;
    setTimeout(() => {
        if (time == 5) {
            document.querySelector('.carrocel').style.opacity = '0';
        }

    }, 4000)



}
//efeitos de trasicao do sistemas de cidade 
function trasition_city(city) {

    if (city == 'pdr') {
        document.getElementById('ori').style.display = "none";
        document.getElementById('cld').style.display = "none";
        document.getElementById('pdr').style.display = "flex";
        document.getElementById('ori_btn').classList.remove('city_btn_selected');
        document.getElementById('cld_btn').classList.remove('city_btn_selected');
        document.getElementById('pdr_btn').classList.add('city_btn_selected');



    } else if (city == 'ori') {
        document.getElementById('pdr').style.display = "none";

        document.getElementById('cld').style.display = "none";
        document.getElementById('ori').style.display = "flex";
        document.getElementById('pdr_btn').classList.remove('city_btn_selected');
        document.getElementById('cld_btn').classList.remove('city_btn_selected');
        document.getElementById('ori_btn').classList.add('city_btn_selected');
    }
    else if (city == 'cld') {
        document.getElementById('pdr').style.display = "none";
        document.getElementById('ori').style.display = "none";
        document.getElementById('cld').style.display = "flex";
        document.getElementById('ori_btn').classList.remove('city_btn_selected');
        document.getElementById('pdr_btn').classList.remove('city_btn_selected');
        document.getElementById('cld_btn').classList.add('city_btn_selected');

    }


}

