import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./style.css";

function Home() {

  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);


  async function analyze() {

    if (!query) {
      alert("Please enter patient query");
      return;
    }


    const response = await fetch(
      "http://127.0.0.1:8000/analyze",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          query: query
        })
      }
    );


    const data = await response.json();

    setResult(data);

  }



  return (

    <div className="container">

      <h1>🩺 HealthFlow AI</h1>

      <h2>
        AI Healthcare Workflow Assistant
      </h2>


      <Link to="/dashboard">

        <button>
          📊 View Dashboard
        </button>

      </Link>


      <br/><br/>


      <textarea

        rows="6"

        cols="50"

        placeholder="Enter patient problem..."

        value={query}

        onChange={
          (e)=>setQuery(e.target.value)
        }

      />


      <br/><br/>


      <button onClick={analyze}>

        Analyze Query

      </button>



      {
        result && (

          <div>

            <h2>
              AI Analysis Result
            </h2>


            <p>
              📝 Query:
              {result.query}
            </p>


            <p>
              📌 Category:
              {result.category}
            </p>


            <p>
              ⚠️ Priority:
              {result.priority}
            </p>


            <p>
              🏥 Department:
              {result.department}
            </p>


          </div>

        )
      }


    </div>

  );

}





function App() {


  return (

    <Routes>


      <Route

        path="/"

        element={<Home/>}

      />


      <Route

        path="/dashboard"

        element={<Dashboard/>}

      />


    </Routes>

  );

}


export default App;