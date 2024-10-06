function checkAnswer(questionNumber) {
    let answer = document.getElementById('answer' + questionNumber).value.toLowerCase();
    let feedback = document.getElementById('feedback' + questionNumber);
    if (questionNumber === 1 && answer === 'beach') {
        feedback.innerHTML = "Correct! Our favorite place!";
    } else if (questionNumber === 2 && answer === 'john') {
        feedback.innerHTML = "Yes! John always makes us laugh!";
    } else {
        feedback.innerHTML = "Try again!";
    }
}
