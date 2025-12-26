import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import GlassCard from "../GlassCard";

const Contact = () => {
  const contactInfo = [
    {
      id: "email",
      label: "Email",
      value: "kassandramije@gmail.com",
      icon: HiMail,
      link: "mailto:kassandramije@gmail.com",
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+63 916 925 6944",
      icon: HiPhone,
      link: "tel:+639169256944",
      gradient: "from-green-500/20 via-green-500/10 to-transparent",
      iconBg: "bg-green-500/10 group-hover:bg-green-500/20",
      iconColor: "text-green-400",
      borderColor: "border-green-500/20",
    },
    {
      id: "location",
      label: "Location",
      value: "Cagayan de Oro, Philippines",
      icon: HiLocationMarker,
      link: null,
      gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
      iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20",
    },
  ];

  return (
    <div className="relative py-10">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Header Section */}
      <div className="mb-10 space-y-3 sm:mb-12 sm:space-y-4 md:mb-16">
        <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          Get In Touch.
        </h1>
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">
          Feel free to reach out if you'd like to collaborate or just want to
          say hello. I'm always open to discussing new projects and
          opportunities.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
        {contactInfo.map((info) => {
          const IconComponent = info.icon;
          return (
            <GlassCard
              key={info.id}
              variant="elevated"
              hover
              className="group relative overflow-hidden p-6 transition-all duration-500 sm:p-7 md:p-8"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Animated border on hover */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 ${info.borderColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10 flex flex-col items-start gap-4 sm:gap-5 md:gap-6">
                {/* Icon with animated background */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14 md:h-16 md:w-16 ${info.iconBg} transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-black/30`}
                >
                  <IconComponent
                    className={`text-2xl sm:text-2xl md:text-3xl ${info.iconColor} transition-all duration-500 group-hover:scale-110`}
                  />
                </div>

                {/* Content */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg font-semibold tracking-wide text-white/90 transition-colors duration-300 group-hover:text-white sm:text-xl">
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="block text-sm text-white/70 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 sm:text-base"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:text-base">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${info.iconBg} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
