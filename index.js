/**
 * Hex => RGB Cache
 */

var h2rs = {};

/**
 * Default `colors.json`
 */

var colors = require('./colors.json');

/**
 * Export `color`
 */

module.exports = color;

/**
 * Get a color from a hex value
 *
 * @param {String} hex
 * @param {Object} color_map
 * @return {String} color
 * @api public
 */

function color(hex, color_map) {
  color_map = color_map || colors;
  var rgb = h2r(hex);
  var min = Infinity;
  var closest = null;

  for (var color in color_map) {
    var rgb2 = h2r(color_map[color])

    // distance formula
    var dist = Math.pow((rgb.r - rgb2.r) * .299, 2)
      + Math.pow((rgb.g - rgb2.g) * .587, 2)
      + Math.pow((rgb.b - rgb2.b) * .114, 2);

    if (dist <= min) {
      closest = color;
      min = dist;
    }
  }

  return closest;
}

/**
 * Hex to RGB
 *
 * @param {String} hex
 * @return {Object} rbg
 */

function h2r(hex) {
  hex = '#' == hex[0] ? hex.slice(1) : hex;
  if (h2rs[hex]) return h2rs[hex];
  var int = parseInt(hex, 16);
  var r = (int >> 16) & 255;
  var g = (int >> 8) & 255;
  var b = int & 255;
  return h2rs[hex] = { r: r, g: g, b: b };
}
