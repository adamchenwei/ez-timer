export default class Counter {
  constructor(config = {}, perSecCallback = () => {}) {
    this.confg = config;
    this.perSecCallback = perSecCallback;
    this.init(this.confg);
  }

  init(/* config */) {
    this.timer = {
      start: 0,
      end: 0,
      repeatMax: 1,
      instance: null,
    };
    this.todayDate = new Date();
  }

  // setStartDateTime(timestamp) {
  //   this.timer.start = timestamp || Date.now();
  // }

  setEndTime(time) {
    const {
      hour,
      min,
      sec,
    } = time;
    const totalTime = (sec + (min * 60) + (hour * 3600)) * 1000;
    this.timer.end = this.timer.start + totalTime;
  }

  reset() {
    if (this.timer.instance) {
      this.timer.instance.clearInterval(this.timer.instance);
    } else {
      console.log('nothing to reset');
    }
  }
  startCountDown() {
    this.timer.instance = setInterval(() => {
      console.log('tick');
      this.countDown();
      this.perSecCallback(this.timer);
    }, 1000);
  }
  countDown() {
    this.timer.start -= 1000;
  }
  // endCountDown() {
  // }
}
