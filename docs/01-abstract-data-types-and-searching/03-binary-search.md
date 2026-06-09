---
sidebar_position: 3
---

# Binary Search

## Definition
Binary Search finds an element by **dividing the search space into half** repeatedly.

> **Precondition:** Data must be **sorted**.

## Example
```
Array = [6, 10, 15, 20, 25, 30],  X = 20
```
- M = L + (R - 1) / 2
- arr[M] = arr[2] = 15
- X = 20 > 15 → search Right Half: L = Mid+1, R = 5
- arr[M] = arr[3] = 20 → Found!

---

## Algorithm

```
Algorithm BinarySearch(Array, X):
  1. Compare X with the middle element
  2. If X == middle element → return the middle index (found)
  3. If X > middle element → perform search only in the RIGHT half
  4. If X < middle element → perform search only in the LEFT half
  5. Repeat until element is found or search space is empty
```

**Mid formula:**
```
mid = L + (R - 1) / 2
```

---

## Iterative Pseudocode

```
Pseudocode BinarySearch(Array, item):
  1. Start
  2. Set low = 0
  3. Set high = n - 1
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

---

## Recursive Pseudocode

```
Function BinarySearch(Array, low, high, item):
  1. If low > high then print "Element not found"
  2. Set mid = (low + high) / 2
  3. If Array[mid] == item → print "Element found at position mid"
  4. Else if mid > item → Call BinarySearch(Array, low, mid-1, item)
  5. Else → Call BinarySearch(Array, mid+1, high, item)
```

---

## Time Complexity

| Case | Complexity |
|------|-----------|
| Best | O(1) — element is the middle element |
| Worst | O(log n) |

---

## Binary Search on Sorted Array Example (BEG, END, MID)

```
Array = [12, 45, 7, 22, 9]  (sorted: needs to be sorted first)
Lets say Array = [6, 10, 15, 20, 25, 30]

Step 1: BEG=0, END=5, MID=2  → arr[2]=15
Step 2: ITEM=20 > 15 → BEG=MID=2
Step 3: BEG=2, END=5, MID=INT((2+5)/2)=3 → arr[3]=20 → FOUND at MID
```

Algorithm (while BEG ≤ END and DATA[MID] ≠ ITEM):
```
1. Start
2. Initialize variables BEG, END, MID, LOC
3. Repeat steps 3 & 4 while BEG <= END and DATA[MID] != ITEM
4. If ITEM < DATA[MID]:
     set END = MID - 1
   [End of if statement]
5. Set MID = INT((BEG + END) / 2)
   [End of step 2 loop]
6. If DATA[MID] == ITEM:
     SET LOC = MID
   Else:
     SET LOC = NULL
7. Stop
```
