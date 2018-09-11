export default {
  name: 'UserInfo',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <div>
        <p>User Name: {this.username}</p>
      </div>
    );
  },
};
