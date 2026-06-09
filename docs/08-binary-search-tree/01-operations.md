---
sidebar_position: 1
---

# BST — Operations

## Definition
A **Binary Search Tree (BST)** is a binary tree where:
- **Left subtree** of a node contains only nodes with values **less than** the node
- **Right subtree** contains only nodes with values **greater than** the node
- Both subtrees are also BSTs

> Only handles data in a way that keeps it naturally ordered.

---

## Example BST

```
Inserting: 1→5→8→10→12→15→20→22→25→28→30→36→38→40→45→48→60

              25
            /    \
          20      40
         /  \    /  \
        5   22  30   48
       / \     /  \   \
      1   8   28  36   60
           \     \
           12    38
             \
             15
                \
                45
```

---

## 1. Insertion

### Algorithm
```
INSERTION (BST) Algorithm:
  1. Check for empty tree: if root is NULL → create a new node
  2. If value < root → traverse the LEFT subtree recursively
  3. If value > root → traverse the RIGHT subtree recursively, then insert
```

### Visual: Inserting 8 into BST
```
Before:          After (inserting 8):
    4                4
   / \              / \
  2   6            2   6
 / \ / \          / \ / \
1  3 5  7        1  3 5  7
                          \
                           8
```

---

## 2. Search

### Algorithm
```
SEARCH in BST:
  1. Start at root
  2. If root == NULL → return false (not found)
  3. If root.data == target → return true (found)
  4. If target < root.data → search in LEFT subtree
  5. If target > root.data → search in RIGHT subtree
```

---

## 3. Delete (Important — 3 Cases)

### Case #01: Leaf Node (No children)
Simply remove the node.
```
      20                20
     /  \      →       /  \
   10    30           10    30
  /  \                  \
 5   15                 15
```

### Case #02: Node with One Child
Replace the node with its child.
```
      20                20
     /  \      →       /  \
   10    30           15    30
     \
     15
```

### Case #03: Node with Two Children
Find the **inorder successor** (smallest node in right subtree), replace node's data with it, then delete the successor.
```
      20                25
     /  \      →       /  \
   10    30           10    30
        /  \               \
       25   40             40
```

---

## FindMin (Helper for Delete Case 3)

```
Function FindMin(node):
  While node.left is not None:
    node = node.left
  return node
```
