describe('functions', () => {
  describe('deepWay', () => {
      it('should show deepest way', () => {
          expect(deepWay(island1)).to.equal(2);
      });
  });
  describe('noCoincidence', () => {
      it('should show no coincidence', () => {
          expect(noСoincidence(island1, island2)).to.equal(1);
      });
  });
})    