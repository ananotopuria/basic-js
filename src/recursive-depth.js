const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    
    let maxDepth = depth;
    
    for (let item of arr) {
      if (Array.isArray(item)) {
        const itemDepth = this.calculateDepth(item, depth + 1);
        maxDepth = Math.max(maxDepth, itemDepth);
      }
    }
    
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
