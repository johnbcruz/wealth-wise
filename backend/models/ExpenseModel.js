// Import the Mongoose library to provide schema validation
const mongoose = require('mongoose');

// Defining a new Mongoose schema for expenses
const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,     // Make this field mandatory
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
        default: "expense"  // The default value for 'type' is "expense"
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
}, {timestamps: true})     // Option to automatically add createdAt and updatedAt timestamps to the schema

// Export the model, making it available for import in other files
// The model is named 'Expense' and will use the 'ExpenseSchema'
module.exports = mongoose.model('Expense', ExpenseSchema)