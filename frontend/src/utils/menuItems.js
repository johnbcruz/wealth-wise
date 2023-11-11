import { dashboard, expenses, transactions, trend } from '../utils/Icons'

// Menu configuration for the application navigation
export const menuItems = [
  { id: 1, title: "Dashboard", icon: dashboard, link: '/dashboard' }, // Dashboard item
  { id: 2, title: "Transactions", icon: transactions, link: '/dashboard' }, // Transaction item
  { id: 3, title: "Income", icon: trend, link: '/dashboard' }, // Income item
  { id: 4, title: "Expense", icon: expenses, link: '/dashboard' }, // Expense item
];
