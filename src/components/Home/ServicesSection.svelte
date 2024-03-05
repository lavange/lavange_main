<script>
  //@ts-nocheck

  let services = [
    {
      name: "Website Development",
      desc: "Our skilled team of developers creates dynamic and visually appealing websites tailored to your unique needs, ensuring a seamless user experience and optimal functionality for your online presence.",
    },
    {
      name: "App Development",
      desc: "Leveraging cutting-edge technologies, we design and develop innovative mobile applications that meet industry standards and user expectations, providing solutions that enhance engagement and streamline processes.",
    },
    {
      name: "IT Consultation",
      desc: "As experienced IT consultants, we offer strategic guidance to optimize your technology infrastructure, improve efficiency, and align IT strategies with your business goals, ensuring a robust and secure IT environment.",
    },
  ];
</script>

<section id="services" class="py-16 bg-secondary-500 h-screen bg-img relative">
  <div class="shadow-[0_0_250px_100px_rgba(68,65,235,1)] absolute bottom-0 left-0 ">

  </div>
  <div
    class="max-w-7xl mx-auto py-8 flex flex-col justify-center h-full px-4 7xl:px-0"
  >
    <h1 class="text-3xl lg:text-4xl font-semibold text-center mb-8 text-white">Our Services</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service}
        <article
          class="cursor-pointer hover:shadow-[0_0_250px_50px_rgba(255,255,255,0.5)] rounded-lg p-4 text-center bg-[#ffffff0d]"
        >
          <h2 class="text-2xl font-semibold text-white mb-4">
            {service.name}
          </h2>
          <p class="text-white">
            {service.desc}
          </p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
    .bg-img {
    background-image: url("$lib/assets/images/hexagon.svg");
    background-position:top;
    background-repeat: no-repeat;
   background-size: 100% 100%; 
  }
</style>
