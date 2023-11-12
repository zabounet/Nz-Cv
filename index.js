document.addEventListener('DOMContentLoaded', () => {
    let pos = 0;
    setInterval(function () {
        document.querySelector('#shadow').style.background = "linear-gradient(" + pos + "deg, #00409A, #CE2F94)"
        pos++

        if (pos == 360) {
            pos = 0;
        }
    }, 10)

    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.querySelector('body').addEventListener('keydown', (e) => {
        if (e.key == konami[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex == konami.length) {
                alert('Votre perception des couleurs change...')
                document.querySelector('body').classList.toggle('darkmode')
                konamiIndex = 0;
            }
        }
    })


    new QRCode(
        "QRCode", {
        text: document.location.href,
        width: 80,
        height: 80,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.M
    })
})