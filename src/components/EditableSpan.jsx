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
    console.log(this);
    return (
      <span contentEditable onInput={this.change}>
        {this.$slots.default}
      </span>
    );
  },
};
