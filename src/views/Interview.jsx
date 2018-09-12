// import UserInfo from '@/components/UserInfo';
import EditableSpan from '../components/EditableSpan';
import InterviewAppContainer from '../layout/interview/InterviewAppContainer';
import CounterRow from '../layout/interview/CounterRow';
import ContentRow from '../layout/interview/ContentRow';
import ScaleSelectionBar from '../components/molecule/ScaleSelectionBar';
import Counter from '../service/Counter';


export default {
  name: 'Interview',
  data() {
    return {
      hour: 1,
      min: 2,
      sec: 5,
      username: 'Adam',
      newColor: 'orange',
    };
  },
  // beforeMount() {
  //   console.log('Timer beforeMount');
  // },
  mounted() {
    console.log('Timer mounted');
    this.counter = new Counter();
  },
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
    onStartClick(/* event */) {
      // console.log(event);
      this.sec = 999 + this.sec;
      this.newColor = 'red';
    },
    onContentChange: (/* event */) => {
      // console.log(event.target.textContent);
    },
  },
  render() {
    return (
      <InterviewAppContainer>
        <CounterRow>
          <h1>
            <EditableSpan change={this.onContentChange}>{this.hour}</EditableSpan>
            :<EditableSpan change={this.onContentChange}>{this.min}</EditableSpan>
            :<EditableSpan change={this.onContentChange}>{this.sec}</EditableSpan>
          </h1>
          <button onClick={this.onStartClick}>Start</button>
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
