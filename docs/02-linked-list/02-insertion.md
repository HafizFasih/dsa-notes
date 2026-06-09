---
sidebar_position: 2
---

# Linked List — Insertion Operations

## 1. Insertion at the Beginning

### Steps
1. Create a new node
2. Assign data to the new node
3. Set new node's `next` = `head`
4. Update `head` with the new node

### Algorithm
```
Consider a node X that is inserted at the beginning.
The list is pointed by the pointer 'first' at the beginning.

1. X = new node
2. Read(Data(n))
3. If (first == NULL) then:
     first = X
     Next(n) = null
   Else:
     next(n) = first
     first = X
4. End
```

---

## 2. Insertion at the End

### Steps
1. Create a new node (X)
2. Assign data: `X.data = value`
3. Set `X.next = NULL`
4. If list is empty: `head = first = X`
5. Else traverse to last node, set `last.next = X`

### Algorithm
```
1. X = new node
2. Read(Data(n))
3. If (first == NULL) then:
     first = X
     Next(n) = null
   Else:
     temp = first
     while (Next(temp) != null):
       temp = next(temp)
     Next(temp) = X
4. End
```

### Pseudocode
```
INSERTION AT THE END:
1. Create a new node (x)
2. x.data = value
3. x.next = NULL
4. If first == NULL:
     head = first = x    ← one element case
   Else:
     temp = first
     while (temp.next != NULL):
       temp = temp.next
     temp.next = x
```

---

## 3. Insertion at a Specific Position

### Algorithm
```
1. Create a new node (n)
2. n.data = value
3. If pos == 0:
     n.next = first
     first = n
     Stop
4. Temp = first
5. For p = 0 to pos-2:
     temp = temp.next
   [End For]
6. n.next = temp.next
7. temp.next = n
8. Stop
```

---

## 4. Insertion After a Specific Value

### Algorithm
```
Consider a list as a pointer. A node X is inserted after
a node if data == VAL. A pointer ptr traverses a list in
such a way that each individual node is checked for data
(DATA=VAL). If such a node is found, insert X after it.

1. pts = list
2. while (pts != NULL) repeat steps 3 & 4:
3. If (Data(pts) == VAL) then:
     X = New node
     Read(Data(n))
     Next(n) = next(pts)
     next(pts) = X
     break
4. pts = Next(pts)
   [End of while loop]
5. End
```

---

## 5. Insert Element at k-th Position (Array-style)

### Algorithm
```
Write an algorithm to insert an element ITEM at the k-th
position of an element. N is the size of array of N elements
with k as the positive integer such that 1 ≤ k ≤ N.

1. Start
2. Initialize Counter: set J = N
3. Repeat steps 4 & 5 while J >= k:
4. Set Arr[J] = Arr[J-1]
5. Set J = J - 1
   [End of while]
6. Set Arr[k-1] = ITEM
7. Set N = N + 1
8. Exit
```
