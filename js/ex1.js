const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The letter E"
    }
  ];
  
  window.addEventListener("load", () => {
    //Find Content Div in body
    const contentDiv = document.getElementById("content");
    
    //intiailize question count var for loop
    let questionCount = 1;
    
    //Run loop to create question (label and statement), button, and event listener for answer
    questions.forEach(question => {
      //Create question
      const questionText = document.createElement("p");
      questionText.innerHTML = `<strong>Question ${questionCount}:</strong> <i>${question.statement}</i> <br>`;
      questionCount += 1;
  
      //Create button
      const showAnswerButton = document.createElement("button");
      showAnswerButton.textContent = "Show answer";
  
      // Event listener to show the answer
      showAnswerButton.addEventListener("click", () => {
        // Remove the button
        questionText.removeChild(showAnswerButton);
  
        // Add the answer text
        const answerDiv = document.createElement("div");
        answerDiv.textContent = question.answer;
  
        // Append the answer to the question text
        questionText.appendChild(answerDiv);
      });
  
      // Append the question and button to the content div
      questionText.appendChild(showAnswerButton);
      contentDiv.appendChild(questionText);
    });
  });