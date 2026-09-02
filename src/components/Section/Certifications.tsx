import { FaAws } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import GlassCard from "../GlassCard";
import { certifications } from "../../data/certifications";

const Certifications = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      <div className="space-y-3 text-center sm:space-y-4">
        <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          Certifications
        </h2>
        <p className="max-w-2xl px-4 text-sm text-white/90 sm:px-0 sm:text-base">
          Credentials that reflect my growing cloud and technical foundation
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.badgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={`View ${cert.title} badge on Credly`}
          >
            <GlassCard
              variant="elevated"
              hover
              className="group relative h-full overflow-hidden p-6 transition-all duration-500 sm:p-7 md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col items-start gap-4 sm:gap-5">
                <div className="flex w-full items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:shadow-xl group-hover:shadow-black/30 sm:h-14 sm:w-14 md:h-16 md:w-16">
                    <FaAws className="text-2xl text-orange-400 transition-all duration-500 group-hover:scale-110 sm:text-3xl md:text-4xl" />
                  </div>
                  <HiExternalLink className="mt-1 text-lg text-white/40 transition-colors duration-300 group-hover:text-orange-300" />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg font-semibold tracking-wide text-white/90 transition-colors duration-300 group-hover:text-white sm:text-xl">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-orange-300/80 sm:text-base">
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
                      {cert.description}
                    </p>
                  )}
                </div>

                <span className="mt-auto pt-2 text-xs font-medium uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-orange-300/90 sm:text-sm">
                  View Credly Badge
                </span>
              </div>

              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
            </GlassCard>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
