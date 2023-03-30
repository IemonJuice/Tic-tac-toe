let wrapper: HTMLElement = <HTMLElement>document.getElementsByClassName('wrapper')[0];
let Greeting: HTMLElement = <HTMLElement>document.getElementsByClassName('welcoming')[0];

let s: Element = document.getElementsByClassName('activePlayer')[0];
const items = document.getElementsByClassName('item') as HTMLCollectionOf<HTMLElement>;
let isActive1 = true;
let isActive2 = false;
let counter1 = 0;
let counter2 = 0;
let countingOfClicks = 0;
let hasWinner = false;
let winPos: any = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];
let arr: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0];
wrapper.style.display = 'none';
Greeting.style.display = 'block';
wrapper.style.opacity = '0';
Greeting.style.opacity = '1';
setTimeout(() => {
    wrapper.style.display = 'flex';
    Greeting.style.display = 'none';
    setTimeout(() => {
        wrapper.style.opacity = '1';
        Greeting.style.opacity = '0';
    }, 1)

}, 7000)

for (let i: number = 0; i < items.length; i++) {
    if (items[i] !== null) {
        items[i].addEventListener('click', () => {
                if (arr[i] !== 1) {
                    if (isActive2) {
                        items[i].style.fontSize = '125px'
                        items[i].innerText = 'X'
                        items[i].style.color = 'black'
                        arr[i] = 1;
                        s.innerHTML = 'Active Player 1';
                        counter2 += Number(items[i].getAttribute('id'));
                        countingOfClicks++;
                    } else if (isActive1) {
                        items[i].style.fontSize = '125px'
                        items[i].style.color = 'black'
                        items[i].innerText = 'O'
                        arr[i] = 1;
                        s.innerHTML = 'Active Player 2';
                        counter1 += Number(items[i].getAttribute('id'))
                        countingOfClicks++;
                    }
                    for (let i = 0; i < winPos.length; i++) {
                        if (
                            document.getElementById(winPos[i][0]).innerHTML === 'X' &&
                            document.getElementById(winPos[i][1]).innerHTML === 'X' &&
                            document.getElementById(winPos[i][2]).innerHTML === 'X'
                        ) {
                            s.innerHTML = 'Player 1 wins';
                            hasWinner = true;
                            setTimeout(() => {
                                wrapper.style.display = 'none';
                                Greeting.innerText = `Player 1 wins`;
                                Greeting.style.display = 'block';
                                wrapper.style.opacity = '1';
                                Greeting.style.opacity = '0';
                                setTimeout(() => {
                                    wrapper.style.opacity = '0';
                                    Greeting.style.opacity = '1';
                                    Greeting.style.top = '50%';
                                    Greeting.style.left = '100%';
                                    Greeting.style.textAlign = 'center';
                                }, 2000)

                            }, 1000)
                        } else if (
                            document.getElementById(winPos[i][0]).innerHTML === 'O' &&
                            document.getElementById(winPos[i][1]).innerHTML === 'O' &&
                            document.getElementById(winPos[i][2]).innerHTML === 'O'
                        ) {
                            hasWinner = true;
                            s.innerHTML = 'Player 2 wins';
                            setTimeout(() => {
                                wrapper.style.display = 'none';
                                Greeting.innerText = `Player 2 wins`;
                                Greeting.style.display = 'block';
                                wrapper.style.opacity = '1';
                                Greeting.style.opacity = '0';
                                setTimeout(() => {
                                    wrapper.style.opacity = '0';
                                    Greeting.style.opacity = '1';
                                    Greeting.style.top = '50%';
                                    Greeting.style.left = '100%';
                                    Greeting.style.textAlign = 'center';
                                }, 2000)

                            }, 1000)
                        }
                    }
                    if (countingOfClicks === 9 && hasWinner === false) {
                        s.innerHTML = 'Draw';
                        setTimeout(() => {
                            wrapper.style.display = 'none';
                            Greeting.innerText = `Draw`;
                            Greeting.style.display = 'block';
                            wrapper.style.opacity = '1';
                            Greeting.style.opacity = '0';
                            setTimeout(() => {
                                wrapper.style.opacity = '0';
                                Greeting.style.opacity = '1';
                                Greeting.style.top = '50%';
                                Greeting.style.left = '100%';
                                Greeting.style.textAlign = 'center';
                            }, 2000)

                        }, 1000)
                    }
                }
                isActive1 = !isActive1;
                isActive2 = !isActive2;
            }
        )
    }
}

