  let pos1 = 0;
    let pos2 = 0;
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");

    // animation with setInterval
    let movement = setInterval(function () {
        div2.style.transform = "translateX(" + pos2 + "px)";
        pos2++;
        if (pos2 > 200) {
            clearInterval(movement);
        }
    }, 16.666667);

    // animation with requestAnimationFrame
    function step(timestamp) {
        div1.style.transform = "translateX(" + pos1 + "px)";
        pos1++;
        if (pos1 < 200) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);


    