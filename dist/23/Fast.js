"use strict";
/**
 * Definition for singly-linked list.
 * */
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function mergeKLists(lists) {
    if (!lists?.length)
        return null;
    const head = new ListNode();
    let last = head;
    let current_index = 0;
    while (lists.length) {
        current_index = 0;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null)
                continue;
            // @ts-ignore
            if (lists[current_index] == null || lists[i].val < lists[current_index].val) {
                current_index = i;
            }
        }
        // add to list
        if (last != null) {
            last.next = lists[current_index];
            last = last.next;
        }
        // @ts-ignore
        lists[current_index] = lists[current_index].next;
        if (lists[current_index] == undefined)
            lists = lists.splice(current_index, 1);
    }
    return head.next;
}
//# sourceMappingURL=Fast.js.map