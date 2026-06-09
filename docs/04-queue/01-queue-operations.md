---
sidebar_position: 1
---

# Queue — Operations

## Definition
A **Queue** is a linear data structure that follows the **FIFO** (First In, First Out) principle.

## Key Pointers
| Pointer | Meaning |
|---------|---------|
| **Front** | Index of the 1st element |
| **Rear** | Index of the last element |
| `Queue[0...max]` | Array representation |

## Operations
| Operation | Description |
|-----------|-------------|
| **Enqueue** | Insertion (from Rear) |
| **Dequeue** | Deletion (from Front) |

---

## ENQUEUE Algorithm

```
Algorithm ENQUEUE(Queue, MAX, Front, Rear, ITEM):
  1. If REAR == MAX-1:
       print "Overflow"
       Stop
  2. If Front == -1:
       set Front = 0
  3. Set Rear = Rear + 1
  4. Set Queue[REAR] = ITEM
  5. Stop
```

---

## DEQUEUE Algorithm

```
Algorithm DEQUEUE(Queue, Front, Rear, ITEM):
  1. If Front == -1:
       print "Underflow"
       Stop
  2. Set ITEM = Queue[Front]
  3. If Front == Rear:        ← last element; reset queue
       set Front = -1
       set Rear = -1
     Else:
       set Front = Front + 1
  4. Return Item
  5. Stop
```

---

## DISPLAY Algorithm

```
FOR DISPLAY:
  1. If Front == -1:
       print "Queue is empty"
       Stop
  2. For i = Front to Rear:
       print Queue[i]
     [End for]
  3. Stop
```

---

## Queue Conditions

| Condition | Meaning |
|-----------|---------|
| `Front == -1` | Queue is **empty** (underflow on dequeue) |
| `Rear == MAX-1` | Queue is **full** (overflow on enqueue) |
| `Front == Rear` | Only **one element** in queue; reset both to -1 after dequeue |
