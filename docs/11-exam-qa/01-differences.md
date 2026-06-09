---
sidebar_position: 1
---

# Difference Questions

---

## 1. ADT vs Data Structure

| ADT | Data Structure |
|-----|----------------|
| Logical/abstract view of data | Physical implementation of data |
| Language independent | Language dependent |
| Defines **what** to do | Defines **how** to do |
| Hides implementation details | Exposes how data is stored |
| Example: Stack ADT (Push, Pop) | Example: Stack using Array |

---

## 2. Array vs Linked List

| Array | Linked List |
|-------|-------------|
| Fixed size | Dynamic size |
| Contiguous memory locations | Non-contiguous memory |
| Fast access by index — O(1) | Sequential access — O(n) |
| Insertion/deletion is expensive (shifting) | Efficient insertion/deletion — O(1) at front |
| Less memory (no pointer overhead) | Extra memory per node (stores pointer) |

---

## 3. Linear Search vs Binary Search

| | Linear Search | Binary Search |
|--|--------------|--------------|
| **Data requirement** | Works on unsorted data | Requires **sorted** data |
| **Approach** | Checks each element one by one | Divides search space in half |
| **Best Case** | O(1) | O(1) |
| **Worst Case** | O(n) | O(log n) |
| **Efficiency** | Less efficient | More efficient |
| **Use Case** | Small or unsorted lists | Large sorted lists (e.g. phonebook) |

---

## 4. Stack vs Queue

| Stack | Queue |
|-------|-------|
| LIFO — Last In, First Out | FIFO — First In, First Out |
| One end (TOP) for both insert & delete | Two ends — Rear (insert), Front (delete) |
| Operations: Push / Pop | Operations: Enqueue / Dequeue |
| Underflow when `TOP == -1` | Underflow when `Front == -1` |
| Overflow when `TOP == MAXSIZE - 1` | Overflow when `Rear == MAX - 1` |
| Used in: recursion, expression conversion | Used in: BFS, scheduling, printer queue |

---

## 5. Bubble Sort vs Selection Sort vs Insertion Sort

| Algorithm | Best | Average | Worst | Stable? | Key Idea |
|-----------|------|---------|-------|---------|----------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | Yes | Repeatedly swap adjacent elements |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | No | Find minimum, place at correct position |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | Yes | Insert each element into sorted portion |

> Bubble and Insertion Sort have O(n) best case because they can detect an already-sorted array.
> Selection Sort always does O(n²) comparisons regardless.

---

## 6. Merge Sort vs Quick Sort

| | Merge Sort | Quick Sort |
|--|------------|------------|
| **Approach** | Divide then merge | Partition around pivot then divide |
| **Best Case** | O(n log n) | O(n log n) |
| **Average Case** | O(n log n) | O(n log n) |
| **Worst Case** | O(n log n) | O(n²) |
| **Space** | O(n) — needs auxiliary array | O(log n) — recursive call stack |
| **Stable** | Yes | No |
| **Best For** | Linked lists, large external data | Arrays, in-memory sorting |

---

## 7. BST vs AVL Tree

| BST | AVL Tree |
|-----|----------|
| Simple binary search tree | Self-balancing BST |
| No automatic balancing | Automatically rebalances on insert/delete |
| Height can be O(n) in worst case | Height is always O(log n) |
| Search: O(n) worst case | Search: O(log n) guaranteed |
| No rotations needed | Uses LL, RR, LR, RL rotations |
| Insertion in sorted order causes degenerate tree | Handles sorted insertion correctly |

---

## 8. DFS vs BFS

| Feature | DFS (Depth First Search) | BFS (Breadth First Search) |
|---------|--------------------------|---------------------------|
| **Data Structure** | Stack | Queue |
| **Order** | Goes deep first, then backtracks | Level by level |
| **Memory** | O(h) — height of tree/graph | O(w) — width of tree/graph |
| **Complete?** | Not always (infinite graphs) | Yes (finite graphs) |
| **Optimal path?** | No | Yes (unweighted graphs) |
| **Use Case** | Cycle detection, topological sort | Shortest path, level order traversal |

---

## 9. Complete vs Full vs Perfect Binary Tree

| Type | Property |
|------|---------|
| **Complete** | All levels filled except the last; last level filled **left to right** |
| **Full** | Every node has either **0 or 2 children** (never exactly 1) |
| **Perfect** | **All levels completely filled**; all leaf nodes at the same level |

> A Perfect tree is also Full and Complete, but not vice versa.

---

## 10. Pre-order vs In-order vs Post-order

| | Pre-order | In-order | Post-order |
|--|-----------|----------|------------|
| **Order** | Root → Left → Right | Left → Root → Right | Left → Right → Root |
| **Root visited** | First | Middle | Last |
| **Key use** | Copy a tree | Sorted output (BST only) | Delete a tree |
| **First node visited** | Root | Leftmost node | Leftmost node |

---

## 11. Directed vs Undirected Graph

| Directed Graph | Undirected Graph |
|----------------|-----------------|
| Edges have direction (arrows) | Edges are bidirectional |
| `A → B` does not mean `B → A` | `A — B` means both directions |
| Used in: web links, task scheduling | Used in: social networks, road maps |

---

## 12. Linear vs Non-Linear Data Structures

| Linear | Non-Linear |
|--------|-----------|
| Elements stored sequentially | Elements stored hierarchically |
| Single level | Multiple levels |
| Easy to traverse in one pass | Traversal more complex |
| Examples: Array, Linked List, Stack, Queue | Examples: Tree, Graph |
