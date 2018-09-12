import EditableSpan from '../EditableSpan';

export default {
  name: 'CounterPanel',
  props: {
    onContentChange: {
      type: Function,
      default: () => {},
    },
    startClick: {
      type: Function,
      default: () => {},
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
        <h1>
          <EditableSpan change={this.onContentChange}>{this.hour}</EditableSpan>
          :<EditableSpan change={this.onContentChange}>{this.min}</EditableSpan>
          :<EditableSpan change={this.onContentChange}>{this.sec}</EditableSpan>
        </h1>
        <button onClick={this.startClick}>Start</button>
      </section>
    );
  },
};

