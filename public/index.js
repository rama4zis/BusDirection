import main from "./assets/script/data-geo.js";
import anime from "animejs/lib/anime.es.js";

console.log("Hallo Rama");

document.addEventListener('DOMContentLoaded', function () {
    main();

    const messagesEl = document.querySelector('.messages');
    // const typingSpeed = 20;
    // const loadingText = '<<b>•</b><<b>•</b><<b>•</b>';
    // let messageIndex = 0;

    // get Current Time 
    const getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // const seconds = date.getSeconds();

        let current = hours + (minutes * .01);
        if (current >= 5 && current < 9) return 'Good morning and have a nice day';
        if (current >= 9 && current < 15) return 'Good afternoon and have a nice day';
        if (current >= 15 && current < 19) return 'Good evening and have a nice day';
        if (current >= 19 || current < 5) return 'Good night and have a nice day';
    }

    let messages = [
        'Hey there 👋',
        'I\'m Rama',
        'I make this submission for getting bus direction way in Surabaya using Google Maps API',
        'You can follow me at <a href="https://www.facebook.com/rama4zis" target="_blank">Facebook</a>',
        getCurrentTime(),
        '👀 Rama.'
    ];

    const createBubble = (message) => {
        const bubbleEl = document.createElement('div');
        bubbleEl.classList.add('bubble');
        const messageEl = document.createElement('span');
        messageEl.classList.add('message');
        messageEl.innerHTML = message;
        bubbleEl.appendChild(messageEl);
        return [
            messagesEl.appendChild(document.createElement('br')),
            messagesEl.appendChild(bubbleEl)
        ];
    };



    // anime({
    //     targets: createBubble(messages[0]),
    //     translateX: 250,
    //     easing: 'easeInOutExpo'
    // });

    var tl = anime.timeline({
        easing: 'easeOutExpo',
    });

    // Add children
    tl
        .add({
            targets: createBubble(messages[0]),
            translateX: 25,
            opacity: 1,
        })
        .add({
            targets: createBubble(messages[1]),
            translateX: 25,
            opacity: 1,
            delay: 500,
        })
        .add({
            targets: createBubble(messages[2]),
            translateX: 25,
            opacity: 1,
            delay: 1500,
        })
        .add({
            targets: createBubble(messages[3]),
            translateX: 25,
            opacity: 1,
            delay: 500,
        })
        .add({
            targets: createBubble(messages[4]),
            translateX: 25,
            opacity: 1,
            delay: 500,
        })
        .add({
            targets: createBubble(messages[5]),
            translateX: 25,
            opacity: 1,
        })
        .add({
            targets: '.button-container',
            // translateX: 25,
            opacity: 1,
            delay: 500,
        });

    // when click main button, hide messages and button container then delet class hide from container 
    document.getElementById('main-button').addEventListener('click', () => {
        document.querySelector('.messages').classList.add('hide');
        document.querySelector('.button-container').classList.add('hide');
        document.querySelector('.content-wrapper').classList.remove('hide');
        anime({
            targets: '.content-wrapper',
            opacity: '1',
            duration: 250,
            easing: 'easeInOutQuad',
            begin: function () {
                // document.querySelector('.content-wrapper').style.display = 'block';
            },
        });
    });

});