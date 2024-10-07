/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
function addTwoNumbers_Clear(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let carry = 0
	const dummyHead = new ListNode()
	let current = dummyHead

	while (l1 || l2 || carry) {
		const v1 = l1?.val || 0
		const v2 = l2?.val || 0
		let sum = v1 + v2 + carry

		carry = (sum / 10) | 0 // Get carry
		sum = sum % 10 // Get ones digit

		current.next = new ListNode(sum)
		current = current?.next

		l1 = l1?.next || null
		l2 = l2?.next || null
	}
	return dummyHead.next
}
