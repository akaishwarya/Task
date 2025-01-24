import React from 'react'
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const questions = [
    {
      id: 'q1',
      question: 'Which planet is known as the Red Planet?',
      options: [
        { id: 'o1', option: 'Earth' },
        { id: 'o2', option: 'Mars' },
        { id: 'o3', option: 'Venus' },
        { id: 'o4', option: 'Jupiter' },
      ],
    },
    {
        id: 'q2',
        question: 'What is the capital city of Australia?',
        options: [
            { id: 'o1', option: 'Sydney' },
            { id: 'o2', option: 'Melbourne' },
            { id: 'o3', option: 'Canberra' },
            { id: 'o4', option: 'Brisbane' },
        ],
    },
    {
        id: 'q3',
        question: 'Which is the largest ocean on Earth?',
        options: [
            { id: 'o1', option: 'Atlantic Ocean' },
            { id: 'o2', option: 'Indian Ocean' },
            { id: 'o3', option: 'Arctic Ocean' },
            { id: 'o4', option: 'Pacific Ocean' },
        ],
    },
    {
        id: 'q4',
        question: 'What is the square root of 144?',
        options: [
            { id: 'o1', option: '10' },
            { id: 'o2', option: '12' },
            { id: 'o3', option: '14' },
            { id: 'o4', option: '16' },
        ],
    },
    {
        id: 'q5',
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: [
            { id: 'o1', option: 'China' },
            { id: 'o2', option: 'Brazil' },
            { id: 'o3', option: 'United Kingdom' },
            { id: 'o4', option: 'Russia' },
        ],
    },
    {
        id: 'q6',
        question: 'What is the hardest natural substance on Earth?',
        options: [
            { id: 'o1', option: 'Gold' },
            { id: 'o2', option: 'Iron' },
            { id: 'o3', option: 'Diamond' },
            { id: 'o4', option: 'Platinum' },
        ],
    },
    {
        id: 'q7',
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            { id: 'o1', option: 'Charles Dickens' },
            { id: 'o2', option: 'William Shakespeare' },
            { id: 'o3', option: 'Leo Tolstoy' },
            { id: 'o4', option: 'Mark Twain' },
        ],
    },
    {
        id: 'q8',
        question: 'What is the chemical symbol for water?',
        options: [
            { id: 'o1', option: 'H2O' },
            { id: 'o2', option: 'CO2' },
            { id: 'o3', option: 'O2' },
            { id: 'o4', option: 'HO' },
        ],
    },
    {
        id: 'q9',
        question: "Which animal is known as the 'King of the Jungle'?",
        options: [
            { id: 'o1', option: 'Elephant' },
            { id: 'o2', option: 'Tiger' },
            { id: 'o3', option: 'Lion' },
            { id: 'o4', option: 'Cheetah' },
        ],
    },
    {
        id: 'q10',
        question: 'In which year did the Titanic sink?',
        options: [
            { id: 'o1', option: '1910' },
            { id: 'o2', option: '1912' },
            { id: 'o3', option: '1914' },
            { id: 'o4', option: '1920' },
        ],
    },
    {
        id: 'q11',
        question: 'What is the smallest prime number?',
        options: [
            { id: 'o1', option: '1' },
            { id: 'o2', option: '2' },
            { id: 'o3', option: '3' },
            { id: 'o4', option: '5' },
        ],
    },
    {
        id: 'q12',
        question: 'Which planet is the closest to the Sun?',
        options: [
            { id: 'o1', option: 'Venus' },
            { id: 'o2', option: 'Mercury' },
            { id: 'o3', option: 'Earth' },
            { id: 'o4', option: 'Mars' },
        ],
    },
    {
        id: 'q13',
        question: 'In what year did World War II end?',
        options: [
            { id: 'o1', option: '1943' },
            { id: 'o2', option: '1945' },
            { id: 'o3', option: '1947' },
            { id: 'o4', option: '1950' },
        ],
    },
    {
        id: 'q14',
        question: 'What is the capital of Japan?',
        options: [
            { id: 'o1', option: 'Beijing' },
            { id: 'o2', option: 'Seoul' },
            { id: 'o3', option: 'Tokyo' },
            { id: 'o4', option: 'Kyoto' },
        ],
    },
    {
        id: 'q15',
        question: "Which element has the chemical symbol 'O'?",
        options: [
            { id: 'o1', option: 'Oxygen' },
            { id: 'o2', option: 'Osmium' },
            { id: 'o3', option: 'Ozone' },
            { id: 'o4', option: 'Oxide' },
        ],
    },
    {
        id: 'q16',
        question: 'How many sides does a hexagon have?',
        options: [
            { id: 'o1', option: '4' },
            { id: 'o2', option: '5' },
            { id: 'o3', option: '6' },
            { id: 'o4', option: '8' },
        ],
    },
    {
        id: 'q17',
        question: 'Which is the longest river in the world?',
        options: [
            { id: 'o1', option: 'Amazon' },
            { id: 'o2', option: 'Nile' },
            { id: 'o3', option: 'Yangtze' },
            { id: 'o4', option: 'Mississippi' },
        ],
    },
    {
        id: 'q18',
        question: 'What is the hardest known mineral?',
        options: [
            { id: 'o1', option: 'Quartz' },
            { id: 'o2', option: 'Diamond' },
            { id: 'o3', option: 'Corundum' },
            { id: 'o4', option: 'Topaz' },
        ],
    },
    {
        id: 'q19',
        question: "Who is known as the 'Father of Computers'?",
        options: [
            { id: 'o1', option: 'Alan Turing' },
            { id: 'o2', option: 'Charles Babbage' },
            { id: 'o3', option: 'John von Neumann' },
            { id: 'o4', option: 'Thomas Edison' },
        ],
    },
    {
        id: 'q20',
        question: 'Which organ in the human body is primarily responsible for detoxification?',
        options: [
            { id: 'o1', option: 'Liver' },
            { id: 'o2', option: 'Kidney' },
            { id: 'o3', option: 'Lungs' },
            { id: 'o4', option: 'Heart' },
        ],
    },
  


];



