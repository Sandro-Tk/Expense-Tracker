import {
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    Legend,
} from "recharts";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding: 10px 100px;
`;

const StyledToday = styled.div`
    min-width: 300px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
`;

const StyledExpenses = styled.div`
    min-width: 300px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
`;

const IncomeExpenses = styled.div`
    grid-column: 1 / -1;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
`;

const todayTransactions = [
    { id: 1, description: "Groceries", amount: 50 },
    { id: 2, description: "Coffee", amount: 5 },
    { id: 3, description: "Gas", amount: 30 },
];

const categoryData = [
    { name: "Food", value: 400 },
    { name: "Rent", value: 1000 },
    { name: "Entertainment", value: 200 },
    { name: "Utilities", value: 300 },
    { name: "Transportation", value: 150 },
];

const incomeExpenseData = [
    { date: "May 1", income: 2000, expense: 1500 },
    { date: "May 5", income: 1800, expense: 1200 },
    { date: "May 10", income: 2200, expense: 1700 },
    { date: "May 15", income: 2500, expense: 2000 },
    { date: "May 20", income: 2400, expense: 1900 },
    { date: "May 25", income: 2600, expense: 2100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

function Analytics() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Analytics</h1>
            <StyledContainer>
                <StyledToday>
                    <h2>Today's Transactions</h2>
                    <ul>
                        {todayTransactions.map((transaction) => (
                            <li key={transaction.id}>
                                {transaction.description}: ${transaction.amount}
                            </li>
                        ))}
                    </ul>
                </StyledToday>

                <StyledExpenses>
                    <h2>Expenses by Category</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {categoryData.map((entry, index) => (
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

                <IncomeExpenses>
                    <h2>Income vs Expenses</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={incomeExpenseData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="income"
                                stroke="#82ca9d"
                                fill="#82ca9d"
                            />
                            <Area
                                type="monotone"
                                dataKey="expense"
                                stroke="#8884d8"
                                fill="#8884d8"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </IncomeExpenses>
            </StyledContainer>
        </div>
    );
}

export default Analytics;
