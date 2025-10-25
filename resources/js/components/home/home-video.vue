<template>
    <div class="homeVideo" ref="homeVideo">
        <div class="homeVideo__btn" @click="playVideo">
            <img :src="this.url + '/img/homeimages/icon-play.png'" alt="Video Play Button">
        </div>
        <div class="homeVideo__container">
            <div class="embed-responsive embed-responsive-16by9 homeVideo__wrapper">
                <div class="embed-responsive-item" ref="youtube"></div>
            </div>
        </div>
    </div>
</template>

<script>
import YouTubePlayer from "youtube-player";
export default {
    name: "homeVideo",
    data() {
        return {
            url: '',
            videoId: 'kQa2fk2yC1Y',
            playerVars: {
                modestbranding: 1,
                iv_load_policy: 3,
                cc_load_policy: 1
            },
            player: null
        }
    },
    created() {
        this.url = window.baseUrl;
    },
    mounted() {
        this.initializePlayer();
    },
    beforeUnmount() {
        if (this.player && this.player.destroy) {
            this.player.destroy();
        }
    },
    methods: {
        initializePlayer() {
            if (this.player || !this.$refs.youtube) {
                return;
            }
            this.player = YouTubePlayer(this.$refs.youtube, {
                videoId: this.videoId,
                playerVars: this.playerVars
            });
            this.player.on('stateChange', event => {
                const endedState = window.YT?.PlayerState?.ENDED ?? 0;
                if (event?.data === endedState) {
                    this.ended();
                }
            });
        },
        async playVideo() {
            await this.initializePlayer();
            if (this.player) {
                this.$refs.homeVideo.classList.add("active");
                this.player.playVideo();
            }
        },
        ended() {
            this.$refs.homeVideo.classList.add("finished");
            this.$refs.homeVideo.classList.remove("active");

            setTimeout(()=>{
                this.$refs.homeVideo.classList.remove("finished");
            },1200);
        }
    }
}
</script>
