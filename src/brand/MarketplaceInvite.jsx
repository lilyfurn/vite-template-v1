const MarketplaceInvite = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Join the Laibel Labs Marketplace
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Expand your reach, partner with innovators, and drive growth in a
          cutting-edge ecosystem.
        </p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 shadow-md rounded-lg border border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Expand Your Reach
            </h3>
            <p className="mt-2 text-gray-600">
              Showcase your products or services to a global audience.
            </p>
          </div>

          <div className="p-6 bg-gray-50 shadow-md rounded-lg border border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Partner with Innovators
            </h3>
            <p className="mt-2 text-gray-600">
              Collaborate with leaders in blockchain and AI to push boundaries.
            </p>
          </div>

          <div className="p-6 bg-gray-50 shadow-md rounded-lg border border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Drive Growth</h3>
            <p className="mt-2 text-gray-600">
              Leverage cutting-edge tools to enhance your operations.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Sign Up for Our Marketplace
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceInvite;
