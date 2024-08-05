import React, { useState } from 'react';
import './Medquiz.css';

const Medquiz = () => {
    const [startQuiz, setStartQuiz] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questions] = useState([
        {
            numb: 1,
            question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
            options: [
                "Not at all",
                "Several days",
                "More than half the days",
                "Nearly every day"
            ]
        },
        {
            numb: 2,
            question: "Have you experienced a loss of interest or pleasure in activities that you used to enjoy?",
            options: [
                "Not at all",
                "Several days",
                "More than half the days",
                "Nearly every day"
            ]
        },
        {
            numb: 3,
            question: "How would you rate changes in your appetite or weight recently?",
            options: [
                "Not at all",
                "Several days",
                "More than half the days",
                "Nearly every day"
            ]
        },
        {
            numb: 4,
            question: "Have you had trouble sleeping, such as difficulty falling asleep, staying asleep, or sleeping too much??",
            options: [
                "Not at all",
                "Several days",
                "More than half the days",
                "Nearly every day"
            ]
        },
        {
            numb: 5,
            question: "How often have you felt unusually tired or lacking in energy, even after rest?",
            options: [
                "Not at all",
                "Several days",
                "More than half the days",
                "Nearly every day"
            ]
        },
        // Add more questions here...
    ]);
    const [userScore, setUserScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);

    const startQuizHandler = () => {
        setStartQuiz(true);
    };

    const showRulesHandler = () => {
        setShowRules(true);
    };

    const continueQuizHandler = () => {
        setShowRules(false);
        setShowQuestions(true);
    };

    const optionSelected = (index) => {
        const selectedOption = index;
        const correctOption = questions[questionIndex].options.indexOf("Nearly every day");
        if (selectedOption === correctOption) {
            setUserScore(userScore + 1);
        }
        setShowNextButton(true); // Set showNextButton to true when an option is selected
    };
    
    const nextQuestionHandler = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setShowNextButton(false); // Hide the next button when moving to the next question
        } else {
            setShowQuestions(false);
            setShowResult(true);
        }
    };

    const exitHandler = () => {
        window.location.reload();
    };

    return (
        <div>
            {!startQuiz && (
                <div className="start_btn">
                    <button onClick={startQuizHandler}>Start Quiz</button>
                </div>
            )}

            {startQuiz && !showRules && (
                <div className="info_box activeInfo">
                    <div className="info-title"><span>Some Rules of this Quiz</span></div>
                    <div className="info-list">
                        <div className="info">1.  You will be 5 given question </div>
                        <div className="info">2. Once you select your answer, it can't be undone.</div>
                        <div className="info">3. You can't exit from the Quiz once started.</div>
                        <div className="info">4. After completion You'll get report of this test in your mail</div>
                    </div>
                    <div className="buttons">
                        <button className="quit" onClick={() => setStartQuiz(false)}>Exit Quiz</button>
                        <button className="restart" onClick={continueQuizHandler}>Continue</button>
                    </div>
                </div>
            )}
            
            {showQuestions && (
                <div className="quiz_box activeQuiz">
                    <header>
                        <div className="title">MedQuiz</div>
                    </header>
                    <section>
                        <div className="que_text">{questions[questionIndex].numb}. {questions[questionIndex].question}</div>
                        <div className="option_list">
                            {questions[questionIndex].options.map((option, index) => (
                                <div className="option" key={index} onClick={() => optionSelected(index)}>{option}</div>
                            ))}
                        </div>
                    </section>
                    <footer>
                        <div className="total_que">{questionIndex + 1} of {questions.length} Questions</div>
                    </footer>
                    <div className='next'>
                    {showNextButton && (
                        <button className="next_btn" onClick={nextQuestionHandler}>Next</button>
                    )}
                    </div>
                </div>
            )}

            {showResult && (
                <div className="result_box activeResult">
                    <div className="complete_text">Your Response has been Submitted<br/><br/>The Report will be generated soon!!</div>
                    <div className="buttons">
                        <button className="quit" onClick={exitHandler}>Exit</button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Medquiz;
