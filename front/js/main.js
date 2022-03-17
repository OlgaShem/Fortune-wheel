(function () {
    const bonus = document.querySelector(".bonus-rules-link");
    const bonusSecond = document.querySelector(".win-second__link");
    const close = document.querySelector(".popup__window-close");
    const popup = document.querySelector(".popup");
    const overflow = document.querySelector("body");
    
    const pulseBtn = document.querySelector(".banner__button");
    const winclose = document.querySelector(".win__button");
    const wincloseSecond = document.querySelector(".win-second__button");
    const win = document.querySelector(".win");
    const winSecond = document.querySelector(".win-second");
    const wheel = document.querySelector(".banner__wheel_reel");
    const tries = document.querySelector(".tries");
    let triesCounter = 0
    const totalTriesCounter = 2
    
    bonus.addEventListener("click", () => {
        popup.style.display = "flex";
        overflow.style.overflow = "hidden";
    });
    
    close.addEventListener("click", () => {
        popup.style.display = "none";
        overflow.style.overflow = "visible";
    });
    
    pulseBtn.addEventListener('click', () => {
        if (triesCounter === 0) {
            firstRotation()
        } else {
            secondRotation()
        }
    })
    
    function changeTriesCounter() {
        const number = totalTriesCounter - triesCounter
        if (number === 2) {
            tries.innerText = "2 спроби"
        } else if (number === 1) {
            tries.innerText = "1 спроба"
        } else {
            tries.innerText = "0 спроб"
        }
    }
    changeTriesCounter()
    
    function firstRotation() {
        wheel.classList.add("spin");
        setTimeout(() => {
            win.classList.add("block");
            overflow.style.overflow = "hidden";
        }, 3300)
        triesCounter++
        changeTriesCounter()
    }
    
    function secondRotation() {
        wheel.classList.add("spin-second");
        setTimeout(() => {
            winSecond.classList.add("block");
            overflow.style.overflow = "hidden";
        }, 2000)
        triesCounter++
        changeTriesCounter()
    }
    
    winclose.addEventListener("click", () => {
        win.classList.remove("block");
        overflow.style.overflow = "visible";
    });
    
    wincloseSecond.addEventListener("click", () => {
        winSecond.classList.remove("block");
        overflow.style.overflow = "visible";
    });
    
    bonusSecond.addEventListener("click", () => {
        winSecond.classList.remove("block");
        popup.style.display = "flex";
        overflow.style.overflow = "hidden";
    });
    
    
    })();