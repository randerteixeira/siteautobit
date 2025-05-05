document.getElementById('image_cardi').addEventListener('mouseover',()=>{
    document.getElementById('bg_cardi').style.height='100%'
    document.getElementById('conteudo1').style.display='flex'
    


})
document.getElementById('image_cardi').addEventListener('mouseout',()=>{
    document.getElementById('bg_cardi').style.height='0%'
    document.getElementById('conteudo1').style.display='none'



})

document.getElementById('image_cardi2').addEventListener('mouseover',()=>{
    document.getElementById('bg_cardi2').style.height='100%'
    document.getElementById('conteudo2').style.display='flex'
    


})
document.getElementById('image_cardi2').addEventListener('mouseout',()=>{
    document.getElementById('bg_cardi2').style.height='0%'
    document.getElementById('conteudo2').style.display='none'



})

let ultimaPosicaoScroll = 0;

window.addEventListener('scroll', function() {
    let posicaoAtualScroll = window.scrollY;

    if (posicaoAtualScroll > ultimaPosicaoScroll) {
        // O usuário está rolando para baixo
        console.log(posicaoAtualScroll);
       if(posicaoAtualScroll>100){
        document.getElementById('text1').style.fontSize='25px'
        document.getElementById('image_cardi').style.width='50%'
       }

        // O usuário está rolando para baixo
        
       if(posicaoAtualScroll>800){
        document.getElementById('text2').style.fontSize='25px'
        document.getElementById('image_cardi2').style.width='50%'
       }
       if(posicaoAtualScroll>1500){
        this.document.getElementById('item-s2-2').style.marginLeft='10px'
        this.document.getElementById('item-s2-2').style.marginRight='10px'
       }
    }

    ultimaPosicaoScroll = posicaoAtualScroll; // Atualiza a última posição do scroll
});