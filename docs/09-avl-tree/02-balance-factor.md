---
sidebar_position: 2
---

# AVL Tree — Balance Factor & Calculations

## Balance Factor Formula

```
BF(node) = Height(Left subtree) − Height(Right subtree)
```

- **Height of a leaf node** = 1
- **Height of NULL** = 0

---

## Step-by-Step Calculation

### Example Tree 1: Balanced
```
     30
    /  \
   20   40
```
- H(left of 30) = H(20) = 1
- H(right of 30) = H(40) = 1
- BF(30) = 1 - 1 = **0** ✓ (Perfectly balanced)

---

### Example Tree 2: Unbalanced
```
     30
    /
   20
  /
 10
```
- H(left of 30) = H(20-10 subtree) = 2
- H(right of 30) = 0
- BF(30) = 2 - 0 = **2** ✗ (Unbalanced — needs rotation)

---

### Example Tree 3: Left Side Slightly Heavy
```
     30
    /  \
   20   40
  /
 10
```
- H(20) = H(10) + 1 = 2, H(40) = 1
- BF(30) = 2 - 1 = **1** ✓ (Left slightly heavy but valid)

---

## Balance Factor Calculation Examples (from notes)

### Example Set from Class Notes

**Tree 01:**
```
        2
       / \
      1   3
     BF:  2→0, 1→0, 3→0
     → Perfectly balanced (BF = 0 for all)
```

**Tree 02:**
```
        2
       /
      1
     BF(2) = 1-0 = 1, BF(1) = 0-0 = 0
     → Left side slightly heavy
```

**Tree 03:**
```
         1
          \
           2
            \
             3
     H(1) = 1, H(2) = 1
     BF(root) = 0 - 2 = -2 → Unbalanced!
```

---

## How to Calculate Height

```
H(leaf node) = 1
H(NULL)      = 0
H(node)      = 1 + max(H(left), H(right))
```

### Example: Full Calculation
```
          10
         /  \
        5    15
       / \
      3   7

H(3) = 1, H(7) = 1
H(5) = 1 + max(1,1) = 2
H(15) = 1
H(10) = 1 + max(2,1) = 3

BF(10)  = H(left=5)  - H(right=15) = 2 - 1 = 1  ✓
BF(5)   = H(left=3)  - H(right=7)  = 1 - 1 = 0  ✓
BF(15)  = 0 - 0 = 0  ✓
BF(3)   = 0, BF(7) = 0  ✓

→ Tree is balanced (AVL valid)
```

---

## Identifying Imbalance

| BF Value | Imbalance Type | Fix |
|----------|---------------|-----|
| `+2` with left child BF `+1` | LL (Left-Left) | Right Rotation |
| `+2` with left child BF `-1` | LR (Left-Right) | Left then Right Rotation |
| `-2` with right child BF `-1` | RR (Right-Right) | Left Rotation |
| `-2` with right child BF `+1` | RL (Right-Left) | Right then Left Rotation |
