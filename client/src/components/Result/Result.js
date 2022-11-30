import React from "react"
import "./result.css"
const Result = ({type}) => {
  return (
    <div className="result1">
      <h1>Based On the Performance of Test</h1>
      <h2>Our Pridiction is</h2>
      <h1>{type}</h1>
      <p>
        This personality type tends to prefer working in groups, especially in
        roles where they care for the well-being of others. Good careers for
        those with the ESFJ personality type are social worker, nurse or
        healthcare worker, sales representative, or in public relations.
      </p>
    </div>
  )
}

export default Result
