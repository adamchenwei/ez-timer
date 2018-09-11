import theme from '../config/theme';

export default {
  name: 'ContentRow',
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
          flex-flow: column;
          padding: 16px;
        `}>
        {this.$slots.default}
      </section>
    );
  },
};

