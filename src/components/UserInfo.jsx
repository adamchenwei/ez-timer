export default {
  name: 'UserInfo',
  props: {
    username: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <div>
        <p style={`
          color: ${this.textColor}
        `}>User Name: {this.username}</p>
      </div>
    );
  },
};
