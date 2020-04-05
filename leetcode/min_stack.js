/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.list = [];
  this.min = Number.MAX_SAFE_INTEGER;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  if (x <= this.min) {
    this.list.push(this.min);
    this.min = x;
  }

  this.list.push(x);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  if (this.list.pop() == this.min) {
    this.min = this.list.pop();
  }

};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.list[this.list.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

var obj = new MinStack()
obj.push(0);
obj.push(1);
obj.push(0);
// obj.pop()

console.log(obj.getMin());
obj.pop();
console.log(obj.getMin());
