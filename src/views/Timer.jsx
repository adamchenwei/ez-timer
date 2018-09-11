import UserInfo from '@/components/UserInfo';
import EditableSpan from '../components/EditableSpan';


export default {
  name: 'Timer',
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
    onClicker(/* event */) {
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
      <div>
      {/* {this.hour} */}
        <h1>
          <EditableSpan change={this.onContentChange}>{this.hour}</EditableSpan>
          :<EditableSpan change={this.onContentChange}>{this.min}</EditableSpan>
          :<EditableSpan change={this.onContentChange}>{this.sec}</EditableSpan>
        </h1>
        <input type="time"></input>
        <UserInfo username={this.username} textColor={this.newColor}/>
        <button onClick={this.onClicker}>Play</button>
      </div>
    );
  },
};
