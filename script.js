let player

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yttp', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function hehe(event) {
    event.target.setVolume(75);
    
}


function onPlayerReady(event) {
    event.target.playVideo();
    hehe(event);
}

