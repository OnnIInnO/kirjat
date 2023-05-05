import React, { useState } from "react";

function ActualTest() {

  const [showResults, setShowResults] = useState (false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Mitä näistä haluat eniten olevan seuraavassa kirjassasi?",
      options: [
        { id: 0, text: "Jännitystä", isCorrect: false },
        { id: 1, text: "Romantiikkaa", isCorrect: false },
        { id: 2, text: "Mielenkiintoisia teemoja ja ajatuksia", isCorrect: false },
        { id: 3, text: "Huumoria", isCorrect: true },
      ],
    },
    {
      text: "Mitä näistä et voi sietää kirjassa?",
      options: [
        { id: 0, text: "Hidasta juonta", isCorrect: true },
        { id: 1, text: "Hahmoja, jotka eivät ollenkaan kehity kirjan aikana", isCorrect: false },
        { id: 2, text: "Kauhua", isCorrect: false },
        { id: 3, text: "Epäloogisuutta", isCorrect: false },
      ],
    },
    {
      text: "Minkä päähenkilön tarinaa haluat tällä kertaa seurata?",
      options: [
        { id: 0, text: "Lapsen", isCorrect: true },
        { id: 1, text: "Nuoren", isCorrect: false },
        { id: 2, text: "Aikuisen", isCorrect: false },
        { id: 3, text: "Haluan lukea elämänkerran lapsuudesta vanhuuteen", isCorrect: false },
      ],
    },
    {
      text: "Minkä pituisen kirjan haluaisit?",
      options: [
        { id: 0, text: "Lyhyen", isCorrect: false },
        { id: 1, text: "Pitkän", isCorrect: true },
        { id: 2, text: "Erittäin pitkän!", isCorrect: false },
        { id: 3, text: "Pituudella ei ole väliä", isCorrect: false },
      ],
    },
    {
      text: "Valitse vielä väri tähän loppuun.",
      options: [
        { id: 0, text: "Vihreä", isCorrect: false },
        { id: 1, text: "Sininen", isCorrect: true },
        { id: 2, text: "Musta", isCorrect: true },
        { id: 3, text: "Punainen", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
    
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  }

  let result = '';
    if (score === 0) {
      result = '"Taru sormusten herrasta" -fantasiakirjasarja J.R.R. Tolkienilta';
    } else if (score === 1) {
      result = '"Da Vinci -koodi" -jännitysromaani Dan Brownilta';
    } else if (score === 2) {
      result = '"Ylpeys ja ennakkoluulo" -romanttinen klassikkoromaani Jane Austenilta';
    } else if (score === 3) {
      result = '"Seinäruusu" -komediallinen dekkari Jonas Jonassonilta';
    } else if (score === 4) {
      result = '"Sofian maailma" -filosofinen romaani Jostein Gaarderilta';
    } else if (score === 5) {
      result = '"Hyperion" scifi-kirja Dan Simmonsilta';
    }

  return (
    <div className="ActualTest">
      <h1>Tee testi ja saa kirjasuositus!</h1>

      { showResults ? (
        <div className='final-results'>
          <h1>Tässä sinulle kirjasuositus. Hyviä lukuhetkiä!</h1>
          <h2>
            {result}
          </h2>
          <button onClick={() => restartGame()}>Aloita testi uudestaan</button>
        </div>
      ):(
        <div className='question-card'>
        <h2 className='title-text'>Kysymys {currentQuestion + 1}/{questions.length}</h2>
        <h3 className='question-text'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActualTest;
