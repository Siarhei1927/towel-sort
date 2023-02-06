
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return !!matrix && matrix.length ? matrix.reduce((result, item, idx) => idx % 2 === 0 ? [...result, ...item] : [...result, ...item.reverse()]) : [];
}
