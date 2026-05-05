import { EXPERIENCES } from "../constants/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-64 md:w-96
       h-64 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 text-center md:text-left mx-auto md:mx-0">
          <span
            className="text-secondary-foreground text-xs md:text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground leading-tight"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-sm sm:text-base text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-4 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-6 md:top-0 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-6 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-5 md:p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500`}
                  >
                    <span className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 text-foreground">{exp.role}</h3>
                    <p className="text-sm md:text-base font-semibold text-primary/80">{exp.company}</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface border border-border/50 text-[10px] md:text-xs rounded-full text-muted-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
