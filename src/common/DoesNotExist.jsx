import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoesNotExist = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to the home page or another route
    }, 3000); // 3-second delay before redirecting

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">This page does not exist</h1>
      <p className="text-gray-600 mt-4">Redirecting to the home page...</p>
    </div>
  );
};

export default DoesNotExist;
