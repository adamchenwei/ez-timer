export default {
  data() {
    return {
      isRed: true,
    };
  },
  render(h) {
    return (
      <div class={{ 'is-red': this.isRed }}>
        <p>Example Text</p>
      </div>
    );
  },
};
