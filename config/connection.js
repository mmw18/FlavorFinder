// Import the Sequelize library
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Initialize a Sequelize instance
let sequelize;

// Check if a JawsDB URL is available (for production)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Create a Sequelize instance with local database configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,      // Database name
    process.env.DB_USER,      // Database user
    process.env.DB_PASSWORD,  // Database password
    {
      host: 'localhost',      // Database host
      dialect: 'mysql',       // Specify MySQL as the database dialect
      port: 3306              // Database port
    }
  );
}

// Export the Sequelize instance for use in other files
module.exports = sequelize;
