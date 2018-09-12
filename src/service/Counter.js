export default class Counter {
  constructor(config = {}, perSecCallback = () => {}) {
    this.confg = config;
    this.init(this.confg);
  }

  init(config) {
    this.timer = {
      start: 0,
      end: 0,
      repeatMax: 1,
    };
  }

  startCountDown() {
    this.timer[0].instance = setInterval(() => {
      console.log('1');
      this.countDown();
      this.perSecCallback(this.timer);
    }, 1000);
  }

  countDown() {

  }
  endCountDown() {

  }


}