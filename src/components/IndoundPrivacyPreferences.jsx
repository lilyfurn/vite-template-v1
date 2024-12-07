import { useState } from "react";
import { Switch } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import PropTypes from "prop-types";
const InboundPrivacyPreferences = ({
  preferences,
  savePreferences,
  rejectAllPreferences,
  updatePreference,
}) => {
  // State to manage expanded sections
  const [expanded, setExpanded] = useState({
    strictlyNecessary: false,
    performance: false,
    functional: false,
    target: false,
  });

  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-6 bg-white shadow-md w-full h-full md:w-1/3">
      {/* Privacy Use Statement */}
      <h1 className="text-2xl font-semibold mb-4">Privacy Preference Center</h1>
      <p className="text-gray-600 text-sm">
        Manage your cookie preferences to enhance your experience. Your privacy
        is important to us, and you can control the categories of cookies used
        on this site.
      </p>

      {/* Allow All and Reject All Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={savePreferences}
          className="w-1/2 py-2 bg-black text-white font-semibold rounded hover:bg-gray-600"
        >
          Allow All
        </button>
        <button
          onClick={rejectAllPreferences}
          className="w-1/2 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
        >
          Reject All
        </button>
      </div>

      {/* Manage Consent Preferences */}
      <h2 className="text-lg font-semibold mt-6">Manage Consent Preferences</h2>
      <div className="space-y-4">
        {/* Strictly Necessary Cookies */}
        <div className="bg-gray-100 p-3 rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand("strictlyNecessary")}
          >
            <span className="font-medium">Strictly Necessary Cookies</span>
            <span className="text-gray-600 text-sm">Always Active</span>
            {expanded.strictlyNecessary ? <ExpandLess /> : <ExpandMore />}
          </div>
          {expanded.strictlyNecessary && (
            <p className="text-gray-600 text-sm mt-2">
              These cookies are essential for the website to function and cannot
              be disabled. They help with core functionalities like security,
              network management, and accessibility.
            </p>
          )}
        </div>

        {/* Performance Cookies */}
        <div className="bg-gray-100 p-3 rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand("performance")}
          >
            <span className="font-medium grow">Performance Cookies</span>
            <Switch
              checked={preferences.performance}
              onChange={() =>
                updatePreference("performance", !preferences.performance)
              }
              color="primary"
            />
            {expanded.performance ? <ExpandLess /> : <ExpandMore />}
          </div>
          {expanded.performance && (
            <p className="text-gray-600 text-sm mt-2">
              These cookies collect information about how you use our website,
              such as which pages you visit most often, and help us improve
              website performance.
            </p>
          )}
        </div>

        {/* Functional Cookies */}
        <div className="bg-gray-100 p-3 rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand("functional")}
          >
            <span className="font-medium grow">Functional Cookies</span>
            <Switch
              checked={preferences.functional}
              onChange={() =>
                updatePreference("functional", !preferences.functional)
              }
              color="primary"
            />
            {expanded.functional ? <ExpandLess /> : <ExpandMore />}
          </div>
          {expanded.functional && (
            <p className="text-gray-600 text-sm mt-2">
              These cookies enable enhanced functionality and personalization,
              such as remembering choices you make or providing live chat
              support.
            </p>
          )}
        </div>

        {/* Target Cookies */}
        <div className="bg-gray-100 p-3 rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand("target")}
          >
            <span className="font-medium grow">Targeting Cookies</span>
            <Switch
              checked={preferences.target}
              onChange={() => updatePreference("target", !preferences.target)}
              color="primary"
            />
            {expanded.target ? <ExpandLess /> : <ExpandMore />}
          </div>
          {expanded.target && (
            <p className="text-gray-600 text-sm mt-2">
              These cookies are used to deliver advertisements more relevant to
              you and your interests. They also help limit the number of times
              you see an ad and measure the effectiveness of advertising
              campaigns.
            </p>
          )}
        </div>
      </div>

      {/* Confirm Choices Button */}
      <div className="mt-6">
        <button
          onClick={savePreferences}
          className="w-full py-2 bg-black text-white font-semibold rounded hover:bg-gray-600"
        >
          Confirm Choices
        </button>
      </div>
    </div>
  );
};

// Prop validation using PropTypes
InboundPrivacyPreferences.propTypes = {
    preferences: PropTypes.shape({
      strictlyNecessary: PropTypes.bool.isRequired,
      performance: PropTypes.bool.isRequired,
      functional: PropTypes.bool.isRequired,
      target: PropTypes.bool.isRequired,
    }).isRequired,
    savePreferences: PropTypes.func.isRequired,
    rejectAllPreferences: PropTypes.func.isRequired,
    updatePreference: PropTypes.func.isRequired,
  };

export default InboundPrivacyPreferences;
