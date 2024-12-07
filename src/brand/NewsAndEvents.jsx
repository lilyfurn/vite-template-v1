const NewsAndEvents = () => {
  const newsItems = [
    {
      title: "Laibel Labs Launches Blockchain 2.0 Platform",
      description:
        "Revolutionizing digital infrastructure with our next-generation blockchain technology.",
      date: "December 10, 2024",
      link: "#",
    },
    {
      title: "AI Conference 2024",
      description:
        "Join us as we explore the latest trends and innovations in artificial intelligence.",
      date: "January 15, 2024",
      link: "#",
    },
    {
      title: "Partnership with GreenTech",
      description:
        "Supporting sustainability through innovative blockchain solutions.",
      date: "November 30, 2024",
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Stay Updated with Laibel Labs
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover the latest news, updates, and events from our team.
        </p>

        {/* News Items */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-sm text-gray-500">{news.date}</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {news.title}
              </h3>
              <p className="mt-2 text-gray-600">{news.description}</p>
              <a
                href={news.link}
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Read More News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
