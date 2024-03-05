<script>
  //@ts-nocheck

  let quote = {
    name: "",
    email: "",
    service: "",
    message: "",
  };

  export let form;

  console.log(form);
</script>

<section id="quote" class="bg-secondary-500 bg-img relative h-screen">
  <div
    class="max-w-7xl mx-auto py-16 flex flex-col justify-center h-full px-4 7xl:px-0"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div
        class="p-8 bg-gradient-to-b bg-[#4541ebcc] rounded-tl-lg rounded-bl-lg text-white flex flex-col justify-center text-center"
      >
        <h1 class="text-2xl lg:text-4xl font-semibold mb-4">
          Transform Your Vision into Reality
        </h1>
        <p class="text-lg">
          Unlock the possibilities! Reach out using the form to receive a
          personalized quote and let's make your dreams a reality together.
        </p>
      </div>
      <div class="p-8 bg-[#ffffff4d] rounded-tr-lg rounded-br-lg">
        <form method="POST">
          <div class="mb-4">
            <label
              for="name"
              class="block text-white text-sm font-semibold mb-2">Name</label
            >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="border-b-4 border-primary-500 placeholder-white rounded-lg w-full py-3 px-3 bg-[#ffffff4d] text-white leading-tight focus:outline-none focus:"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-white text-sm font-semibold mb-2"
              >Email</label
            >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="border-b-4 border-primary-500 placeholder-white rounded-lg w-full py-3 px-3 bg-[#ffffff4d] text-white leading-tight focus:outline-none focus:"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="service"
              class="block text-white text-sm font-semibold mb-2"
              >Service</label
            >
            <select
              name="service"
              class="border-b-4 border-primary-500  placeholder-white rounded-lg w-full py-3 px-3 bg-[#ffffff4d] text-white leading-tight focus:outline-none"
            >
              <option selected class="text-primary-500">Web Development</option>
              <option class="text-primary-500">App Development</option>
              <option class="text-primary-500">IT Consultation</option>
              <option class="text-primary-500">Other</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block text-white text-sm font-semibold mb-2"
            >
              Your Message</label
            >
            <textarea
              name="message"
              placeholder="Message"
              class="border-b-4 border-primary-500 placeholder-white rounded-lg w-full py-3 px-3 bg-[#ffffff4d] text-white leading-tight focus:outline-none focus:"
              required
            />
          </div>
          <p class="text-green-500">{form?.success || ""}</p>
          <div class="mb-4">
            <button
              type="submit"
              class="bg-indigo-500 text-white font-semibold rounded-lg px-4 py-2"
            >
              Submit
            </button>
          </div>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</section>

<style>
  .bg-img {
    background-image: url("$lib/assets/images/wave.svg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
