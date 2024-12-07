import { Verified, Speed, BuildCircle, Expand } from "@mui/icons-material";

const Features = () => {
  const features = [
    {
      title: "Blockchain Solutions",
      description:
        "Decentralized systems for transparency and enhanced security.",
      icon: <Verified fontSize="large" className="text-blue-600" />,
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced insights to help you make data-driven decisions.",
      icon: <Speed fontSize="large" className="text-blue-600" />,
    },
    {
      title: "Custom Integrations",
      description: "Tailored technology solutions for unique business needs.",
      icon: <BuildCircle fontSize="large" className="text-blue-600" />,
    },
    {
      title: "Scalability",
      description:
        "Build systems that grow with your business without disruption.",
      icon: <Expand fontSize="large" className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Why Choose Laibel Labs?
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Innovative technology solutions designed to elevate your business.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg border border-gray-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
