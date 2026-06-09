---
sidebar_position: 3
---

# AVL Tree — Rotations

> When BF becomes **> 1** or **< -1**, we fix the tree using rotations.

## Case #01: Right Rotation (LL Case)
**Trigger:** BF > +1 — Left subtree becomes too heavy (Left-Left imbalance)

```
Before:          After Right Rotation:
    30               20
   /                /  \
  20       →       10    30
 /
10
```

**Steps:**
1. `y = x.left` (y = 20, x = 30)
2. `T2 = y.right`
3. `y.right = x`
4. `x.left = T2`
5. Update heights
6. Return `y` as new root

---

## Case #02: Left Rotation (RR Case)
**Trigger:** BF < -1 — Right subtree becomes too heavy (Right-Right imbalance)

```
Before:          After Left Rotation:
10                   20
  \                 /  \
   20      →       10    30
     \
      30
```

**Steps:**
1. `y = x.right` (y = 20, x = 10)
2. `T2 = y.left`
3. `y.left = x`
4. `x.right = T2`
5. Update heights
6. Return `y` as new root

---

## Case #03: Left-Right Rotation (LR Case)
**Trigger:** BF > +1 but left child's BF < 0 (Left of right subtree is heavy)

> **First Left Rotate** the left child, **then Right Rotate** the root.

```
Before:             After Left Rot on 10:      After Right Rot on 30:
    30                   30                         20
   /                    /                          /  \
  10          →        20          →              10    30
    \                 /
     20              10
```

**Steps:**
1. Left Rotate `x.left`
2. Right Rotate `x`

---

## Case #04: Right-Left Rotation (RL Case)
**Trigger:** BF < -1 but right child's BF > 0 (Right of left subtree is heavy)

> **First Right Rotate** the right child, **then Left Rotate** the root.

```
Before:          After Right Rot on 30:    After Left Rot on 10:
  10                  10                        20
    \                   \                      /  \
     30        →         20        →          10    30
    /                      \
   20                       30
```

**Steps:**
1. Right Rotate `x.right`
2. Left Rotate `x`

---

## Summary of All Rotations

| Case | Imbalance | BF | Child BF | Fix |
|------|-----------|-----|---------|-----|
| **LL** | Left-Left | > +1 | ≥ 0 | Right Rotation |
| **RR** | Right-Right | < -1 | ≤ 0 | Left Rotation |
| **LR** | Left-Right | > +1 | < 0 | Left Rotation → Right Rotation |
| **RL** | Right-Left | < -1 | > 0 | Right Rotation → Left Rotation |

---

## After Every Rotation: Recalculate BF

After applying a rotation, always recalculate the balance factor of all affected nodes to verify the tree is balanced (all BF values in {-1, 0, 1}).
