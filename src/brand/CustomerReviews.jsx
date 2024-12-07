const CustomerReviews = () => {
  const reviews = [
    {
      quote:
        "Laibel Labs transformed our operations with cutting-edge AI solutions.",
      author: "TechCorp Inc.",
    },
    {
      quote:
        "Their blockchain technology streamlined our processes, saving us time and money.",
      author: "FinTrack Systems",
    },
    {
      quote:
        "Professional, innovative, and results-driven — we highly recommend Laibel Labs.",
      author: "InnovateNow Solutions",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Trusted by industry leaders to deliver exceptional results.
        </p>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-gray-700 italic">
                <span className="text-xl font-medium text-gray-900">“</span>
                {review.quote}
                <span className="text-xl font-medium text-gray-900">”</span>
              </p>
              <p className="mt-4 font-semibold text-gray-900 text-right">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
           Leave A Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
