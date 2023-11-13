const form = document.querySelector(".quizForm")
const correctAnswer = ["A", "A", "A","A","A"]
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question")

form.addEventListener("submit", event => {
    event.preventDefault();

    let score = 0;

    //gets answer to each question.
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
  

    //counts answers and adds score up.
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]){
            score = score + 1;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }

    });
    console.log(score);

    //scrolls to top and shows the final score at the top.
    scrollTo(0,0);
    result.classList.remove("hide");

    //querySelector will grab the first instance of "p" in the class, querySelectorAll will grab all references.
    //textContent will then grab the text content in that div and allow me to assign it's value to whatever I want it to be.
    //So then I can update it based off the score.

    //throw a template literal in there and...
    result.querySelector("p").textContent = `You scored ${score}/5!`;

});

