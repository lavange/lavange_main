<script>
  //@ts-nocheck
  import HeaderNavMenu from "./HeaderNavMenu.svelte";
  import { header_nav_menu_open } from "../helper/store";
  import HamburgerMenuIcon from "./svg/HamburgerMenuIcon.svelte";
  import logoIcon from "$lib/assets/images/logo.svg";

  let y;

  $: {
    console.log(y);
  }
</script>

<svelte:window bind:scrollY={y} />

<header class="text-white  fixed top-0 left-0 right-0 z-50 " class:bg-transparent={!y} class:bg-translucent={y}>
  <div class="max-w-7xl mx-auto flex items-center gap-8 py-4 px-8">
    <a
      class="text-xl font-semibold mr-auto h-20 w-20 inline-flex items-center"
      href="/"
    >
      <img src={logoIcon} alt="Lavange Logo" />
      <span>Lavange</span>
    </a>
    <nav class="hidden lg:flex gap-8 font-bold">
      <a href="/">Home</a>
      <a href="#services">Services</a>
      <a href="#technologies">Technologies</a>
      <a href="#about">About</a>
      <a href="#contact">Contact Us</a>
    </nav>
    <a
      href="#quote"
      class="block border bg-primary-500 font-bold border-none rounded-lg px-4 py-2 hover:shadow-[0_0_250px_50px_rgba(68,65,235,1)]"
      >Get Quote</a
    >
    <button
      on:click={() => ($header_nav_menu_open = true)}
      class="block lg:hidden"><HamburgerMenuIcon /></button
    >
  </div>
</header>

<HeaderNavMenu />

<style>
  .bg-translucent {
    background-color: #4441eba1;
  }
</style>
