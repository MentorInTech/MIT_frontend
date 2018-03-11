/**
 * Copyright (c) 2018， Silicon Valley Career Women.
 * All rights reserved.
 */

/**
 * Using AutoSuggest
 *
 * AutoSuggest relies on a prop called `dataSource` to perform search and suggest.
 * This prop can be either a `Function` or a `Array of data`.
 *
 * == Array ==
 * If you provide an array, it has to be an array of Object literals with key `label`.
 * For example:
 *    const data = [
 *      { label: 'Seattle' },
 *      { label: 'San Francisco' },
 *      { label: 'Chicago' },
 *    ];
 *
 *    // ...
 *
 *    <AutoSuggest dataSource={data} />
 *
 * In this case, AutoSuggest will simply search from the static list provided.
 *
 *
 * == Function ==
 * If you provide a Function, AutoSuggest will expect it to return a Promise
 * that resolves to a list of data. This is useful when you want AutoSuggest
 * to pick recommendation from a web service (see GeoSuggest in user-info
 * for example).
 *
 * Your dataSource function will also need to accept a parameter - this is the textual
 * value that user typed into the AutoSuggest textfield.
 *
 * For example:
 *   const suggestCities = (userInput) => {
 *     return new Promise((resolve, reject) => {
 *       $.get(
 *           'https://my-api.end.point/cities/' + userInput,
 *           function handler(results) {
 *             results.map(result => ({ label: result }));
 *             resolve(results);
 *           }
 *       );
 *     }
 *   }
 *
 *   // ...
 *
 *   <AutoSuggest dataSource={suggestCities} />
 */

import AutoSuggest from './AutoSuggest';

export default AutoSuggest;
