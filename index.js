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
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.M
    })

    alert('Bonjour ! Mon CV est actuellement en cours de construction et n\'est donc pas adapté au différents appareils. Pour profiter de la meilleure expérience, il est conseillé de le consulter depuis une interface de minimum 1440x1200 pixels.')

    switch(true) {
        case navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome') :
            alert('vous utilisez Safari');
            Array.from(document.querySelectorAll('.headingTxt')).forEach(heading => {
                heading.classList.add('WebkitBrowser');
            });
            break;

        case navigator.userAgent.includes('OPR'):
            alert('vous utilisez Opera');
            break;

        case navigator.userAgent.includes('Mozilla') && !navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome') :
            alert('vous utilisez Firefox');
            Array.from(document.querySelectorAll('.headingTxt')).forEach(heading => {
                heading.classList.add('WebkitBrowser');
            });
            break;
        
        case navigator.userAgent.includes('Safari') && navigator.userAgent.includes('Chrome') :
            alert('vous utilisez Chrome');
            break;

        default :
            alert('Votre navigateur n\'est pas reconnu. L\'affichage pourra présenter des problèmes.')
            break;
    }
});