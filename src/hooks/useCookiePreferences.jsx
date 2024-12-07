import { useState } from "react";
import Cookies from "js-cookie";

const useCookiePreferences = () => {
  const defaultPreferences = {
    strictlyNecessary: true, // Always true
    performance: true,
    functional: true,
    target: true,
  };

  // Check if cookies exist
  const cookiesExist = Object.keys(defaultPreferences).some(
    (key) => Cookies.get(key) !== undefined
  );

  const [preferences, setPreferences] = useState(() => {
    // Initialize preferences: Use cookies if they exist, fallback to defaults
    return {
      strictlyNecessary: true, // Always true
      performance: Cookies.get("performance") === "true" || defaultPreferences.performance,
      functional: Cookies.get("functional") === "true" || defaultPreferences.functional,
      target: Cookies.get("target") === "true" || defaultPreferences.target,
    };
  });

  const [preferencesSaved, setPreferencesSaved] = useState(false);
  console.log("Preferences saved:", preferencesSaved);
  // Update a specific category
  const updatePreference = (category, value) => {
    setPreferences((prev) => {
      const updated = { ...prev, [category]: value };
      Cookies.set(category, value, { expires: 365, sameSite: "Lax" });
      return updated;
    });
  };

  // Save all preferences
  const savePreferences = (setAll = false) => {
    const updatedPreferences = setAll
      ? { ...preferences, performance: true, functional: true, target: true }
      : preferences;
  
    Object.entries(updatedPreferences).forEach(([key, value]) => {
      Cookies.set(key, value, { expires: 365, sameSite: "Lax" });
    });
  
    setPreferences(updatedPreferences); // Update the state to reflect the "Allow All"
    setPreferencesSaved(true);
  };

  // Reject all preferences
  const rejectAllPreferences = () => {
    setPreferences({
      strictlyNecessary: true,
      performance: false,
      functional: false,
      target: false,
    });
    Object.keys(defaultPreferences).forEach((key) => {
      Cookies.set(key, key === "strictlyNecessary", {
        expires: 365,
        sameSite: "Lax",
      });
    });
    setPreferencesSaved(true);
  };

  return {
    preferences,
    preferencesSaved,
    cookiesExist,
    updatePreference,
    savePreferences,
    rejectAllPreferences,
  };
};

export default useCookiePreferences;
