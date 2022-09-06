<script></script>

<template>
  <div id="main" class="scroll-smooth h-screen w-screen">
    <com-header />
    <NuxtLayout name="f-section" id="main-1">
      <video-top />
      <div class="text-center">
        <img src="/images/lr-logo.png" alt="logo" class="top-logo" />
        <h1
          class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 text-white"
        >
          LR e-sport clan
        </h1>
      </div>
    </NuxtLayout>
    <NuxtLayout name="f-section" id="main-2">
      <div class="text-center">lr toha</div>
    </NuxtLayout>
    <NuxtLayout name="f-section" id="main-2">
      <div class="text-center">re: toha</div>
    </NuxtLayout>
    <NuxtLayout name="f-section" id="main-2">
      <div class="text-center">le`game toha</div>
    </NuxtLayout>
    <NuxtLayout name="f-section" id="main-2">
      <div class="text-center">e-sports</div>
    </NuxtLayout>
  </div>
</template>

<style>
.top-logo {
  min-width: 120px;
  max-width: 20%;
  margin: 0 auto;
}
html {
  scroll-behavior: smooth;
}
</style>
