/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "In BPSK modulation, the phase of the carrier signal is shifted by how many degrees to represent binary '1' and '0'?",  ///// Write the question inside double quotes
      answers: {
        a: " 90°",                  ///// Write the option 1 inside double quotes
        b: "180°",                  ///// Write the option 2 inside double quotes
        c: "45°",                  ///// Write the option 3 inside double quotes
        d: "270°"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "What is the main advantage of BPSK over ASK (Amplitude Shift Keying)?",  ///// Write the question inside double quotes
      answers: {
        a: "Higher data rate",                  ///// Write the option 1 inside double quotes
        b: "Lower bandwidth requirement",                  ///// Write the option 2 inside double quotes
        c: "Better noise immunity",                  ///// Write the option 3 inside double quotes
        d: "Simpler implementation"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    {
      question: "In a BPSK demodulator, the received signal is multiplied by which of the following to retrieve the original data?",  ///// Write the question inside double quotes
      answers: {
        a: "A cosine wave of different frequency",                  ///// Write the option 1 inside double quotes
        b: "A sine wave of the same frequency and phase",                  ///// Write the option 2 inside double quotes
        c: "The original carrier signal",                  ///// Write the option 3 inside double quotes
        d: "A square wave"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "What is the bit error rate (BER) performance of BPSK in an AWGN channel compared to QPSK, assuming the same energy per bit?",  ///// Write the question inside double quotes
      answers: {
        a: "Worse than QPSK",                  ///// Write the option 1 inside double quotes
        b: "Same as QPSK",                  ///// Write the option 2 inside double quotes
        c: "Better than QPSK",                  ///// Write the option 3 inside double quotes
        d: "Depends on modulation index"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
    
    {
      question: "What happens to the BPSK signal in the presence of a 180° phase shift due to channel noise?",  ///// Write the question inside double quotes
      answers: {
        a: "It becomes stronger",                  ///// Write the option 1 inside double quotes
        b: "It is inverted, causing a bit error",                  ///// Write the option 2 inside double quotes
        c: "No effect occurs",                  ///// Write the option 3 inside double quotes
        d: "It doubles in amplitude"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }
    ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////