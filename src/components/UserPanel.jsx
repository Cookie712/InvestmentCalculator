const UserPanel = ({ handleInput, data }) => {
    return (
        <main id="user-input">
            <div className="input-group">
                <label>
                    Initial investment
                    <input
                        type="number"
                        onChange={e =>
                            handleInput('initialInvestment', e.target.value)
                        }
                        value={data.initialInvestment}
                    ></input>
                </label>

                <label>
                    Anuall investment
                    <input
                        type="number"
                        onChange={e =>
                            handleInput('annualInvestment', e.target.value)
                        }
                        value={data.annualInvestment}
                    ></input>
                </label>

                <label>
                    Expected return
                    <input
                        type="number"
                        onChange={e =>
                            handleInput('expectedReturn', e.target.value)
                        }
                        value={data.expectedReturn}
                    ></input>
                </label>

                <label>
                    Duration
                    <input
                        type="number"
                        onChange={e => handleInput('duration', e.target.value)}
                        value={data.duration}
                    ></input>
                </label>
            </div>
        </main>
    )
}

export default UserPanel
