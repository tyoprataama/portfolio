import ComingSoonCard from "@/css/Props/ComingSoon";

export default function Writings() {
  return (
    <section className = "relative w-full min-h-screen bg-linear-to-b from-[#0f3543] to-black grid justify-center items-start py-10 md:py-20 px-4 sm:px-6" >
         <div className="max-w-5xl text-center justify-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-extrabold text-white inline-block relative">
            ✍️{" "}
            <span className="relative inline-block px-3">
              <span className="relative z-10">Latest Writings</span>
              <span className="absolute inset-0 -skew-y-3 bg-[#FE7743]/40 rounded-md z-0"></span>
            </span>
          </h2>

          <p className="py-3 text-white/70 text-sm md:text-2xl max-w-2xl mx-auto leading-relaxed">
            I love writings my experience, tips and resources related to anything not only about web development.
          </p>

          <span className = "block text-sm md:text-2xl max-w-2xl mx-auto text-transparent underline decoration-wavy decoration-3 md:decoration-1 decoration-[#FE7743] py-3" >
            ---------------
          </span>
          <div className="flex justify-center w-full py-3">
          <ComingSoonCard
           title="Blog Writing"
        subtitle="Articles & essays"
        note = "I share somes of my thoughts about anything in my blog ~coming soon👀" / >
          </div>
        </div>
    </section>
  )
}