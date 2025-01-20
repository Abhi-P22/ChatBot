module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      category: DataTypes.STRING,
      availability: DataTypes.BOOLEAN,
    });
    return Product;
  };
  