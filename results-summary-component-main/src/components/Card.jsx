import data from "../data/data.json";
import "./Card.css"; 

function SummaryItem({ category, icon, score, className }) {
  return (
    <div className={`summary-item ${className}`}>
      <div className="category-info">
        <img src={icon} alt={category} aria-hidden="true" />
        <span className="category-name">{category}</span>
      </div>
      <div className="score">
        <span className="actual-score">{score}</span>
        <span className="total-score"> / 100</span>
      </div>
    </div>
  );
}


export default function ResultSummaryCard() {
  // Calcular el promedio
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const averageScore = Math.round(totalScore / data.length);
  
  // Determinar el mensaje basado en el puntaje
  const getResultMessage = (score) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Great";
    if (score >= 70) return "Good";
    if (score >= 60) return "Average";
    return "Below Average";
  };

  return (
    <div className="result-summary-card">
      {/* Sección de resultados */}
      <div className="result-section">
        <h2 className="result-title">Your Result</h2>
        <div className="score-circle">
          <span className="main-score">{averageScore}</span>
          <span className="total">of 100</span>
        </div>
        <h3 className="result-message">{getResultMessage(averageScore)}</h3>
        <p className="result-description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      {/* Sección de resumen */}
      <div className="summary-section">
        <h2 className="summary-title">Summary</h2>
        
        <div className="summary-items">
          {data.map((item) => (
            <SummaryItem
              key={item.category}
              category={item.category}
              icon={item.icon}
              score={item.score}
              className={`category-${item.category.toLowerCase()}`}
            />
          ))}
        </div>
        
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}