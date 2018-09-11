
export default {
  name: 'InterviewAppContainer',
  render() {
    return (
      <section
        style={`
          display: flex;
          flex-direction: column;
        `}>
        {this.$slots.default}
      </section>
    );
  },
};

