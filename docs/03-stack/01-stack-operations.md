---
sidebar_position: 1
---

# Stack — Operations

## Definition
A **Stack** is a linear data structure that follows the **LIFO** (Last In, First Out) principle.

## Key Properties
- **TOP** pointer tracks the top of the stack
- **Initialization:** `TOP = -1`
- Push → `TOP = TOP + 1` (increment first)
- `TOP = Size of stack - 1` (maximum index)

### Visual Example
```
Push 10 → Push 20 → Push 30

       | 30 |  ← TOP
       | 20 |
       | 10 |
       |____|
```

---

## PUSH Operation

**Purpose:** Insert an element on the top of the stack.

### Algorithm
```
Algorithm PUSH(Stack, MAXSIZE, TOP, ITEM):
Steps:
  1. Start (Check if stack is already filled)
  2. If TOP == MAXSIZE then:
       print "Overflow" & exit
  3. Set TOP = TOP + 1
  4. Set DATA_Stack[TOP] = ITEM
  5. Exit
```

---

## POP Operation

**Purpose:** Remove an element from the top of the stack.

### Algorithm
```
Algorithm POP(Stack, TOP, ITEM):
Steps:
  1. Start (Check if stack has an element)
  2. If TOP == -1 then:
       print "Underflow" and exit
  3. Set ITEM = Stack[TOP]
  4. Set TOP = TOP - 1
  5. Exit
```

---

## Stack Conditions

| Condition | Meaning |
|-----------|---------|
| `TOP == -1` | Stack is **empty** → Underflow on pop |
| `TOP == MAXSIZE - 1` | Stack is **full** → Overflow on push |

---

## Note on Call Stack (Recursion)
> Any call is followed by a **push** instruction; every pop is followed by the **pop** instruction.
> Recursion is a function calling itself again and again with different input in a smaller subpart.
