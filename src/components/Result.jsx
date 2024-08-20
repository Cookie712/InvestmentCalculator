import { calculateInvestmentResults, formatter } from '../util/investment.js'

const Result = ({ dataObject }) => {
    const calculatedData = calculateInvestmentResults(dataObject)
    const initialInvestment =
        calculatedData[0].valueEndOfYear -
        calculatedData[0].interest -
        calculatedData[0].annualInvestment

    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment value</th>
                        <th>Interest</th>
                        <th>Total interest</th>
                        <th>Invested capital</th>
                    </tr>
                </thead>
                <tbody>
                    {calculatedData.map(yearData => {
                        const totalInterest =
                            yearData.valueEndOfYear -
                            yearData.annualInvestment * yearData.year -
                            initialInvestment

                        const totalAmountInvested =
                            yearData.valueEndOfYear - totalInterest

                        return (
                            <tr key={yearData.year}>
                                <td>{formatter.format(yearData.year)}</td>
                                <td>
                                    {formatter.format(yearData.valueEndOfYear)}
                                </td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Result
