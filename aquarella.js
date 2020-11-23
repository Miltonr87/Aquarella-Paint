const paleta = document.querySelector('input');
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

        pincel.fillStyle = 'white';
        pincel.fillRect(0, 0, 800, 600);

        var desenha = false;

        function desenhaCirculo(evento) {

            if (desenha) {
                var x = evento.pageX - tela.offsetLeft;
                var y = evento.pageY - tela.offsetTop;
                pincel.fillStyle = paleta.value;         // sempre pega o valor atual da paleta!
                pincel.beginPath();
                pincel.arc(x, y, 9, 0, 2 * 3.14);
                pincel.fill();
            }
            console.log(x + ',' + y);
        }

        tela.onmousemove = desenhaCirculo;

     /* atribuindo diretamente a função anônima */
        tela.onmousedown = function () {

            desenha = true;
        }

        // atribuindo diretamente a função anônima
        tela.onmouseup = function () {

            desenha = false;
        }