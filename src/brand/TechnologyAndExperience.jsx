import { Bolt, Verified, School } from "@mui/icons-material";

const TechnologyAndExperience = () => {
  const highlights = [
    {
      icon: <Bolt fontSize="large" className="text-blue-600" />,
      title: "10+ Years of Innovation",
      description: "Leading the industry with cutting-edge technology solutions.",
    },
    {
      icon: <Verified fontSize="large" className="text-blue-600" />,
      title: "Trusted by 500+ Businesses",
      description:
        "Delivering reliable blockchain and AI solutions to a global client base.",
    },
    {
      icon: <School fontSize="large" className="text-blue-600" />,
      title: "Award-Winning Expertise",
      description:
        "Recognized as 'Top Innovators in Tech' for 3 consecutive years.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Expertise
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Pioneering blockchain and AI technology to empower businesses.
        </p>

        {/* Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyAndExperience;
