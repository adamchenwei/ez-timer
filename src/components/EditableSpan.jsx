export default {
  name: 'EditableSpan',
  props: {
    change: {
      type: Function,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <span
        contentEditable
        onInput={(event) => {
          const newEvent = event;
          newEvent.synthetic = {
            name: this.name,
          };
          this.change(newEvent);
        }}
        style={`
          font-size: 32px;
        `}>
        {this.$slots.default}
      </span>
    );
  },
};

