export default {
  // data() {
  //   return {
  //     username: '',
  //   };
  // },
  name: 'EditableSpan',
  props: {
    change: {
      type: Function,
      required: true,
    },
  },
  render() {
    return (
      <span
        contentEditable
        onInput={this.change}
        style={`
          font-size: 32px;
        `}>
        {this.$slots.default}
      </span>
    );
  },
};

