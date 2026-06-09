---
sidebar_position: 3
---

# Insertion Sort

## Concept
Build the sorted array **one element at a time** by inserting each new element into its correct position among the already-sorted elements.

## Time Complexity
| Case | Complexity |
|------|-----------|
| Best | O(n) — already sorted |
| Average | O(n²) |
| Worst | O(n²) |

---

## Iterative Algorithm

```
InsertionSort(arr, n):
  For i = 1 to n-1:
    item = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > ITEM:
      arr[j+1] = arr[j]
      j = j - 1
    arr[j+1] = ITEM
```

---

## Recursive Algorithm

```
Function InsertionSort(arr, n):
  1. If n <= 1:
       return
  2. Call InsertionSort(arr, n-1)
  3. Set ITEM = arr[n-1]
  4. Set j = n-2
  5. While j >= 0 and arr[j] > ITEM:
       arr[j+1] = arr[j]
       j = j - 1
     [End while]
  6. arr[j+1] = ITEM
```

---

## Worked Example

```
Initial: [12, 11, 13, 5, 6]

Pass 1 (i=1): item=11, shift 12 → [11, 12, 13, 5, 6]
Pass 2 (i=2): item=13, no shift → [11, 12, 13, 5, 6]
Pass 3 (i=3): item=5,  shift 13,12,11 → [5, 11, 12, 13, 6]
Pass 4 (i=4): item=6,  shift 13,12,11 → [5, 6, 11, 12, 13]
Sorted: [5, 6, 11, 12, 13]
```

---

## Comparison of Elementary Sorting Algorithms

| Algorithm | Best | Average | Worst | Stable? |
|-----------|------|---------|-------|---------|
| Bubble Sort | O(n) | O(n²) | O(n²) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | Yes |
