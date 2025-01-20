const { Product, Location, FAQ } = require("../models");

exports.handleMessage = async (req, res) => {
  const { message } = req.body;

  try {
    if (message.toLowerCase().includes("hi") || message.toLowerCase().includes("hello")) {
      return res.json({
        response: "Hello! How can I assist you today? You can ask about our product prices, business hours, return policy, support contact, or our branch location?",
      });
    }

    if (message.toLowerCase().includes("price")) {
      const productName = message.split("price of")[1]?.trim(); // Extract product name
      if (!productName) {
        return res.json({ response: "Please specify the product you're asking about." });
      }

      const product = await Product.findOne({ where: { name: productName } });

      if (product) {
        return res.json({
          response: `The price of ${product.name} is $${product.price}.`,
        });
      } else {
        return res.json({
          response: `Sorry, we couldn't find any product named "${productName}". Please check the product name and try again.`,
        });
      }
    }

    if (message.toLowerCase().includes("branch")) {
      const location = await Location.findOne();
      if (location) {
        return res.json({
          response: `Our branch is located at ${location.address}. Contact us at ${location.contact_number}, and our working hours are ${location.working_hours}.`,
        });
      } else {
        return res.json({
          response: "Sorry, we couldn't find any branch information at the moment.",
        });
      }
    }

    if (message.toLowerCase().includes("hours") || message.toLowerCase().includes("business hours")) {
      const faq = await FAQ.findOne({ where: { question: "business hours" } });
      return res.json({
        response: faq ? faq.answer : "Sorry, we couldn't find business hours information.",
      });
    }

    if (message.toLowerCase().includes("return") || message.toLowerCase().includes("return policy")) {
      const faq = await FAQ.findOne({ where: { question: "return policy" } });
      return res.json({
        response: faq ? faq.answer : "Sorry, we couldn't find return policy information.",
      });
    }

    if (message.toLowerCase().includes("support") || message.toLowerCase().includes("support contact")) {
      const faq = await FAQ.findOne({ where: { question: "support contact" } });
      return res.json({
        response: faq ? faq.answer : "Sorry, we couldn't find support contact information.",
      });
    }

    
    res.json({
      response: "I couldn't understand that. Please try asking something about the price, business hours, return policy, support contact, or our branch location.",
    });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};
