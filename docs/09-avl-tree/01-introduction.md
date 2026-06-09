---
sidebar_position: 1
---

# AVL Tree — Introduction

## Definition
An **AVL Tree** is a special type of Binary Search Tree (BST) that is **self-balancing**. It automatically keeps its height small so that operations stay fast.

> Named after inventors **Adelson-Velsky and Landis**.

---

## Why AVL Tree is Needed?

| Normal BST Problem | AVL Solution |
|-------------------|-------------|
| Can become 10→20→30→40 (linear) | Automatically rebalances on every insert/delete |
| Search becomes O(n) | Search stays **O(log n)** |
| Height can be n | Height stays **O(log n)** |

---

## AVL vs BST

```
Normal BST (degenerate):        AVL Tree (balanced):
10                                   20
  \                                /    \
   20              →             10      30
     \
      30
        \
         40
```

---

## Key Property

> **Balance Factor (BF)** = Height(Left subtree) − Height(Right subtree)

| Balance Factor | State |
|---------------|-------|
| `BF = 0` | Perfectly balanced |
| `BF = 1` | Left side slightly heavy |
| `BF = -1` | Right side slightly heavy |
| `BF > 1` | **Unbalanced** — needs rotation |
| `BF < -1` | **Unbalanced** — needs rotation |

**Valid BF values for AVL: {-1, 0, 1}**

---

## AVL Rotations Summary

| Case | Condition | Rotation |
|------|-----------|---------|
| **LL** | BF > 1, left of left heavy | Right Rotation |
| **RR** | BF < -1, right of right heavy | Left Rotation |
| **LR** | BF > 1, left of right heavy | Left-Right Rotation |
| **RL** | BF < -1, right of left heavy | Right-Left Rotation |
