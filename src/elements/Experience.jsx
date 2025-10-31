export default function Experience() {
  return (
    <section className = "relative w-full min-h-screen  bg-[#181C14] flex flex-col justify-center items-center py-32 px-6" >
      <div className="max-w-5xl text-center">
        <h2 h2 className = "text-xl md:text-4xl font-extrabold text-white inline-block relative" >
          💼{" "}
          <span className="relative inline-block px-3">
            <span className="relative z-10">Highlighted Projects</span>
            <span className="absolute inset-0 -skew-y-3 bg-[#FE7743]/40 rounded-md z-0"></span>
          </span>
        </h2>

        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Some of the works I’m most proud of — coming soon 👀
        </p>
      </div>
    </section>
  )
}