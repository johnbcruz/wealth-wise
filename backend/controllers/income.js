// Import the Income model schema
const IncomeSchema = require("../models/IncomeModel")

// Controller to add a new income entry
exports.addIncome = async (req, res) => {
    // Destructure the required fields from the request body
    const {title, amount, category, description, date} = req.body

    // Create a new income document using the Expense model
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        // Check if all the required fields are provided
        if (!title || !category || !description || !date) {
            // If any field is missing, return a 400 Bad Request error with a message
            return res.status(400).json({message: 'All fields are required!'})
        }

        // Check if the amount is a positive number
        if (amount <= 0 || !amount === 'number') {
            // If amount is not valid, return a 400 Bad Request error with a message
            return res.status(400).json({message: 'Amount must be positive!'})
        }

        // Save the new income document to the database
        await income.save()

        // Respond with a 200 OK status and a success message if the save is successful
        res.status(200).json({message: 'Income Added!'})
    } catch (error) {
        // If an error occurs, return a 500 Internal Server Error with a message
        res.status(500).json({message: 'Server Error!'})
    }

    // Output the saved income document to the console for debugging
    console.log(income)
}

// Controller to get all income entries
exports.getIncomes = async (req, res) => {
    try {
        // Retrieve all income documents from the database and sort them by the createdAt field in descending order
        const incomes = await IncomeSchema.find().sort({createdAt: -1})

        // Respond with a 200 OK status and the list of income documents
        res.status(200).json(incomes)
    } catch (error) {
        // If an error occurs, return a 500 Internal Server Error with a message
        res.status(500).json({message: 'Server Error'})
    }
}

// Controller to delete an income entry by its ID
exports.deleteIncome = async (req, res) => {
    // Extract the ID from the request parameters
    const {id} = req.params;
    
    // Find the income document by its ID and delete it
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            // Respond with a 200 OK status and a success message if the deletion is successful
            res.status(200).json({message: 'Income Deleted!'})
        })
        .catch((err) => {
            // If an error occurs during deletion, return a 500 Internal Server Error with a message
            res.status(500).json({message: 'Server Error!'})
        })
}