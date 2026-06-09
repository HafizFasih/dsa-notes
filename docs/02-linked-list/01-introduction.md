---
sidebar_position: 1
---

# Linked List — Introduction

## Definition
A **Linked List** is a linear data structure — a collection of elements connected to pointers. Each element is called a **node**.

### Why Linked List over Array?

| Array Limitations | Linked List Solution |
|-------------------|---------------------|
| Fixed size | Dynamic size |
| Contiguous memory location | Non-contiguous memory |
| Same data type | Same data type |
| Insertion/deletion is expensive | Efficient insertion/deletion |

---

## Node Structure

Each node of a linked list contains **two parts**:
1. **Data** — the actual value stored
2. **Pointer** — address of the next node

```
[ DATA | POINTER ] → [ DATA | POINTER ] → [ DATA | NULL ]
```

---

## Types of Linked List

| Type | Description |
|------|-------------|
| **1. Singly** | Each node has one pointer → next node |
| **2. Doubly** | Each node has two pointers → prev and next |
| **3. Circular** | Last node points back to first node |

### Visual Representation
```
Singly:
head → [D|P] → [D|P] → [D|NULL]

Doubly:
head → [Prev|DATA|Next] ↔ [Prev|DATA|Next] → NULL

Circular:
head → [D|P] → [D|P] → [D|P] ↩ (back to head)
```

---

## Key Properties (Insertion at End)

1. `Data of previous → last → next`
2. `Data → next = null`
3. `last → next = Data → previous`

---

## Operations on Linked List

| Operation | Description |
|-----------|-------------|
| **Insertion** | Add a new node |
| **Deletion** | Remove a node |
| **Update** | Modify node data |
| **Searching** | Find a node by value |
| **Sorting** | Arrange nodes in order |
