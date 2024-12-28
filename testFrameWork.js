const isEqual = (a, b) => a === b;

const areEqual = (a, b) => {
  if (!Array.isArray(a)) return isEqual(a, b);
  if (a.length !== b.length) return false;

  return a.every((value, index) => areEqual(value, b[index]));
};

const sortResultsByStatus = (results) => {
  const sorted = [];
  results.map((result) =>
    isEqual(result.status, "passed")
      ? sorted.push(result)
      : sorted.unshift(result)
  );

  console.table(sorted);
};

export const testSuite = (Fn, ...testCases) => {
  const results = testCases.map((testCase) => {
    const { description, params, expected } = { ...testCase };
    const actual = Fn(...params);
    const status = areEqual(actual, expected) ? "passed" : "failed";

    return { status, description, params, expected, actual };
  });

  return sortResultsByStatus(results);
};
