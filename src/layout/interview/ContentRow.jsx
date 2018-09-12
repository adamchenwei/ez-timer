import theme from '../config/theme';

export default {
  name: 'ContentRow',
  props: {
    flow: {
      default: 'column',
      type: String,
    },
  },
  render() {
    return (
      <section
        style={`
          border-color: ${theme.border.color};
          border-width: 1px;
          border-style: solid;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: ${this.flow};
          padding: 16px;
          margin-bottom: 16px;
        `}>
        {this.$slots.default}
      </section>
    );
  },
};

