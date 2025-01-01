**Approach**
This solution uses the Two-Pointer technique:

We use two pointers, one at the start and one at the end of the array.
The idea is to calculate the trapped water by comparing the heights at the two pointers.
Water can only be trapped if there is a taller bar on both sides. We keep track of the maximum heights encountered so far on both sides.

**Why it works:**
The water trapped above each bar is determined by the shorter of the tallest bars on the left and right sides.
By moving the pointers inward, we ensure that we calculate the trapped water in an efficient way with O(n) time complexity.
