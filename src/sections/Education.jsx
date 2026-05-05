import { EDUCATION } from "../constants/data";

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-500 text-secondary-foreground">
            Education
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl mx-auto">
            A summary of my academic journey, qualifications, and learning path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EDUCATION.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl border border-primary/10 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 p-6 md:p-10 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <span className="text-[10px] md:text-xs text-primary font-bold px-3 py-1 bg-primary/10 rounded-full mb-4 uppercase tracking-wider">
                {item.duration}
              </span>

              <h3 className="text-xl md:text-2xl font-bold mt-2 text-foreground">
                {item.degree}
              </h3>

              <h4 className="font-semibold text-sm md:text-base animate-fade-in animation-delay-500 text-primary mt-2">
                {item.institution}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;