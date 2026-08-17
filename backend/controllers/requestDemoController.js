const sendEmail = require("../services/emailService");

const requestDemoController = async (req, res) => {
  try {
    const data = req.body;

    const emailResult = await sendEmail(data)
      .then(() => ({ status: "fulfilled" }))
      .catch((error) => {
        console.error("Email submission failed:", error);
        return { status: "rejected", error };
      });

    if (emailResult.status === "rejected") {
      return res.status(500).json({
        success: false,
        message: "Something went wrong while sending your demo request.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "The email was sent.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

module.exports = requestDemoController;