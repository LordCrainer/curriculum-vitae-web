<template>
  <svg
    class="waves"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shape-rendering="auto">
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
      <use xlink:href="#gentle-wave" x="25" y="0" fill="#fd6601" />
      <use xlink:href="#gentle-wave" x="55" y="3" fill="#08365b" />
    </g>
  </svg>
</template>
<style lang="scss" scoped>
  .waves {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 50px;
    max-height: 100px;
  }
  .wave-1 {
    background-color: $primary;
  }
  .wave-2 {
    background-color: $primary;
  }
  .wave-3 {
    background-color: $primary;
  }

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -1s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  // .parallax > use:nth-child(3) {
  //   animation-delay: -4s;
  //   animation-duration: 13s;
  // }
  // .parallax > use:nth-child(4) {
  //   animation-delay: -5s;
  //   animation-duration: 20s;
  // }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
      width: 100%;
    }
    // .content {
    //   height:30vh;
    // }
    // h1 {
    //   font-size:24px;
    // }
  }
</style>
