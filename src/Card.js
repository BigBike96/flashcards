class Card {
  constructor(id, question, possAnswers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = possAnswers;
    this.correctAnswer = correctAnswer;
  }
}


module.exports = Card;
