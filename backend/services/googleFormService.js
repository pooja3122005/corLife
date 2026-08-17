const axios = require("axios");

const submitToGoogleForm = async (data) => {
  const formData = new URLSearchParams();

  formData.append("fvv", "1");
  formData.append("pageHistory", "0");
  formData.append("fbzx", process.env.GOOGLE_FORM_FBZX || "-3095770863918305049");
  formData.append("submissionTimestamp", String(Date.now()));
  formData.append("submit", "Submit");

  formData.append("entry.730995552", data.name || "");
  formData.append("entry.885895232", data.email || "");
  formData.append("entry.520647152", data.organization || "");
  formData.append("entry.711580311", data.role || "");
  formData.append("entry.1835731943", data.notes || "");

  const response = await axios.post(process.env.GOOGLE_FORM_URL, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    maxRedirects: 0,
  });

  if (response.status >= 400) {
    throw new Error(`Google Form submission failed with status ${response.status}`);
  }

  return { mode: "google_form", success: true };
};

module.exports = submitToGoogleForm;