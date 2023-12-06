// Import the Expense model schema
const ExpenseSchema = require("../models/ExpenseModel")

// Controller to add a new expense
exports.addExpense = async (req, res) => {
    // Destructure the required fields from the request body
    const {title, amount, category, description, date} = req.body

    // Create a new expense document using the Expense model
    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        // Check if all the required fields are provided
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required!'})
        }

        // Check if the amount is a positive number
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be positive!'})
        }

        // Save the new expense document to the database
        await income.save()

        // Respond with success message if save is successful
        res.status(200).json({message: 'Expense Added!'})
    } catch (error) {
        // If an error occurs, respond with a server error message
        res.status(500).json({message: 'Server Error!'})
    }

    // Log the new expense to the console (for debugging)
    console.log(income)
}

// Controller to retrieve all expenses
exports.getExpenses = async (req, res) => {
    try {
        // Find all expenses and sort them by the createdAt field in descending order
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})

        // Respond with the list of expenses
        res.status(200).json(incomes)
    } catch (error) {
        // If an error occurs, respond with a server error message
        res.status(500).json({message: 'Server Error'})
    }
}

// Controller to delete an expense by ID
exports.deleteExpense = async (req, res) => {
    // Extract the ID from request parameters
    const {id} = req.params;

    // Find the expense by ID and delete it
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            // Respond with a success message if deletion is successful
            res.status(200).json({message: 'Expense Deleted!'})
        })
        .catch((err) => {
            // If an error occurs during deletion, respond with a server error message
            res.status(500).json({message: 'Server Error!'})
        })
}