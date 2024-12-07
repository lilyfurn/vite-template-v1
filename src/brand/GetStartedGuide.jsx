import { Schedule, DesignServices, CheckCircle } from "@mui/icons-material";

const GetStartedGuide = () => {
  const steps = [
    {
      title: "Schedule a Consultation",
      description:
        "Let’s discuss your project goals and determine how Laibel Labs can help.",
      icon: <Schedule fontSize="large" className="text-blue-600" />,
    },
    {
      title: "Custom Solution Design",
      description:
        "We’ll create a tailored plan to meet your unique business needs.",
      icon: <DesignServices fontSize="large" className="text-blue-600" />,
    },
    {
      title: "Implementation & Support",
      description:
        "Launch your solution with confidence and benefit from ongoing support.",
      icon: <CheckCircle fontSize="large" className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Get Started in 3 Simple Steps
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover how easy it is to work with Laibel Labs and achieve your
          goals.
        </p>

        {/* Steps */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedGuide;
