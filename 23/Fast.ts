/**
 * Definition for singly-linked list.
 * */
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	if (!lists?.length) return null

	const head: ListNode | null = new ListNode()
	let last: ListNode | null = head
	let current_index: number = 0

	while (lists.length) {
		current_index = 0
		for (let i = 0; i < lists.length; i++) {
			if (lists[i] === null) continue
			if (lists[current_index] == null || lists[i].val < lists[current_index].val) {
				current_index = i
			}
		}

		// add to list
		if (last != null) {
			last.next = lists[current_index]
			last = last.next
		}
		lists[current_index] = lists[current_index].next
		if (lists[current_index] == undefined) lists = lists.splice(current_index, 1)
	}

	return head.next
}
