<script>
  // @ts-nocheck
</script>

<header class="container container--header">
  <div class="brand">
    <div class="brand--logo" />
    <a class="brand--name text--golden" href="/">Lavange</a>
  </div>
  <nav class="nav">
    <!-- <a class="nav--item" href="/about">About</a>
    <a class="nav--item" href="/contact">Contact</a> -->
  </nav>
</header>

<style lang="scss">
  .container--header {
    display: flex;
    justify-content: space-between;
    height: 4rem;
  }

  .brand {
  }

  .brand--name {
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
  }

  .brand--name:hover {
    text-shadow: 0 0 10px #f6f2c0, 0 0 20px #f6f2c0, 0 0 40px #c4f5af,
      0 0 80px #f6f2c0, 0 0 120px #f6f2c0, 0 0 160px #f6f2c0;
  }

  .nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .nav--item {
  }

  .nav--item:hover {
    text-shadow: 0 0 10px #f6f2c0, 0 0 20px #f6f2c0, 0 0 40px #c4f5af,
      0 0 80px #f6f2c0, 0 0 120px #f6f2c0, 0 0 160px #f6f2c0;
  }
</style>
