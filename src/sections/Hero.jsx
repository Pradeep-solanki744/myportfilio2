import { useMemo } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { SKILLS } from "../constants/data";

export const Hero = () => {
  // Memoize random dots so they don't re-render jumpily
  const dots = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#17dbc1",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.animationDuration} ease-in-out infinite`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="animate-fade-in flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Hello!<span className="text-primary glow-text"></span>
                <br />
                I'm{" "}
                <span className="text-primary glow-text">Pradeep Solanki</span>
                <br />
                Full Stack Developer
                <br />
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200 leading-relaxed">
                A software engineer specializing in React.js, Node.js, Next.js, 
                and TypeScript. I build scalable, performant web applications that
                users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton className="w-full sm:w-auto">
                <a
                  href="/Pradeep_solanki_22-04-2026.pdf"
                  download="Pradeep_Solanki_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground hidden sm:inline-block">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Pradeep-solanki744" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/pradeep763/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/_i_am__pradeep2003",
                },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300 mt-8 lg:mt-0">
            {/* Profile Image */}
            <div className="relative max-w-sm md:max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Pradeep Solanki"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 glass rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float scale-90 md:scale-100">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 glass rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float animation-delay-500 scale-90 md:scale-100">
                  <div className="text-xl md:text-2xl font-bold text-primary">0+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 md:mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 md:w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 md:w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...SKILLS, ...SKILLS].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-4 md:px-8 py-2 md:py-4">
                  <span className="text-lg md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800 hidden md:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
