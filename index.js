var wrapper = document.getElementsByClassName('wrapper')[0];
var Greeting = document.getElementsByClassName('welcoming')[0];
var s = document.getElementsByClassName('activePlayer')[0];
var items = document.getElementsByClassName('item');
var isActive1 = true;
var isActive2 = false;
var counter1 = 0;
var counter2 = 0;
var countingOfClicks = 0;
var hasWinner = false;
var winPos = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
wrapper.style.display = 'none';
Greeting.style.display = 'block';
wrapper.style.opacity = '0';
Greeting.style.opacity = '1';
setTimeout(function () {
    wrapper.style.display = 'flex';
    Greeting.style.display = 'none';
    setTimeout(function () {
        wrapper.style.opacity = '1';
        Greeting.style.opacity = '0';
    }, 1);
}, 7000);
var _loop_1 = function (i) {
    if (items[i] !== null) {
        items[i].addEventListener('click', function () {
            if (arr[i] !== 1) {
                if (isActive2) {
                    items[i].style.fontSize = '125px';
                    items[i].innerText = 'X';
                    items[i].style.color = 'black';
                    arr[i] = 1;
                    s.innerHTML = 'Active Player 1';
                    counter2 += Number(items[i].getAttribute('id'));
                    countingOfClicks++;
                }
                else if (isActive1) {
                    items[i].style.fontSize = '125px';
                    items[i].style.color = 'black';
                    items[i].innerText = 'O';
                    arr[i] = 1;
                    s.innerHTML = 'Active Player 2';
                    counter1 += Number(items[i].getAttribute('id'));
                    countingOfClicks++;
                }
                for (var i_1 = 0; i_1 < winPos.length; i_1++) {
                    if (document.getElementById(winPos[i_1][0]).innerHTML === 'X' &&
                        document.getElementById(winPos[i_1][1]).innerHTML === 'X' &&
                        document.getElementById(winPos[i_1][2]).innerHTML === 'X') {
                        s.innerHTML = 'Player 1 wins';
                        hasWinner = true;
                        setTimeout(function () {
                            wrapper.style.display = 'none';
                            Greeting.innerText = "Player 1 wins";
                            Greeting.style.display = 'block';
                            wrapper.style.opacity = '1';
                            Greeting.style.opacity = '0';
                            setTimeout(function () {
                                wrapper.style.opacity = '0';
                                Greeting.style.opacity = '1';
                                Greeting.style.top = '50%';
                                Greeting.style.left = '100%';
                                Greeting.style.textAlign = 'center';
                            }, 2000);
                        }, 1000);
                    }
                    else if (document.getElementById(winPos[i_1][0]).innerHTML === 'O' &&
                        document.getElementById(winPos[i_1][1]).innerHTML === 'O' &&
                        document.getElementById(winPos[i_1][2]).innerHTML === 'O') {
                        hasWinner = true;
                        s.innerHTML = 'Player 2 wins';
                        setTimeout(function () {
                            wrapper.style.display = 'none';
                            Greeting.innerText = "Player 2 wins";
                            Greeting.style.display = 'block';
                            wrapper.style.opacity = '1';
                            Greeting.style.opacity = '0';
                            setTimeout(function () {
                                wrapper.style.opacity = '0';
                                Greeting.style.opacity = '1';
                                Greeting.style.top = '50%';
                                Greeting.style.left = '100%';
                                Greeting.style.textAlign = 'center';
                            }, 2000);
                        }, 1000);
                    }
                }
                if (countingOfClicks === 9 && hasWinner === false) {
                    s.innerHTML = 'Draw';
                    setTimeout(function () {
                        wrapper.style.display = 'none';
                        Greeting.innerText = "Draw";
                        Greeting.style.display = 'block';
                        wrapper.style.opacity = '1';
                        Greeting.style.opacity = '0';
                        setTimeout(function () {
                            wrapper.style.opacity = '0';
                            Greeting.style.opacity = '1';
                            Greeting.style.top = '50%';
                            Greeting.style.left = '100%';
                            Greeting.style.textAlign = 'center';
                        }, 2000);
                    }, 1000);
                }
            }
            isActive1 = !isActive1;
            isActive2 = !isActive2;
        });
    }
};
for (var i = 0; i < items.length; i++) {
    _loop_1(i);
}
