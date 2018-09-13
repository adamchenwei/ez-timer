import InterviewAppContainer from '@/layout/interview/InterviewAppContainer';
import CounterRow from '@/layout/interview/CounterRow';
import ContentRow from '@/layout/interview/ContentRow';
import ScaleSelectionBar from '@/components/molecule/ScaleSelectionBar';
import Counter from '@/service/Counter';
import CounterPanel from '@/components/organism/CounterPanel';
import getTimeFromSec from '@/service/getTimeFromSec';


export default {
  name: 'Interview',
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
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
      // this.seconds = 999 + this.seconds;
      // this.newColor = 'red';
      if (this.counter) {
        this.counter.reset();
      }
      this.counter = new Counter(null, this.tickCallback);
      this.counter.setEndTime({
        seconds: parseInt(this.seconds || 0, 10),
        minutes: parseInt(this.minutes || 0, 10),
        hours: parseInt(this.hours || 0, 10),
      });
      this.counter.startCountDown();
    },
    // onTimeChange: (event) => {
    //   console.log('a');
    //   console.log(event.target.textContent);
    // },
    // setVal(event) {
    //   console.log(event);
    //   const { name, textContent } = event.target;
    //   this[name] = textContent;
    // },

    whenChange(e) {
      if (this.counter) {
        this.counter.reset();
      }
      console.log(e);

      const { name, textContent } = e.target;
      let targetName = name;
      if (e.synthetic && e.synthetic.name) {
        targetName = e.synthetic.name;
      }
      this[targetName] = textContent;
    },

    tickCallback(data) {
      console.log(data);
      const time = getTimeFromSec(data.durationInSec);
      this.hours = time.hours;
      this.minutes = time.minutes;
      this.seconds = time.seconds;
      console.log(`${this.hours} ${this.minutes} ${this.seconds}`);
      // this.setVal(name, value);
    },
  },
  render() {
    return (
      <InterviewAppContainer>
        <CounterRow>
          <CounterPanel
            startClick={this.startClick}
            whenContentChange={this.whenChange}
            hour={parseInt(this.hours, 10)}
            min={parseInt(this.minutes, 10)}
            sec={parseInt(this.seconds, 10)}
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
