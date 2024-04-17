import { calculateInvestmentResults } from '../util/investment.js';

export default function Logs({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;

                    return <tr key = {yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.valueEndOfYear}</td>
                        <td>{yearData.interest}</td>
                        <td>{totalInterest}</td>
                        <td>{yearData.annualInvestment}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}