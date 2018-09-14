import isNan from 'lodash/isNaN';
import InterviewAppContainer from '@/layout/interview/InterviewAppContainer';
import CounterRow from '@/layout/interview/CounterRow';
import ContentRow from '@/layout/interview/ContentRow';
import ScaleSelectionBar from '@/components/molecule/ScaleSelectionBar';
import Counter from '@/service/Counter';
import CounterPanel2 from '@/components/organism/CounterPanel2';
import getTimeFromSec from '@/service/getTimeFromSec';
import InterviewBank from '../service/InterviewBank';


export default {
  name: 'Interview',
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      username: 'Adam',
      newColor: 'orange',
      bank: [],
    };
  },
  watch: {
    '$route' (to, from, next) {
      console.log('beforeRouteUpdate');
      if (this.counter) {
        this.counter.reset();
        next();
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    this.counter.reset();
    console.log('beforeRouteLeave');
    return next();
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    return next();
  },
  beforeRouteUpdate() {
    console.log('beforeRouteUpdate');
  },
  beforeMount() {
    console.log('Timer beforeMount');
    this.bank = InterviewBank.FrontEndEngineer;
  },
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
  beforeDestory() {
    console.log('Timer beforeDestory');
    if (this.counter) {
      this.counter.reset();
    }
  },
  // destoryed() {
  //   console.log('Timer destoryed');
  // },
  // errorCaptured() {
  //   console.log('Timer errorCaptured');
  // },
  methods: {
    startClick(event) {
      console.log(event);
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

      const { name, textContent, value } = e.target;
      if (textContent) {
        let targetName = name;
        if (e.synthetic && e.synthetic.name) {
          targetName = e.synthetic.name;
        }
        this[targetName] = this.ensureItsNumber(textContent);
        console.log(this[targetName]);
      } else if (value) {
        this[name] = this.ensureItsNumber(value);
      }
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
    ensureItsNumber(value) {
      const val = parseInt(value, 10);
      console.log(val);
      console.log(isNan(val));
      return isNan(val) ? 0 : val;
    },
    grade(score) {

    }
  },

  render() {
    return (
      <InterviewAppContainer>
        <CounterRow>
          <CounterPanel2
            startClick={this.startClick}
            whenContentChange={this.whenChange}
            hour={this.ensureItsNumber(this.hours)}
            min={this.ensureItsNumber(this.minutes)}
            sec={this.ensureItsNumber(this.seconds)}
          />
        </CounterRow>
        {/* <ContentRow>
          <ScaleSelectionBar
            left="Easier"
            right="Harder"
            name="Difficulty"
            onClickLeft={() => {}}
            onClickRight={() => {}}
          />
        </ContentRow>
        <ContentRow>
          <ScaleSelectionBar
            left="Failed"
            right="Passed"
            name="Grade"
            onClickLeft={() => {}}
            onClickRight={() => {}}
          />
        </ContentRow> */}
        <ContentRow flow="row">
          <section style="flex:1;">One</section>
          <section style="flex:1;">Two</section>
        </ContentRow>
      </InterviewAppContainer>
    );
  },
};
