class Questions {
    #id;
    #question;
    #category;
    #difficulty;

    constructor() {
        this.#id = qcm.id;
        this.#question = question;
        this.#category = category;
        this.#difficulty = difficulty;
    }

    get id() {
        return this.#id;
    }

    get question() {
        return this.#question;
    }

    get category() {
        return this.#category;
    }

    get difficulty() {
        return this.#difficulty;
    }

    ToJSON(key) {
        console.log(key);
        return {id: this.#id, question: this.#question};
    }
}

module.exports = Questions;