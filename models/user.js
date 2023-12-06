// Import necessary modules from Sequelize and bcrypt
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Import the Sequelize instance from the connection configuration
const sequelize = require('../config/connection');

// Define the User model, extending the Sequelize Model class
class User extends Model {
  // Method to check the provided password against the stored hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initialize the User model with defined attributes and options
User.init(
  {
    // Define the 'id' attribute with specific data types and constraints
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the 'name' attribute with a string data type and non-null constraint
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the 'email' attribute with a string data type, unique constraint, and email validation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Define the 'password' attribute with a string data type, non-null constraint, and length validation
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // Define hooks to hash the password before creating and updating user data
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    // Specify the Sequelize instance, disable timestamps, and freeze the table name
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // Use underscored naming for model and table names
    underscored: true,
    // Set the model name to 'user'
    modelName: 'user',
  }
);

// Export the User model for use in other files
module.exports = User;
