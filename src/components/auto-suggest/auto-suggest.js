// @flow

/**
 * Get suggestion from static array-type data source.
 */
function getSuggestions(dataSource: Object, value: string) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : dataSource.filter((suggestion) => {
      const keep =
        count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

/**
 * Specifies how to get the value from dataSource.
 */
function getSuggestionValue(suggestion: Object) {
  return suggestion.label;
}

export { getSuggestions, getSuggestionValue };
