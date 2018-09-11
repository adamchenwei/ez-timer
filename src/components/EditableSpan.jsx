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
      <span contentEditable onInput={this.change}>
        {this.$slots.default}
      </span>
    );
  },
};
