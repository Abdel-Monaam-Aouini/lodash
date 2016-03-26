define(['./_arrayMap', './_baseCastKey', './_baseDifference', './_baseFlatten', './_basePick', './_getAllKeysIn', './rest'], function(arrayMap, baseCastKey, baseDifference, baseFlatten, basePick, getAllKeysIn, rest) {

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable string keyed properties of `object` that are
   * not omitted.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [props] The property identifiers to omit,
   *  specified individually or in arrays.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = rest(function(object, props) {
    if (object == null) {
      return {};
    }
    props = arrayMap(baseFlatten(props, 1), baseCastKey);
    return basePick(object, baseDifference(getAllKeysIn(object), props));
  });

  return omit;
});
