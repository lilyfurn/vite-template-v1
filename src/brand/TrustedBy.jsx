
const TrustedBy = () => {
  const partners = [
    { name: "FinTech Innovations", logo: "/logos/fintech-logo.png" },
    { name: "GlobalLogix", logo: "/logos/globallogix-logo.png" },
    { name: "PropTech Innovators", logo: "/logos/proptech-logo.png" },
    { name: "MedIntel", logo: "/logos/medintel-logo.png" },
    { name: "GreenTech Solutions", logo: "/logos/greentech-logo.png" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Trusted By Industry Leaders
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Collaborating with global pioneers in technology and innovation.
        </p>

        {/* Partner Logos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-gray-50 shadow-md rounded-lg border border-gray-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
