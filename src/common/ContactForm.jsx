import { useState } from "react";
import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
  const { isLoading, error, successMessage, submitForm } = useContactForm();
  const defaultFormData = {
    name: "",
    email: "",
    message: "",
    interest: "",
    topics: [],
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const topics = checked
        ? [...prev.topics, value] // Add topic
        : prev.topics.filter((topic) => topic !== value); // Remove topic
      return { ...prev, topics };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await submitForm(formData);
      console.log("Result received in handleSubmit:", result); // Debug the result
  
      if (result?.success) {
        console.log(result.message); // Log the success message
        await new Promise((resolve) => setTimeout(resolve, 500)); // Optional delay
        setIsSubmitted(true);
        setFormData(defaultFormData); // Reset form data
      } else {
        console.error(result?.message || "Form submission failed."); // Log failure reason
      }
    } catch (error) {
      console.error("Unexpected error during submission:", error);
    }
  };
  

  return (
    <div className="p-4 bg-white shadow-md max-w-lg mx-auto rounded">
      {isSubmitted ? (
        <div className="text-center min-h-screen">
          <h2 className="text-xl font-bold mb-4 pt-56">Thank You!</h2>
          <p>Your message has been successfully submitted. Well get back to you soon!</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            {/* Interest Selector (Dropdown) */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Your Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="" disabled>Select your interest</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="employment">Employment</option>
                <option value="productInquiry">Product Inquiry</option>
                <option value="generalFeedback">General Feedback</option>
              </select>
            </div>

            {/* Topics Checkboxes */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Topics of Interest</label>
              <div className="flex flex-wrap gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="blockchain"
                    checked={formData.topics.includes("blockchain")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Blockchain
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="ai"
                    checked={formData.topics.includes("ai")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Artificial Intelligence
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="iot"
                    checked={formData.topics.includes("iot")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Internet of Things
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="cloudComputing"
                    checked={formData.topics.includes("cloudComputing")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Cloud Computing
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
