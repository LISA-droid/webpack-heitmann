import '../public/scss/style.scss'
import '../public/scss/grid.scss'
import gojo from '../dist/images/gojo.png';
import yuji from '../dist/images/yuji.png';
import nanami from '../dist/images/nanami.png';
import nobara from '../dist/images/nobara.png';
import maki from '../dist/images/maki.png';
import megumi from '../dist/images/megumi.png';
import toge from '../dist/images/toge.png';
import panda from '../dist/images/panda.png';

require('jquery')
$(function () {

    let carte1;
    let carte2;
    let compteur = 0 ;

    $('.flip-card').click(function () {
        if (!carte1 || !carte2) {
            $(this).find('.flip-card-inner').css('transform', 'rotateY(180deg)')
            if (carte1) {
                carte2 = $(this).find('img')
            } else {
                carte1 = $(this).find('img')
            }

            if (carte1 && carte2) {
                if (carte1.attr('src') === carte2.attr('src')) {
                    compteur += 1;
                    carte1 = null
                    carte2 = null
                } else {
                    setTimeout(function () {
                        carte1.closest('.flip-card-inner').css('transform', 'none')
                        carte2.closest('.flip-card-inner').css('transform', 'none')
                        carte1 = null
                        carte2 = null
                    }, 1000);
                }
                if (compteur === 8) {
                   setTimeout(function (){alert('GAGNÉ')}, 1000)
                }
            }
        }
    })


    let images = [yuji, gojo, nanami, nobara, maki, megumi, toge, panda]
    for (let i = 0; i < 8; i++) {
        let image = Math.floor(Math.random() * images.length )
        let imageNom = images[image]
        images.splice(image, 1)
        let emplacement1 = verifEmplacement(Math.floor(Math.random() * 16)+ 1)
        if (emplacement1) {
            $('.carte'+emplacement1 + ' .flip-card-back').html('<img src="'+ imageNom +'" alt="">')
            let emplacement2 = verifEmplacement(Math.floor(Math.random() * 16)+ 1)
            $('.carte'+emplacement2 + ' .flip-card-back').html('<img src="' + imageNom +'" alt="">')
        }
    }
})

function verifEmplacement(emplacement) {
    let carte = $('.carte'+emplacement)
    if (carte.find('img').length > 0) {
        return verifEmplacement(Math.floor(Math.random() * 16)+ 1)
    } else {
        return emplacement
    }
}

$(function () {
    $(".reload").click(function() {
        window.location.reload();
    });
})
