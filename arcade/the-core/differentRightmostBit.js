function differentRightmostBit(n, m) {
	return (function() {
		let nBinaryStrReversed = n.toString(2).split("").reverse().join("");
		let mBinaryStrReversed = m.toString(2).split("").reverse().join("");
		
		if (nBinaryStrReversed.length > mBinaryStrReversed.length) {
		  mBinaryStrReversed += "0".repeat(nBinaryStrReversed.length - mBinaryStrReversed.length);
		}
		
		if (mBinaryStrReversed.length > nBinaryStrReversed.length) {
		  nBinaryStrReversed += "0".repeat(mBinaryStrReversed.length - nBinaryStrReversed.length);
		}
		
		for (i = 0; i < Math.max(nBinaryStrReversed.length, mBinaryStrReversed.length); i++) {
		  if (nBinaryStrReversed[i] !== mBinaryStrReversed[i]) {
			return 2 ** i;
		  }
		}
	})();
}
