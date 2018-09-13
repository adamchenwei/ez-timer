import EditableSpan from '../EditableSpan';

export default {
  name: 'CounterPanel',
  props: {

    startClick: {
      type: Function,
      default: () => {},
    },
    whenContentChange: {
      type: Function,
      required: true,
    },
    hour: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    sec: {
      type: Number,
      default: 0,
    },
  },
  render() {
    return (
      <section>
        <p>
          <EditableSpan name="hours" change={this.whenContentChange}>{this.hour}</EditableSpan>  hr
          :<EditableSpan name="minutes" change={this.whenContentChange}>{this.min}</EditableSpan> min
          :<EditableSpan name="seconds" change={this.whenContentChange}>{this.sec}</EditableSpan> sec
        </p>
        <button onClick={this.startClick}>Start</button>
      </section>
    );
  },
};

