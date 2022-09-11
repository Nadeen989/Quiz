import axios from "axios";
import { useState } from "react";
import "./App.css";
import Hed from "./Hed";
import { BrowserRouter ,Route ,Switch } from "react-router-dom"
import Footer from "./Footer";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";






function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState(); 
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/exzam.webp")' }}>
        <Hed />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact>
            <Result name={name} score={score} />
          </Route>
        </Switch> 
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;