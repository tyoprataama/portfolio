export default function HeroProps() {
  return (
   <div div className = "grid px-6 md:px-9 gap-5 md:gap-8" >
  <h1 className="header-title text-2xl md:text-3xl font-extrabold">Tyo Putra.</h1>

  <p className = "text-4xl md:text-6xl font-extrabold leading-tight mt-2" >
    a{" "}
    <span className = "relative font-semibold before:absolute before:inset-0 before:-skew-y-3 before:bg-[#FE7743]/40 before:rounded-md before:-z-10" >
      happy
    </span>{" "}
    fresh graduate who strives to become  <span className="underline decoration-wavy decoration-2 md:decoration-7 decoration-[#FF6500]">a better person</span>
  </p>

  <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-8 mt-4">
    <p className="text-lg md:text-2xl lg:text-[30px] font-light max-w-[740px]">
      <span className="font-bold">2+ years</span> of experience in using{" "}
      <span className="font-bold ">node.js</span> and{" "}
      <span className="font-bold ">react.js</span> for web development.
    </p>

    <span>
  <p className = "relative font-semibold text-sm md:text-base lg:text-[17px] before:absolute before:inset-0 before:-skew-y-3 before:bg-[#FE7743]/40 before:rounded-md before:-z-10 px-2" >
    <span className="inline md:hidden">👆</span>
    <span className="hidden md:inline">👈</span>
    {" "}Recently shifted to a more general career path btw 😉
  </p>
</span>

  </div>
</div>

  )
}