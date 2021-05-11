class Card {
  constructor(id, question, possAnswers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.possAnswers = possAnswers;
    this.correctAnswer = correctAnswer;
  }
}


module.exports = Card;
