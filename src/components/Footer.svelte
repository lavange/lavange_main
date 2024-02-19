<script>
  import LinkedinIcon from "./svg/LinkedinIcon.svelte";
</script>

<footer class="bg-indigo-500 text-white pt-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div id="about">
        <h1 class="text-xl mb-2 font-semibold">About</h1>
        <p class="text-justify">
          Lavange: Pioneering IT innovation, we deliver tailored software
          solutions. Elevate your business with our commitment to cutting-edge
          technology and seamless integration. Your success, our priority.
        </p>
      </div>
      <div id="contact">
        <h1 class="text-xl mb-2 font-semibold">Contact</h1>
        <p>Send your queries at below email address</p>
        <a href="mailto:business@lavange.in">business[at]lavange.in</a>
      </div>
      <div>
        <h1 class="text-xl mb-2 font-semibold">Follow Us</h1>
        <a target="_blank" href="https://www.linkedin.com/company/lavange-official/">
          <LinkedinIcon /></a
        >
      </div>
    </div>
  </div>
  <div class="py-2">
    <p class="text-center">© 2024 Lavange Pvt. Ltd. All rights reserved.</p>
  </div>
</footer>
