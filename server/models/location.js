module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("Location", {
      branch_name: DataTypes.STRING,
      address: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      working_hours: DataTypes.STRING,
    });
    return Location;
  };
  