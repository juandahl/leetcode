import twoSum from '../../src/two-sum';

describe("test twoSum function", () => {
  it("should return 0 and 1", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0, 1]);
  });

  it("should return 1 and 2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should return 0 and 1", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
