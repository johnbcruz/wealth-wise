// Import the Mongoose library allowing us to use schema
const mongoose = require('mongoose');

// Define a new Mongoose schema for incomes
const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,     // This field is required
        trim: true,         // Trim whitespace from the value
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "income"   // The default value for 'type' is "income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
}, {timestamps: true})       // Option to automatically add createdAt and updatedAt timestamps to the schema

// Export the model allowing it to be available to import to other files
// The model is names 'Income' and will use the 'IncomeSchema'
module.exports = mongoose.model('Income', IncomeSchema)