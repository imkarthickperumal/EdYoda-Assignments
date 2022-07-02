$(function () {
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (res) {
    console.log(res);
    let finalApires = res;
    let questionWrap = "";
    for (let i = 0; i < res.length; i++) {
      questionWrap += `<div class="Question-wrapper"> <h2 class="quiz-question"> Q${
        i + 1 + ". " + res[i].question
      }<h2>`;
      questionWrap += `<div class="options-wrapper">`;
      for (let j = 0; j < res[i].options.length; j++) {
        questionWrap += `<div class="option">
                  <label class="labels"><input type="radio" name="${res[i].id}"  value="${res[i].options[j]}">${res[i].options[j]}</label>
              </div>`;
      }
      questionWrap += `</div></div>`;
    }
    let submitwrapper = $(
      `<input type="submit" id='form-submit'> <button type="reset" class="resetBtn" id="resetBtn">Submit</button>`
    );

    $("#quizApp div").html(questionWrap);
    $("#quizApp").append(submitwrapper);
    let scoreWrap = $(".score-div");
    let scorelabel = $("<div>");
    scorelabel.text("Score :");
    scorelabel.addClass("scorelabel");

    let score = $("<p>");
    score.text("O/5");
    score.addClass("marks");

    scoreWrap.append(scorelabel, score);
    $("#form-submit").click(function (e) {
      e.preventDefault();
      let finalScore = 0;
      let getAnswer = $("#quizApp div input[type=radio]:checked");
      console.log(getAnswer);
      if (finalApires) {
        for (let i = 0; i < getAnswer.length; i++) {
          let options = finalApires[getAnswer[i].name - 1]["options"];
          console.log(options);
          if (
            finalApires[getAnswer[i].name - 1]["answer"] ==
            options.indexOf(getAnswer[i].value) + 1
          ) {
            finalScore++;
          }
        }
        score.text(`${finalScore + "/" + finalApires.length}`);
        $("#resetBtn").click();
      }
    });
  });
});
