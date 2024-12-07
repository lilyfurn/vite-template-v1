const UserFeedback = () => {
  const feedbacks = [
    {
      quote:
        "Their expertise in blockchain exceeded our expectations, helping us achieve secure and scalable solutions.",
      author: "John Doe, TechCorp",
    },
    {
      quote:
        "AI-driven insights provided by Laibel Labs have been a game-changer for our business operations.",
      author: "Jane Smith, InnovateNow",
    },
    {
      quote:
        "Fantastic team! Highly skilled and professional — we highly recommend Laibel Labs.",
      author: "Mike Johnson, FinTrack Systems",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Your Feedback Drives Us Forward
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Hear what our clients have to say about working with us.
        </p>

        {/* Feedback Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-gray-700 italic">
                <span className="text-xl font-medium text-gray-900">“</span>
                {feedback.quote}
                <span className="text-xl font-medium text-gray-900">”</span>
              </p>
              <p className="mt-4 font-semibold text-gray-900 text-right">
                — {feedback.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
