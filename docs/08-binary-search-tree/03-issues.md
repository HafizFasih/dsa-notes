---
sidebar_position: 3
---

# BST — Issues & Problems

## Problem #1: Unbalanced Tree

> If data is inserted in **sorted order**, the BST becomes like a **linked list**.

### Example of Degenerate BST
```
Inserting: 10, 20, 30, 40

10
  \
   20
     \
      30
        \
         40
```

**Consequence:**
- Height becomes **n** instead of **log n** (worst case)
- Searching becomes **O(n)** instead of **O(log n)** — very slow

---

## Problem #2: Time Complexity Not Guaranteed

> BST performance **depends on insertion order**. It does not automatically balance itself.

| Scenario | Height | Search Time |
|----------|--------|-------------|
| Balanced BST (Example #02) | O(log n) | O(log n) |
| Degenerate/Skewed BST (Example #01) | O(n) | O(n) — very slow on large data |

The **order you insert** decides the structure of the tree.

---

## Problem #3: Complex Deletion Operation

> Deletion is tricky because there are **3 cases** to handle:

| Case | Situation | Solution |
|------|-----------|---------|
| **Case #01** | Leaf node (no children) | Simply delete |
| **Case #02** | Node with 1 child | Replace node with its child |
| **Case #03** | Node with 2 children | Replace with inorder successor, then delete successor |

---

## Problem #4: Extra Memory Usage

> Each node stores data + left pointer + right pointer.
> This uses **more memory than arrays** (extra pointer overhead).

---

## Problem #5: No Automatic Balancing

- Normal BST does **not balance itself**
- You must manually use special trees:
  - **AVL Tree** — self-balancing BST
  - **Red-Black Tree** — another self-balancing BST

---

## Applications of BST (Despite Issues)

1. **Searching** — O(log n) on balanced trees
2. **Sorting** — In-order traversal gives sorted output
3. **Range queries** — Efficiently find all keys between two values
4. **Priority queues** — Can be implemented with BST
5. **Symbol tables** — Used in compilers/interpreters
