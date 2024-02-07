<script>
  import { header_nav_menu_open } from "../helper/store";
  import CloseIcon from "./svg/CloseIcon.svelte";
</script>


<div
  class="fixed top-0 left-0 h-screen w-screen bg-white z-50"
  class:hidden={!$header_nav_menu_open}
>
  <button class="absolute top-8 right-8" on:click={() => ($header_nav_menu_open = false)}><CloseIcon /></button
  >
  <nav class="flex flex-col justify-center items-center h-full gap-4">
    <a on:click={() => ($header_nav_menu_open = false)} class="text-xl" href="/"
      >Home</a
    >
    <a
      on:click={() => ($header_nav_menu_open = false)}
      class="text-xl"
      href="#services">Services</a
    >
    <a
      on:click={() => ($header_nav_menu_open = false)}
      class="text-xl"
      href="#technologies">Technologies</a
    >
    <a
      on:click={() => ($header_nav_menu_open = false)}
      class="text-xl"
      href="#about">About</a
    >
    <a
      on:click={() => ($header_nav_menu_open = false)}
      class="text-xl"
      href="#contact">Contact Us</a
    >
  </nav>
</div>
