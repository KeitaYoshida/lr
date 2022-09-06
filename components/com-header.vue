<template>
  <header class="flex justify-between items-center px-4" id="top-header">
    <!-- logo - start -->
    <a
      href="/"
      class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
      aria-label="logo"
    >
      <img src="/images/lr-logo-min.png" alt="logo min" class="h-8" />

      <h1>LR e-sport clan</h1>
    </a>
    <!-- logo - end -->

    <!-- nav - start -->
    <nav class="hidden lg:flex gap-12">
      <a
        href="#main-1"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Home</a
      >
      <a
        href="#main-2"
        class="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1"
      >
        Features
      </a>
      <a
        href="#main-3"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Pricing</a
      >
      <a
        href="#main-4"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >About</a
      >
    </nav>
    <!-- nav - end -->

    <!-- buttons - start -->
    <button
      type="button"
      class="inline-flex items-center lg:hidden focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>

      Menu
    </button>
    <!-- buttons - end -->
  </header>
</template>

<style scoped>
#top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
