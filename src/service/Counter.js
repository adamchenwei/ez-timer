export default class Counter {
  constructor(config = {}, perSecCallback = () => {}) {
    this.confg = config;
    this.perSecCallback = perSecCallback;
    this.init(this.confg);
  }

  init(/* config */) {
    this.timer = {
      repeatMax: 1,
      instance: null,
      durationInSec: 0,
    };
    this.todayDate = new Date();
  }

  setEndTime(time) {
    const {
      hours,
      minutes,
      seconds,
    } = time;
    const totalTime = (seconds + (minutes * 60) + (hours * 3600));
    if (!totalTime) console.warn('totalTime is NOT a number');
    this.timer.durationInSec = totalTime;
  }

  get() {
    return this.timer;
  }
  
  reset() {
    if (this.timer.instance) {
      clearInterval(this.timer.instance);
      this.timer.durationInSec = 0;
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
    this.timer.durationInSec -= 1;
    if (!this.timer.durationInSec || this.timer.durationInSec < 0) this.reset();
  }
  // endCountDown() {
  // }
}
