function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let carry = 0
	const dummyHead = new ListNode()
	let current = dummyHead

	while (l1 || l2 || carry) {
		let sum = (l1?.val || 0) + (l2?.val || 0) + carry

		if (sum > 9) {
			sum = sum % 10
			carry = 1
		} else {
			carry = 0
		}
		current.next = new ListNode(sum)
		current = current?.next

		l1 = l1?.next || null
		l2 = l2?.next || null
	}
	return dummyHead.next
}
