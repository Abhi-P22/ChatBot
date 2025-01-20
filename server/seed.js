const db = require("./models");

async function seedDatabase() {
  try {
    // Sync database
    await db.sequelize.sync({ force: true }); // Drops existing tables and recreates them

    // Insert sample data for Products
    await db.Product.bulkCreate([
      { name: "Laptop", price: 799.99, category: "Electronics", availability: true },
      { name: "Smartphone", price: 699.99, category: "Electronics", availability: true },
      { name: "Desk Chair", price: 129.99, category: "Furniture", availability: true },
      { name: "Headphones", price: 49.99, category: "Accessories", availability: false },
    ]);

    // Insert sample data for Locations
    await db.Location.create({
      branch_name: "Downtown Branch",
      address: "123 Main Street, Downtown",
      contact_number: "123-456-7890",
      working_hours: "9 AM - 8 PM",
    });

    // Insert sample data for FAQs
    await db.FAQ.bulkCreate([
      { question: "business hours", answer: "Our business hours are 9 AM to 8 PM every day." },
      { question: "return policy", answer: "You can return products within 30 days of purchase." },
      { question: "support contact", answer: "For support, call us at 123-456-7890." },
    ]);

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
