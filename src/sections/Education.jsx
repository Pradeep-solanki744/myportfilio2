import { EDUCATION } from "../constants/data";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 ">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-500 text-secondary-foreground">
            Education
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A summary of my academic journey, qualifications, and learning path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <span className="text-sm text-primary font-medium">
                {item.duration}
              </span>

              <h3 className="text-xl font-semibold mt-2">
                {item.degree}
              </h3>

              <h4 className=" font-bold leading-tight animate-fade-in animation-delay-500 text-secondary-foreground mt-1">
                {item.institution}
              </h4>
              <p className="text-gray-500 leading-relaxed">
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