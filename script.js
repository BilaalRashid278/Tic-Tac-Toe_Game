document.addEventListener('DOMContentLoaded', () => {
    const btn_1 = document.querySelector('.btn-1');
    const btn_2 = document.querySelector('.btn-2');
    const btn_3 = document.querySelector('.btn-3');
    const btn_4 = document.querySelector('.btn-4');
    const btn_5 = document.querySelector('.btn-5');
    const btn_6 = document.querySelector('.btn-6');
    const btn_7 = document.querySelector('.btn-7');
    const btn_8 = document.querySelector('.btn-8');
    const btn_9 = document.querySelector('.btn-9');
    const buttons = document.querySelectorAll('.button');
    const zero = '<i class="fa-solid fa-0 text-white fs-1"></i>'
    const cross = '<i class="fa-solid fa-xmark text-white fs-1"></i>';
    const reset = document.querySelector('.reset');
    let isgame = false
    const iswinner = document.querySelector('.winner');
    const ending = document.getElementById('start-end');

    buttons.forEach((e, index) => {
        const randomFunction = () => {
            const arr = [btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9];
            let filtered;
            isgame = false
            const randomValGeneratorFunc = () => {
                filtered = arr.filter((value) => {
                    return value.innerHTML == ""
                });
                console.log(filtered);
                const filteredLength = filtered.length - 1
                let randomValGenerator = Math.round(Math.random() * filteredLength);
                return randomValGenerator
            };
            const randomValue = randomValGeneratorFunc();
            const EndingChecker = () => {
                if (btn_1.innerHTML !== "" && btn_2.innerHTML !== "" && btn_3.innerHTML !== "" && btn_4.innerHTML !== "" && btn_5.innerHTML !== "" && btn_6.innerHTML !== "" && btn_7.innerHTML !== "" && btn_8.innerHTML !== "" && btn_9.innerHTML !== "") {
                    ending.innerHTML = "Game is End Now";
                    setTimeout(() => {
                        ending.innerText = "Let's Start Now";
                        buttons.forEach((e) => {
                            if (e.innerHTML == zero || e.innerHTML == cross) {
                                e.innerHTML = '';
                            }
                        });
                        console.log('erro')
                    }, 1000);
                }
            }
            setTimeout(() => {
                try {
                    filtered[randomValue].innerHTML = zero
                } catch (error) {
                    console.log("error" + error)
                }
                EndingChecker();
            }, 500);
        };
        e.addEventListener('click', () => {
            if (isgame == false) {
                isgame = true;
                buttons[index].innerHTML = cross
                randomFunction();
            }
        });
    });

    reset.addEventListener('click', () => {
        buttons.forEach((e) => {
            if (e.innerHTML == zero || e.innerHTML == cross) {
                e.innerHTML = '';
                location.reload();
            }
        });
    });

});