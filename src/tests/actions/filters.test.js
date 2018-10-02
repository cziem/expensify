import '../../actions/filters'

test('Type to be setTextFilter', () => {
  expect(setTextFilter.type).toBe("SET_TEXT_FILTER");
})