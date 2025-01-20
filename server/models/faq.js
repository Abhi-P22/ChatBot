module.exports = (sequelize, DataTypes) => {
    const FAQ = sequelize.define("FAQ", {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
    });
    return FAQ;
  };
  