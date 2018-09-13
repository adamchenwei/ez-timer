export default class AnswerProgressTracker {
  constructor(questionsIdList = []) {
    this.list = questionsIdList;
    this.dict = {};
    this.currentId = 0;
    this.list.forEach((item) => {
      this.dict[item.id] = {
        score: 0,
      };
    });
  }

  getCurrentId() {
    return this.currentId;
  }

  setCurrentId(id) {
    this.currentId = id;
  }

  getList() {
    return this.list;
  }

  getDict() {
    return this.dict;
  }
}
