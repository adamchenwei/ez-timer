export default {
  name: 'CounterInput',
  props: {
    whenContentChange: {
      type: Function,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
  },
  render() {
    return (
      <input name={this.name} value={this.value} onChange={this.whenContentChange}></input>
    );
  },
};

