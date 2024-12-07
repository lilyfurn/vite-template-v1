import useCookiePreferences from "../hooks/useCookiePreferences";

const PrivacyPreferences = () => {
  const { preferences, updatePreference, savePreferences } =
    useCookiePreferences();

  return (
    <div>
      <h1>Privacy Preferences</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={preferences.performance}
            onChange={(e) => updatePreference("performance", e.target.checked)}
          />
          Performance Cookies
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={preferences.functional}
            onChange={(e) => updatePreference("functional", e.target.checked)}
          />
          Functional Cookies
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={preferences.target}
            onChange={(e) => updatePreference("target", e.target.checked)}
          />
          Target Cookies
        </label>
      </div>
      <button onClick={savePreferences}>Save Preferences</button>
    </div>
  );
};

export default PrivacyPreferences;
