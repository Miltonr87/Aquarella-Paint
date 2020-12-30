    const input = document.querySelector('input');
    const canvas = document.querySelector('canvas');
    const brush = canvas.getContext('2d');

        brush.fillStyle = 'white';
        brush.fillRect(0, 0, 800, 600);

        let draw = false;

        function drawCircle (event) {

            if (draw) {
                let x = event.pageX - canvas.offsetLeft;
                let y = event.pageY - canvas.offsetTop;
                brush.fillStyle = input.value;         // always take the current value of the input!
                brush.beginPath();
                brush.arc(x, y, 9, 0, 2 * 3.14);
                brush.fill();
            }
            console.log(`${x} , + ${y}`);
        }

        canvas.onmousemove = drawCircle;

        // assigning an anonymous function
        canvas.onmousedown = function () {

            draw = true;
        }

        // assigning an anonymous function
        canvas.onmouseup = function () {

            draw = false;
        }
