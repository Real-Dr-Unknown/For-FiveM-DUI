let player

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

window.addEventListener("message", (event) => {

    if (event.data.type === "unmute") {
        player.setVolume(75)
    }
})
