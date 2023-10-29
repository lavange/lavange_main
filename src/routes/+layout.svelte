<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header />
<hr />
<slot />
<hr />
<Footer />

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    font-weight: 400;
    box-sizing: border-box;
  }

  :global(html) {
    background-color: black;
  }

  :global(p) {
    text-align: justify;
  }

  :global(h1, h2, h3, h4, h5, h6, p, h1, a, .text--golden) {
    background-image: repeating-linear-gradient(
      45deg,
      #462523 0,
      #cb9b51 22%,
      #f6e27a 45%,
      #f6f2c0 50%,
      #f6e27a 55%,
      #cb9b51 78%,
      #462523 100%
    );
    color: transparent;
    -webkit-background-clip: text;
  }

  :global(hr) {
    background-image: repeating-linear-gradient(
      45deg,
      #462523 0,
      #cb9b51 22%,
      #f6e27a 45%,
      #f6f2c0 50%,
      #f6e27a 55%,
      #cb9b51 78%,
      #462523 100%
    );
    height: 1px; /* You can adjust the height as needed */
    border: none; /* Removes the default line */
  }

  :global(.container) {
    max-width: 87.5rem;
    margin: 0 auto;
    padding: 0.5rem;
  }

  :global(.card) {
    position: relative;
    border-radius: 0.5rem;
    background-clip: padding-box; /* !importanté */
    border: solid 1px transparent;
    background-color: black;
  }

  /*.card:hover {
    box-shadow: 0 0 2px #f6f2c0, 0 0 4px #f6f2c0, 0 0 8px #c4f5af,
      0 0 16px #f6f2c0, 0 0 24px #f6f2c0, 0 0 32px #f6f2c0;
  }*/

  :global(.card::before) {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    margin: -1px;
    z-index: -1;
    background: repeating-linear-gradient(
      45deg,
      #462523 0,
      #cb9b51 22%,
      #f6e27a 45%,
      #f6f2c0 50%,
      #f6e27a 55%,
      #cb9b51 78%,
      #462523 100%
    );
  }

  :global(.card--body) {
    padding: 12px;
  }
</style>
