---
sidebar_position: 2
---

# Binary Tree — Traversals

## Overview of Traversals

| Traversal | Type | Order |
|-----------|------|-------|
| **Level Order (BFS)** | Breadth First | Level by level, left to right |
| **Pre-order (DFS)** | Depth First | Root → Left → Right |
| **In-order (DFS)** | Depth First | Left → Root → Right |
| **Post-order (DFS)** | Depth First | Left → Right → Root |

---

## A. Level Order Traversal (BFS)

> Visit nodes **level by level** from left to right.

### Algorithm
```
Level Order Search (BFS):
  1. If the tree is empty, return NULL
  2. Visit the root node; if node contains the required value → stop
  3. If not, move to the next node in the lower level
     after performing search in the same level (left to right)
  4. If found → return the index of that element
```

### Pseudocode
```
Function LevelOrder(root):
  If root == NULL: return
  Create a Queue Q
  Enqueue(root)
  While Q is not empty:
    node = Dequeue(Q)
    print node.data
    If node.left != NULL: Enqueue(node.left)
    If node.right != NULL: Enqueue(node.right)
```

---

## B. Pre-order Traversal (Root → Left → Right)

> Visit **root first**, then left subtree, then right subtree.

### Algorithm
```
Pre-order Traversal (DFS):
  1. Start from root node — visit the root node first
  2. Move to the left subtree and repeat the same process
  3. After finishing left subtree, move to the right subtree
  4. Repeat until all nodes are visited
```

### Pseudocode
```
Function preorder(root):
  If root is not None:
    print(root.data)        ← Visit root FIRST
    preorder(root.left)
    preorder(root.right)
```

---

## C. In-order Traversal (Left → Root → Right)

> Visit **left subtree first**, then root, then right subtree.
> **For BST:** In-order gives sorted (ascending) output.

### Algorithm
```
In-order Traversal (DFS):
  1. Start from root node
  2. Move to left subtree — keep going until you reach
     a node with no left child
  3. Visit (process) that node
  4. Move to its right subtree
  5. Repeat process for all nodes
```

### Pseudocode
```
Function inorder(root):
  If root is not None:
    inorder(root.left)
    print(root.data)        ← Visit root IN MIDDLE
    inorder(root.right)
```

---

## D. Post-order Traversal (Left → Right → Root)

> Visit **both subtrees first**, then the root.

### Algorithm
```
Post-order Traversal (DFS):
  1. Start from root node
  2. If the tree is empty → stop (Return NULL)
  3. Move to the left subtree
  4. Traverse the entire left subtree recursively,
     then move to right subtree and repeat
  5. After both subtrees visited → process (visit) root node
  6. Repeat for all nodes until traversal is completed
```

### Pseudocode
```
Function postorder(root):
  If root is not None:
    postorder(root.left)
    postorder(root.right)
    print(root.data)        ← Visit root LAST
```

---

## Example: All Traversals on Same Tree

```
        4
       / \
      2   6
     / \ / \
    1  3 5  7
```

| Traversal | Output |
|-----------|--------|
| **In-order** | 1, 2, 3, 4, 5, 6, 7 |
| **Pre-order** | 4, 2, 1, 3, 6, 5, 7 |
| **Post-order** | 1, 3, 2, 5, 7, 6, 4 |
| **Level Order** | 4, 2, 6, 1, 3, 5, 7 |
