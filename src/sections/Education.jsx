export default function Education() {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "SANSKRITI UNIVERSITY",
      duration: "2022 - 2025",
      description: 
      
        "Focused on software development, data structures, algorithms, database management, and modern web technologies.",
        
    },
    {
      degree: "Computer Science & Engineering",
      institution: "P K POLYTECHNIC",
      duration: "2020 - 2022",
      description:
        "Built a strong academic foundation in Mathematics, Physics, and Computer Science.",
    },
    {
      degree: "Intermediate (UP.BOARD)",
      institution: "CH RAJVEER SINGH MIC ANORA MATHURA",
      duration: "2019 - 2020",
      description:
        "Built a strong academic foundation in Mathematics, Physics, and  Chemistry.",
    }, 
     {
      degree: "High School (UP.BOARD)",
      institution: "BABA H SINGH H S S JARELIYA RAYA MATHURA",
      duration: "2017 - 2018",
      description:
        "Built a strong academic foundation in Mathematics.",
    }, 
  ];
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
          {education.map((item, index) => (
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
}