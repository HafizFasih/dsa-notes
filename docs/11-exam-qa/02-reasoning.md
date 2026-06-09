---
sidebar_position: 2
---

# Reasoning Questions

---

## Q1. Why does Binary Search require sorted data?

Binary Search works by comparing the target with the **middle element** and eliminating half the search space. This only works if the data is sorted — if the array is unsorted, eliminating half the elements is invalid because the target could be anywhere.

---

## Q2. Why is Linked List preferred over Array for dynamic data?

Arrays have a **fixed size** allocated at creation time. If more elements are needed, a new larger array must be created and data copied. Linked Lists allocate each node **individually at runtime**, so the size grows and shrinks as needed without wasting memory or requiring copying.

---

## Q3. Why is AVL Tree needed over normal BST?

A normal BST does **not balance itself**. If elements are inserted in sorted order (e.g., 10, 20, 30, 40), the BST degenerates into a linked list with height O(n), making search O(n). AVL Tree **automatically rebalances** after every insert/delete using rotations, keeping height O(log n) and guaranteeing O(log n) search always.

---

## Q4. Why does In-order traversal of a BST give sorted output?

BST property: **Left < Root < Right** for every node. In-order visits Left → Root → Right, so it always visits smaller values before larger ones. Following this rule recursively across the entire tree produces elements in ascending order.

---

## Q5. Why is Stack used for DFS and Queue for BFS?

- **DFS** needs to go as deep as possible along one path, then backtrack. A Stack (LIFO) naturally supports this — the most recently discovered node is explored next.
- **BFS** needs to explore all nodes at the current level before going deeper. A Queue (FIFO) ensures nodes are explored in the order they were discovered — level by level.

---

## Q6. Why is TOP initialized to -1 in a Stack?

TOP is an **index** pointing to the current top element. An empty stack has no elements, so no valid index exists. `-1` is used as a sentinel value meaning "nothing is here yet." When the first element is pushed, TOP becomes 0 (the first valid index).

---

## Q7. Why does Quick Sort have O(n²) worst case?

Quick Sort's worst case occurs when the **pivot is always the smallest or largest element** (e.g., already-sorted input with last element as pivot). Every partition step puts 0 elements on one side and n-1 on the other, resulting in n recursive calls each doing O(n) work → O(n²) total.

---

## Q8. Why is Merge Sort preferred for Linked Lists?

Merge Sort splits and merges without needing **random access** to elements. Linked Lists are slow at random access (O(n)) but efficient at splitting (just change pointers) and merging. Quick Sort requires swapping elements by index which is expensive on Linked Lists.

---

## Q9. Why does insertion order matter in BST?

The shape of a BST is determined entirely by the order elements are inserted — there is **no rebalancing**. Inserting `[20, 10, 30]` gives a balanced tree, but inserting `[10, 20, 30]` (sorted order) gives a degenerate right-skewed tree with height 3 instead of 2. This directly affects search performance.

---

## Q10. Why is Front reset to -1 after the last element is dequeued from a Queue?

When Front == Rear and the last element is removed, the queue becomes **empty**. Setting both Front and Rear back to -1 resets the queue to its initial empty state, so subsequent Enqueue and Dequeue operations can detect overflow/underflow correctly using the standard conditions.

---

## Q11. Why does Selection Sort have O(n²) in all cases?

Selection Sort always scans the **entire unsorted portion** to find the minimum, regardless of how the data is arranged. Even if the array is already sorted, it still does all the comparisons. There is no early-exit condition like Bubble Sort or Insertion Sort.

---

## Q12. Why is recursion related to Stack?

Every recursive call pushes a **new stack frame** (local variables, return address) onto the program's call stack. When the base case is reached, frames are popped one by one — Last In, First Out. This is exactly LIFO behaviour, which is why recursion can always be converted to an explicit stack-based loop.

---

## Q13. Why does BFS give the shortest path in unweighted graphs?

BFS explores nodes **level by level** — all nodes at distance 1 are visited before distance 2, all distance-2 before distance-3, and so on. The first time BFS reaches a node, it has taken the fewest possible edges to get there. In a weighted graph this does not hold because a path with more edges could have lower total weight.

---

## Q14. Why does AVL Tree use Balance Factor and not just height?

Height alone of a single node does not tell whether the tree is balanced. **Balance Factor = Height(Left) − Height(Right)** captures the *relative* difference between subtrees at each node. A BF outside {-1, 0, 1} precisely identifies which node is unbalanced and which rotation (LL/RR/LR/RL) is needed to fix it.
