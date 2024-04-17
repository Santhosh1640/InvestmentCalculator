import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Logs from "./components/Logs"
import { useState } from "react";
function App() {

  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    //...prevUserInput => Spreading old user input object into new object
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue, //here + changes string value to number
        }
    })
}
  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      <Logs input={userInput}></Logs>
    </>
  )
}

export default App
