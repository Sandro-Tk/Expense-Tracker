import { useContext } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import styled from "styled-components";
import { TransactionContext } from "../../context/TransactionContext";

const StyledCashFlow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1 / -1;
    background: var(--color-2);
    padding: 20px;
    border-radius: var(--border-radius);
`;

const StyledHeader = styled.h3`
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-medium);
    color: var(--color-4);
`;

function CashFlow() {
    const { transactions } = useContext(TransactionContext);

    const chartData = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        const existingDate = acc.find((item) => item.date === date);

        if (existingDate) {
            if (transaction.amount >= 0) {
                existingDate.income += transaction.amount;
            } else {
                existingDate.expense += Math.abs(transaction.amount);
            }
        } else {
            acc.push({
                date,
                income: transaction.amount >= 0 ? transaction.amount : 0,
                expense:
                    transaction.amount < 0 ? Math.abs(transaction.amount) : 0,
            });
        }

        return acc;
    }, []);

    chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <StyledCashFlow>
            <StyledHeader>Cash Flow</StyledHeader>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="var(--color-positive)"
                        fill="var(--color-positive)"
                    />
                    <Area
                        type="monotone"
                        dataKey="expense"
                        stroke="var(--color-negative)"
                        fill="var(--color-negative)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </StyledCashFlow>
    );
}

export default CashFlow;
