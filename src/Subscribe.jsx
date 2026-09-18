function Subscribe() {
  return (
    <section
      id="subscribe"
      className="flex flex-wrap justify-center items-center gap-2 p-6"
    >
      <h3 className="text-xl md:text-2xl text-cyan-700">
        <strong>SIGN UP FOR OUR DAILY INSIDER</strong>
      </h3>

      <form
        action="/subscribe"
        method="POST"
        className="flex gap-2"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-gray-400 p-2"
          required
        />

        <button
          type="submit"
          className="bg-gray-300 px-4 py-2"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Subscribe;