function restartForm() {
    /**
     * Restats the whole choice aid
     * by emptying givenAnswers and the questionPath
     * Resets curretQuestionIndex and the progressbar
     * removes explanation
     * creates buttons
     */
    currentQuestionIndex = 0;
    givenAnswers = [];
    questionPath = [];
    restartProgressBar();
    document.getElementById("explanationDiv").innerHTML = "";
    document.getElementById("more").innerHTML = "";
    createStartButton();
}

module.exports = restartForm