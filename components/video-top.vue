<script>
import Hls from "hls.js";
export default {
  data: () => {
    return {
      hls: new Hls(),
    };
  },
  mounted: function () {
    const video = document.getElementById("video");
    const videoUrl = "/video/video.m3u8";
    if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.loadSource(videoUrl);
      this.hls.attachMedia(video);
      video.play();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
      video.addEventListener("canplay", () => {
        video.play();
      });
    }
  },
};
</script>

<template>
  <div class="p-relative">
    <div id="video-area">
      <video
        id="video"
        src="/video/video.m3u8"
        webkit-playsinline
        playsinline
        muted
        autoplay
        loop
      ></video>
    </div>
    <div id="cover"></div>
  </div>
</template>

<style scoped>
#video-area,
#cover {
  position: absolute;
  z-index: -1; /*最背面に設定*/
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
#cover {
  background-color: black;
  opacity: 0.3;
}

#video {
  /*天地中央配置*/
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*縦横幅指定*/
  width: 177.77777778vh; /* 16:9 の幅→16 ÷ 9＝ 177.77% */
  height: 56.25vw; /* 16:9の幅 → 9 ÷ 16 = 56.25% */
  max-width: unset;
  min-height: 100%;
  min-width: 100%;
}
</style>
