import UserInfo from '@/components/UserInfo';

export default {
  name: 'Timer',
  data() {
    return {
      sec: 5,
      username: 'Adam',
    };
  },
  beforeMount() {
    console.log('Timer beforeMount');
  },
  mounted() {
    console.log('Timer mounted');
  },
  beforeCreate() {
    console.log('Timer beforeCreate');
  },
  created() {
    console.log('Timer created');
  },
  beforeUpdate() {
    console.log('Timer beforeUpdate');
  },
  updated() {
    console.log('Timer updated');
  },
  activated() {
    console.log('Timer activated');
  },
  deactivated() {
    console.log('Timer deactivated');
  },
  beforeDestory() {
    console.log('Timer beforeDestory');
  },
  destoryed() {
    console.log('Timer destoryed');
  },
  errorCaptured() {
    console.log('Timer errorCaptured');
  },


  render() {
    return (
      <div>
        <h1>0:00:{this.sec}</h1>
        <h2>Hello! {this.username}</h2>
        <UserInfo username={this.username} />
      </div>
    );
  },
};
