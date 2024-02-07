<script>
  import HeaderNavMenu from "./HeaderNavMenu.svelte";
  import { header_nav_menu_open } from "../helper/store";
</script>

<header class="bg-indigo-900 text-white">
  <div class="max-w-7xl mx-auto flex items-center gap-8 py-4 px-8">
    <a class="text-xl font-semibold block mr-auto" href="/"> Lavange </a>
    <nav class="hidden lg:flex gap-8">
      <a href="/">Home</a>
      <a href="#services">Services</a>
      <a href="#technologies">Technologies</a>
      <a href="#about">About</a>
      <a href="#contact">Contact Us</a>
    </nav>
    <a href="#quote" class="block border border-white rounded-lg px-4 py-2"
      >Get Quote</a
    >
    <button
      on:click={() => ($header_nav_menu_open = true)}
      class="block lg:hidden"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 48 48"
        ><path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M7.95 11.95h32m-32 12h32m-32 12h32"
        /></svg
      ></button
    >
  </div>
</header>

<HeaderNavMenu />
