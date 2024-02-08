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

<section id="quote" class="">
  <div
    class="max-w-7xl mx-auto py-16 flex flex-col justify-center h-full px-4 7xl:px-0"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div
        class="p-8 bg-gradient-to-b from-indigo-500 to-indigo-300 rounded-lg text-white flex flex-col justify-center text-center"
      >
        <h1 class="text-2xl lg:text-4xl font-semibold mb-4">
          Transform Your Vision into Reality
        </h1>
        <p class="text-lg">
          Unlock the possibilities! Reach out using the form to receive a
          personalized quote and let's make your dreams a reality together.
        </p>
      </div>
      <div class="p-8">
        <form method="POST" on:sub>
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-500 text-sm font-semibold mb-2">Name</label
            >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="border border-gray-300 rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-500 text-sm font-semibold mb-2"
              >Email</label
            >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="border border-gray-300 rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="service"
              class="block text-gray-500 text-sm font-semibold mb-2"
              >Service</label
            >
            <select
              name="service"
              class="border border-gray-300 rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none"
            >
              <option selected>Web Development</option>
              <option>App Development</option>
              <option>IT Consultation</option>
              <option>Other</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block text-gray-500 text-sm font-semibold mb-2"
            >
              Your Message</label
            >
            <textarea
              name="message"
              placeholder="Message"
              class="border border-gray-300 rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:"
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
