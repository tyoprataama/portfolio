import profile from "@/assets/me.jpg";
import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";

export default function FooterSection() {
  return (
    <footer className="relative w-full min-h-screen bg-linear-to-b from-black to-[#431f0b] text-white py-2 px-6 flex flex-col justify-between md:px-20">
      
      {/* Bagian atas (headline + kontak) */}
      <div className="flex flex-col items-start justify-center flex-grow">
        {/* Headline */}
        <div className="text-left mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#f8a07d] py-3">
            Suka kopi, mau ngopi bareng?
            <br />
            Have any project ideas?
            <br />
            Ask something?
          </h2>
        </div>

        {/* Contact section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">
          {/* Profile */}
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#2A2A2A] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            />
            <span className="absolute -bottom-1 -right-1 text-3xl">🔥</span>
          </div>

          {/* Contact info */}
          <div className="flex flex-col text-left text-[#f5c1ad]">
            <p className="text-base md:text-lg mb-5 font-medium text-[#f99c78]">
              Contact me via
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:tyopriyantoputra@gmail.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <IconMail className="text-[#f99c78]" /> tyopriyantoputra@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/tyo-pratama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <IconBrandLinkedin className="text-[#f99c78]" /> @tyo-pratama
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="w-full text-left text-sm text-[#f99c78]/80 mt-10 py-2">
        <p>
          Made with {" "}<span className="text-[#f6ab8d]">Vite</span> & <span className="text-[#f6ab8d]">Love</span> by{" "}
          <span className="text-[#f6ab8d] font-semibold">Tyo Putra</span> &copy; 2025
        </p>
      </div>
    </footer>
  );
}
