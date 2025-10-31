import checkIcon from '/src/assets/check.png';

export default function Nav() {
  return (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-1/2 max-w-3xl z-50">
  <div className="flex justify-center items-center p-2 md:p-1 rounded-2xl 
                  backdrop-blur-xs bg-white/10 border border-white/20 shadow-lg ">
  <span className="flex items-center">
 <p className="text-white/90 font-extrabold hover:text-white transition cursor-pointer" >tyothe3rd</p>
 <img src={checkIcon} alt="logo" className="w-3 h-3"/>
  </span>
  </div>
</nav>

  );
}