import React from "react"
import "./App.css"
import Header from "../components/Header"
import Location from "../components/Location"
import data from "./data"

function App() {

  const locations = data.map(location => {
      return (
        <Location 
          {...location}
        />  
      )
  })

  return (
    <div>
        <Header />
        {locations}
    </div>
  )
}

export default App