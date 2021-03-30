export default Array.prototype.rotate = (function () {
	const push = Array.prototype.push,
		splice = Array.prototype.splice;

	return function (count) {
		const len = this.length >>> 0;
		count = count >> 0;

		// convert count to value in range [0, len)
		count = ((count % len) + len) % len;

		// use splice.call() instead of this.splice() to make function generic
		push.apply(this, splice.call(this, 0, count));
		return this;
	};
})();