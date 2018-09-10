export default {
  // data() {
  //   return {
  //     username: '',
  //   };
  // },
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
