export default {
  name: 'ScaleSelectionBar',
  props: {
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
        <button>{this.left}</button>
        <span>{this.name}</span>
        <button>{this.right}</button>
      </div>
    );
  },
};

