/**
* Removes all elements from the array.
*
* @function Array#clear
*
* @example
* var array = [1, 2, 3];
* array.clear();
* console.log(array);
* // -> []
*/
var clearArray = $.clear = function(array) {
  array.length = 0;
  return array;
};
