import { useState } from 'react'
import Header from './components/Header'
import UserPanel from './components/UserPanel'
import Result from './components/Result'

function App() {
    const [userData, setUserData] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const handleUserInput = (identifier, value) => {
        setUserData(prevUserData => {
            const updatedUserData = { ...prevUserData }
            return {
                ...updatedUserData,
                [identifier]: +value
            }
        })
    }

    userData.duration < 1
        ? window.alert('Please enter a proper duration')
        : null
    return (
        <>
            <Header />
            <UserPanel handleInput={handleUserInput} data={userData} />
            {userData.duration > 0 && <Result dataObject={userData} />}
        </>
    )
}

export default App
