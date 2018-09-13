export default {
  name: 'ScaleSelectionBar',
  props: {
    onClickLeft: {
      type: Function,
      required: true,
    },
    onClickRight: {
      type: Function,
      required: true,
    },
    left: {
      type: String,
      required: true,
    },
    right: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <div style={`
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 16px;
      `}>
        <button onClick={this.onClickLeft}>{this.left}</button>
        <span>{this.name}</span>
        <button onClick={this.onClickRight}>{this.right}</button>
      </div>
    );
  },
};

