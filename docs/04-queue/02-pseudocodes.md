---
sidebar_position: 2
---

# Queue — Pseudocodes

## Pseudocode: ENQUEUE

```
Function Enqueue(Queue, max, front, rear, item):
  1. If Rear == Max-1, then:
       print overflow
       stop
  2. If front == -1, then:
       set front = 0
  3. Set Rear = Rear + 1
  4. Set Queue[REAR] = ITEM
  5. Stop
```

---

## Pseudocode: DEQUEUE

```
Pseudo Code for DEQUEUE:
  1. If front == -1, then:
       print underflow
       stop
  2. Set ITEM = Queue[front]
  3. If front == rear then:     ← last element; reset queue to empty
       set front = -1
       set rear = -1
     Else:
       set front = front + 1
  4. Return Item
  5. Stop
```

---

## Pseudocode: DISPLAY

```
FOR DISPLAY:
  1. If front == -1:
       print "Queue is empty"
       stop
  2. For i = front to rear:
       print Queue[i]
     [End for]
  3. Stop
```

---

## Pseudocode: Linear Search (in Queue context)

### Iterative
```
Pseudocode LinearSearch:
  1. Start
  2. Set i = 0
  3. While i < n do:
       If array[i] == ITEM:
         print "Item is found at index i"
       i = i + 1
     [End while]
  4. Stop
```

### Recursive
```
LinearSearch(array[], n, item):
  if n == 0:
    print "Element not found"
  if array[n] == item:
    print "Element found at index n"
  else:
    LinearSearch(array[], n-1, item)
  Stop
```

---

## Pseudocode: Binary Search (in Queue context)

### Iterative
```
1. Start
2. Set low = 0
3. Set high = n-1
4. While low <= high do:
     Set mid = (low + high) / 2
     If Array[mid] == ITEM:
       print "Element found at index mid"
       (end)
     Elif Array[mid] > ITEM:
       set high = mid - 1
     Else:
       set low = mid + 1
   [End while]
5. Print "Element not found"
```

### Recursive
```
Function BinarySearch(Array, low, high, item):
  1. If low > high → print "Element not found"
  2. Set mid = (low + high) / 2
  3. If Array[mid] == item → print "Element found at position mid"
  4. Else if mid > item → Call BinarySearch(Array, low, mid-1, item)
  5. Else → Call BinarySearch(Array, mid+1, high, item)
```
