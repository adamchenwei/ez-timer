import UserInfo from '@/components/UserInfo';

export default {
  data() {
    return {
      sec: 5,
      username: 'Adam',
    };
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
