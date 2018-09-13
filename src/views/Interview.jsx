import InterviewAppContainer from '../layout/interview/InterviewAppContainer';
import CounterRow from '../layout/interview/CounterRow';
import ContentRow from '../layout/interview/ContentRow';
import ScaleSelectionBar from '../components/molecule/ScaleSelectionBar';
import Counter from '../service/Counter';
import CounterPanel from '../components/organism/CounterPanel';
import getTimeFromSec from '../service/getTimeFromSec';


export default {
  name: 'Interview',
  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
      username: 'Adam',
      newColor: 'orange',
    };
  },
  // beforeMount() {
  //   console.log('Timer beforeMount');
  // },
  // mounted() {
  //   console.log('Timer mounted');
  // },
  // beforeCreate() {
  //   console.log('Timer beforeCreate');
  // },
  // created() {
  //   console.log('Timer created');
  // },
  // beforeUpdate() {
  //   console.log('Timer beforeUpdate');
  // },
  // updated() {
  //   console.log('Timer updated');
  // },
  // activated() {
  //   console.log('Timer activated');
  // },
  // deactivated() {
  //   console.log('Timer deactivated');
  // },
  // beforeDestory() {
  //   console.log('Timer beforeDestory');
  // },
  // destoryed() {
  //   console.log('Timer destoryed');
  // },
  // errorCaptured() {
  //   console.log('Timer errorCaptured');
  // },
  methods: {
    startClick(event) {
      console.log(event);
      // this.sec = 999 + this.sec;
      // this.newColor = 'red';
      if (this.counter) {
        this.counter.reset();
      }
      this.counter = new Counter(null, this.tickCallback);
      this.counter.setEndTime({
        sec: this.sec,
        min: this.min,
        hour: this.hour,
      });
      this.counter.startCountDown();
    },
    onTimeChange: (event) => {
      console.log('a');
      console.log(event.target.textContent);
    },
    // setVal(event) {
    //   console.log(event);
    //   const { name, textContent } = event.target;
    //   this[name] = textContent;
    // },

    tickCallback(data) {
      console.log(data);
      const time = getTimeFromSec();
      this.hour = time.hour;
      this.min = time.minute;
      this.sec = time.second;
      console.log(`${this.hour} ${this.min} ${this.sec}`);
      // this.setVal(name, value);
    },
  },
  render() {
    return (
      <InterviewAppContainer>
        <CounterRow>
          <CounterPanel
            onContentChange={this.onTimeChange}
            startClick={this.startClick}
            hour={this.hour}
            min={this.min}
            sec={this.sec}
          />
        </CounterRow>
        <ContentRow>
          <ScaleSelectionBar
            left="Easier"
            right="Harder"
            name="Difficulty"
          />
        </ContentRow>
        <ContentRow>
          <ScaleSelectionBar
            left="Failed"
            right="Passed"
            name="Grade"
          />
        </ContentRow>
        <ContentRow flow="row">
          <section style="flex:1;">One</section>
          <section style="flex:1;">Two</section>
        </ContentRow>
      </InterviewAppContainer>
    );
  },
};
