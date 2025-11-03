import React from "react";

export default function ComingSoonCard({
  title = "New Project",
  subtitle = "Coming Soon",
  note = "Stay tuned — launching soon!",
}) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="
          p-6 rounded-2xl
          backdrop-blur-md
          bg-[#B9E3C6]/18
          border border-[#B9E3C6]/40
          shadow-[0_8px_30px_rgba(185,227,198,0.12)]
          hover:shadow-[0_12px_40px_rgba(185,227,198,0.18)]
          transition-all duration-300
        "
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-[#E9F7EF]">
              {title}
            </h4>
            <p className="mt-1 text-sm text-[#E9F7EF]/90">{subtitle}</p>
          </div>

          {/* Badge kecil */}
          <div className="flex-shrink-0">
            <div className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#B9E3C6]/40 shadow-sm">
              Soon
            </div>
          </div>
        </div>

        <p className="py-4 text-sm text-[#E9F7EF]/90 leading-relaxed">{note}</p>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex-1">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-linear-to-r from-[#B9E3C6] via-[#A1D9B5] to-[#8CCFA3] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
