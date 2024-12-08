import { useState } from "react";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Function to handle form submission
  const submitForm = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_FIREBASE_FUNCTION_URL}/handleContactFormSubmission`, // Replace with your function URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      console.log("Response data:", data);
      return data;
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message || "Failed to submit the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, successMessage, submitForm };
};

export default useContactForm;
