function isPalindrome_Clear(x: number): boolean {
	if (x < 0) return false
	let s = x.toString()
	const l = s.length - 1
	let i = 0
	while (i < l / 2) {
		if (s.charAt(i) !== s.charAt(l - i)) return false
		i++
	}
	return true
}
