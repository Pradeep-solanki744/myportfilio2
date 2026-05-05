import { HIGHLIGHTS } from "../constants/data";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="animate-fade-in flex justify-center lg:justify-start">
              <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              <p>
               Hi, I’m Pradeep Solanki — a passionate and driven individual focused on building meaningful digital experiences. I enjoy turning ideas into practical solutions and continuously improving my skills to stay relevant in a fast-changing world.
              </p>
              <p>
               With a strong interest in technology and creativity, I work on projects that challenge me to think differently and grow. I believe in learning by doing, whether it’s developing new skills, solving real-world problems, or exploring innovative approaches.
              </p>
              <p>
               I’m someone who values consistency, curiosity, and quality. I like working on projects that not only look good but also deliver real impact. My goal is to keep evolving, contribute to exciting opportunities, and create work that speaks for itself.
              </p>
            </div>

            <div className="glass rounded-2xl p-5 md:p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-sm sm:text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="glass p-5 md:p-6 rounded-2xl animate-fade-in flex flex-col items-center sm:items-start text-center sm:text-left"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
