---
sidebar_position: 3
---

# Binary Tree — Representation

## Two Ways to Represent a Tree

### 1. Array Representation
```
For a node at index i:
  Left child  → index 2i
  Right child → index 2i + 1
  Parent      → index i/2
```

### 2. Linked List Representation
Each node stores:
```
[ Pointer to Left Child | DATA | Pointer to Right Child ]
```

---

## Linked List Representation Example

### Tree:
```
        A
       / \
      B   C
     / \   \
    D   E   (null)
```

### Node Structure:
```
Node: [Left_ptr | Data | Right_ptr]

A: [ptr_to_B | A | ptr_to_C]
B: [ptr_to_D | B | ptr_to_E]
C: [NULL     | C | NULL    ]
D: [NULL     | D | NULL    ]
E: [NULL     | E | NULL    ]
```

### Visual Linked Representation:
```
         ┌─────────────────────┐
         │  NULL | A | ptr→C  │
         └─────────────────────┘
              ↓             ↓
  ┌──────────────────┐   ┌──────────────────┐
  │ ptr→D | B | ptr→E│   │ NULL | C | NULL  │
  └──────────────────┘   └──────────────────┘
       ↓          ↓
  ┌──────────┐  ┌──────────┐
  │NULL|D|NULL│  │NULL|E|NULL│
  └──────────┘  └──────────┘
```

---

## BST Insertion (Review)

```
INSERTION (BST) Algorithm:
  1. Check for empty tree: if root is NULL → create a new node
  2. If value < root → traverse the left subtree recursively
     and insert in left subtree
  3. If value > root → traverse the right subtree recursively,
     then insert
  * Make the root node as new node. Move the root node left.
```
