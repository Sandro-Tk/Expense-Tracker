import { createContext, useContext, useEffect, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import { categories as defaultCategories } from "../constants/constants";

export const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const { transactions } = useContext(TransactionContext);

    const [monthlyBudget, setMonthlyBudget] = useState(() => {
        const savedBudget = localStorage.getItem("monthlyBudget");
        return savedBudget ? Number(savedBudget) : 0;
    });

    const [monthlySavings, setMonthlySavings] = useState(() => {
        const savedSavings = localStorage.getItem("monthlySavings");
        return savedSavings ? Number(savedSavings) : 0;
    });

    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem("categories");
        if (savedCategories) return JSON.parse(savedCategories);

        return defaultCategories.map((name) => ({
            name,
            budget: 0,
            spent: 0,
        }));
    });

    useEffect(() => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const updatedCategories = defaultCategories.map((name) => {
            const existingCategory = categories.find(
                (category) => category.name === name
            );
            const spent = transactions
                .filter((transaction) => {
                    const transactionDate = new Date(transaction.date);
                    return (
                        transaction.category === name &&
                        transaction.amount < 0 &&
                        transactionDate.getMonth() === currentMonth &&
                        transactionDate.getFullYear() === currentYear
                    );
                })
                .reduce(
                    (sum, transaction) => sum + Math.abs(transaction.amount),
                    0
                );

            return { name, budget: existingCategory.budget || 0, spent };
        });

        setCategories(updatedCategories);
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem("monthlyBudget", monthlyBudget);
    }, [monthlyBudget]);

    useEffect(() => {
        localStorage.setItem("monthlySavings", monthlySavings);
    }, [monthlySavings]);

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);

    const updateCategoryBudget = (categoryName, budget) => {
        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.name === categoryName
                    ? { ...category, budget: Number(budget) }
                    : category
            )
        );
    };

    const updateMonthlyBudget = (budget) => {
        setMonthlyBudget(Number(budget));
    };

    const updateMonthlySavings = (savings) => {
        setMonthlySavings(Number(savings));
    };

    return (
        <BudgetContext.Provider
            value={{
                monthlyBudget,
                monthlySavings,
                categories,
                updateCategoryBudget,
                updateMonthlyBudget,
                updateMonthlySavings,
                setCategories,
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}

export default BudgetProvider;
