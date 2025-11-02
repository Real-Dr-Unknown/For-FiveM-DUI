let player
let x
let y

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yttp', {
        events: {
            'onReady': onPlayerReady
        }
    });
}


function onPlayerReady(event) {
    event.target.playVideo();

}
