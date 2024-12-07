const ProjectShowcase = () => {
  const projects = [
    {
      title: "Supply Chain Optimization",
      client: "GlobalLogix",
      result: "Increased efficiency by 40% using blockchain tracking.",
      description:
        "By integrating blockchain into supply chain management, we created a transparent and secure system that optimized logistics and improved operational efficiency.",
      link: "#",
    },
    {
      title: "AI Predictive Models for Healthcare",
      client: "MedIntel",
      result: "Improved diagnosis accuracy by 25%.",
      description:
        "Developed AI-driven predictive models to support early diagnosis and personalized treatment plans, enhancing patient outcomes.",
      link: "#",
    },
    {
      title: "Smart Contracts for Real Estate",
      client: "PropTech Innovators",
      result: "Reduced transaction times by 50%.",
      description:
        "Implemented blockchain-based smart contracts to automate real estate transactions, ensuring security and efficiency.",
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Impactful Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover how we’re driving innovation and delivering measurable
          results.
        </p>

        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">Client: {project.client}</p>
              <p className="mt-2 font-medium text-gray-900">
                Result: {project.result}
              </p>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
