const SubscriptionSelector = () => {
  const plans = [
    {
      name: "Starter",
      price: "$199/month",
      description: "For startups and small businesses.",
      features: [
        "Basic blockchain tools",
        "Limited AI analytics",
        "Email support",
      ],
      cta: "Choose Starter",
    },
    {
      name: "Pro",
      price: "$499/month",
      description: "For growing enterprises.",
      features: [
        "Full blockchain suite",
        "Advanced AI insights",
        "Priority support",
      ],
      cta: "Choose Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "For large-scale solutions.",
      features: [
        "Advanced integrations",
        "24/7 support",
        "Dedicated resources",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Find a plan that works for your business.
        </p>

        {/* Pricing Plans */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow-md rounded-lg border border-gray-200 ${
                plan.highlighted
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                {plan.name}
              </h3>
              <p className="mt-4 text-lg text-gray-900 text-center font-bold">
                {plan.price}
              </p>
              <p className="mt-2 text-sm text-gray-600 text-center">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-700 flex items-center justify-start"
                  >
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call-to-Action Button */}
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className={`inline-block px-6 py-3 font-medium rounded-lg shadow transition duration-200 ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSelector;
