import CounterInput from '../atoms/CounterInput';

export default {
  name: 'CounterPanel2',
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
      <section style={`
        border-color: ${(!this.hour && !this.min && !this.sec ? 'orange' : 'transparent')};
        border-size: 1px;
        border-style: solid;
      `}>
        <p>
          <CounterInput name="hours" value={this.hour} whenContentChange={this.whenContentChange}/>
            hr
          :<CounterInput name="minutes" value={this.min} whenContentChange={this.whenContentChange}/> min
          :<CounterInput name="seconds" value={this.sec} whenContentChange={this.whenContentChange}/> sec
        </p>
        <button onClick={this.startClick}>Start</button>
      </section>
    );
  },
};