export const Question = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(0); // Timer state
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const navigate = useNavigate();
  
    useEffect(() => {
      // Start timer
      const timerInterval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(timerInterval);
    }, []);
  
    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    const handleSubmit = () => {
      // Submit functionality
      alert('Exam Submitted');
      navigate('/Task/result');
      
    };
  
    const handleAnswer = (questionId) => {
      setAnsweredQuestions(new Set(answeredQuestions.add(questionId)));
       // Move to the next question automatically
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
    };
  
    const percentageAnswered = (answeredQuestions.size / questions.length) * 100;
    const isSubmitEnabled = percentageAnswered >= 50;
  
  return (
    <div className=' flex justify-center md:mt-10 mt-2'>

<div className="p-6">

      <div className=" gap-4 mb-6 flex flex-col md:flex-row md:flex-nowrap">
        {/* Overview Box */}
         <div className="w-full md:flex-[20] bg-white px-3 py-2">
          <h1 className="md:text-xl text-lg font-bold my-3">Overview</h1>
          <hr className='text-gray-300 mt-4'/>
          <div className="mt-5 flex gap-3 flex-wrap">

            {Array.from({ length: 20 }, (_, idx) => (
              <span
                key={idx + 1}
                className={`w-7 h-7 text-center rounded-full border text-gray-500 border-gray-200 cursor-pointer  ${
                  answeredQuestions.has(`q${idx + 1}`) ? 'bg-orange-400' : 'bg-white'
                }`}
              >
                {idx + 1}
              </span>
            ))}
          </div>
        </div> 

        {/* Question Box */}
       <div className='bg-white w-full md:flex-[75] md:h-120  px-3'>

        <div>
            <div className='flex justify-between text-lg font-semibold mb-2 mt-4'>
                    <div>
                    <span>
                        MCA: <span className='text-orange-400'> Q{currentQuestionIndex + 1} </span>
                        </span>
                    </div>
                    <div>
                    <span className="text-sm text-gray-500">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</span>
                    </div>
            </div>
        
  
  {/* Display question */}
   <p className="mb-4">{questions[currentQuestionIndex].question}</p>
  
  {/* Display options */}
   <div className="space-y-2">
    {questions[currentQuestionIndex].options.map((option, index) => (
      <button
        key={option.id}
        className="w-full p-2  rounded-md  hover:bg-gray-100 flex items-center"
        onClick={() => handleAnswer(questions[currentQuestionIndex].id, option.id)} // Assuming passing the selected option's ID
      > 
        {/* Display option label (A, B, C, D) */}
        <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
        {option.option}
      </button>
    ))}
  </div>
</div> 


        {/* Navigation Buttons */}
        <div className='md:mt-28 mb-4'>
        <hr className='text-gray-300 my-5'/>
        <div className="flex  justify-between items-center">

        <button className={`md:px-4 px-2 md:py-2 py-1 text-sm md-text-lg bg-gray-800 text-white rounded-full cursor-pointer ${!isSubmitEnabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleSubmit} disabled={!isSubmitEnabled}>
          End and Submit
        </button>

       <div className='md:gap-4 gap-2 flex'> 

        <button className="md:px-4 px-2 md-py-2 py-1 bg-gray-300 text-sm md-text-lg text-gray-800 rounded-full cursor-pointer"  onClick={handlePrevious} disabled={currentQuestionIndex === 0} >
       Previous  </button>

          <button className="md:px-4 px-2 md-py-2 py-1 bg-gray-300 text-sm md-text-lg text-gray-800 rounded-full cursor-pointer"  onClick={handleNext}  disabled={currentQuestionIndex === questions.length - 1}>
          Next  </button>

          </div>

      </div>
        </div>
        
     </div> 

      </div>
       
    </div>
    </div>

  )
}
