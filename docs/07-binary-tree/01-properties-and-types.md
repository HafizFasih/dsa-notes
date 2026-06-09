---
sidebar_position: 1
---

# Binary Tree — Properties & Types

## Terminology

| Term | Definition |
|------|-----------|
| **Node** | Basic unit of a tree |
| **Root** | Topmost node (no parent) |
| **Left Child** | Node on the left of parent |
| **Right Child** | Node on the right of parent |
| **Edge** | Connection between nodes |
| **Leaf** | Node with no children |
| **Level** | Distance from root (root = level 0) |
| **Depth** | Length of path from root to node |

## Binary Tree Property
```
Left child < Root < Right child
```

---

## Types of Trees

### 1. General Tree
- A node can have any number of children

### 2. Binary Tree
- Each node has **at most 2 children** (left and right)

### 3. Binary Search Tree (BST)
- Binary tree where: **Left < Root < Right**

---

## Types of Binary Trees

### Complete Binary Tree
- All levels are **filled** except the last one
- Last level is filled **from left to right**
- Each node has either **0 or 2 children**

```
        50
       /  \
     45    60
    /  \  /  \
   40  48 65
  /  \  / \
 35  46 47  49   57
```

### Full Binary Tree
- Every node has either **0 or 2 children** (never 1)

### Perfect Binary Tree
- **All levels** are completely filled
- Every internal node has exactly 2 children
- All leaf nodes are at the same level

---

## Summary Table

| Type | Property |
|------|---------|
| **Complete** | All levels filled except last; last level filled left to right |
| **Full** | Every node has 0 or 2 children |
| **Perfect** | All levels completely filled |
