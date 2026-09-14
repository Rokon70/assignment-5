export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 hover:first-line:shadow">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mt-6 text-slate-500 text-lg max-w-md">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="px-6 py-3 rounded-lg text-white font-semibold bg-brand-gradient hover:opacity-90 transition-opacity shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-lg font-semibold text-slate-700 border border-slate-300 hover:border-slate-900"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          // src="./src/assets/banner-stack.png"
          // src="https://www.codegeeks.solutions/_next/image?url=https%3A%2F%2Fqcayzxvauytdssvg.public.blob.vercel-storage.com%2Fseed-6a0b14f5945ce33c99020e96_b3b67782-7d53-47bd-aa9d-375209e85793-7.png&w=1200&q=75"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLwuiQkMvDTTs_wR6kZ7S_QvuBVlxWBLB5VRhxsnv-AS9gpxeoOmhRhXb_iXI9CDP39ZpSOdzkSd_O3QTf6zHZHzWVg-g8QGAAixC5-wmZ_oelCiqZQlIpkBD86mePw9d8ki9nLZUkNrst58ZEnDo_APr0P41j2SjVhcTKqAROxNZBSzdbqYmS98v2ThKF/w640-h426-rw/ai-tools-work-2025.webp"
          alt="Development stack illustration"
          className="w-full max-w-md rounded-2xl"
        />
      </div>
    </section>
  );
}
