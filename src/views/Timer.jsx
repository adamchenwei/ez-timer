import UserInfo from '@/components/UserInfo';

export default {
  data() {
    return {
      sec: 5,
      username: 'My Name',
    };
  },
  render(h) {
    return (
      <div>
        <h1>0:00:{this.sec}</h1>
        <h2>{this.username}</h2>
        <UserInfo />
      </div>
    );
  },
};
