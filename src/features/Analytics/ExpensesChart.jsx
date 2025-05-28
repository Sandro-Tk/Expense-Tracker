import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import styled from "styled-components";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF6384",
    "#FF7F50",
    "#A28BFF",
];

const StyledExpenses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    background: var(--color-2);
    padding: 20px;
    border-radius: var(--border-radius);
`;

const StyledHeader = styled.h3`
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-medium);
    color: var(--color-4);
`;

function ExpensesChart() {
    const { transactions } = useContext(TransactionContext);

    const chartData = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => {
            const category = transaction.category;
            const existingCategory = acc.find((item) => item.name === category);

            if (existingCategory) {
                existingCategory.value += Math.abs(transaction.amount);
            } else {
                acc.push({
                    name: category,
                    value: Math.abs(transaction.amount),
                });
            }

            return acc;
        }, []);

    return (
        <StyledExpenses>
            <StyledHeader>Expenses by Category</StyledHeader>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {transactions.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        verticalAlign="middle"
                        align="right"
                        width="30%"
                        layout="vertical"
                        iconSize={15}
                        iconType="circle"
                    />
                </PieChart>
            </ResponsiveContainer>
        </StyledExpenses>
    );
}

export default ExpensesChart;
