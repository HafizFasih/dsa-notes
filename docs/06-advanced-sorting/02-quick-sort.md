---
sidebar_position: 2
---

# Quick Sort

## Concept
Quick Sort is a **divide and conquer** algorithm. It selects a **pivot** element and partitions the array into two sub-arrays: elements less than the pivot and elements greater than the pivot, then recursively sorts each sub-array.

## Time Complexity
| Case | Complexity |
|------|-----------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n²) — when pivot is always min/max |

**Space Complexity:** O(log n) — recursive call stack

---

## Algorithm

```
Algorithm QuickSort(arr, low, high):
  1. If low < high:
       pivot_index = Partition(arr, low, high)
       QuickSort(arr, low, pivot_index - 1)   ← sort left
       QuickSort(arr, pivot_index + 1, high)  ← sort right
```

### Partition Step (Lomuto scheme)
```
Algorithm Partition(arr, low, high):
  1. pivot = arr[high]   ← last element as pivot
  2. i = low - 1
  3. For j = low to high-1:
       If arr[j] <= pivot:
         i++
         swap arr[i] & arr[j]
  4. swap arr[i+1] & arr[high]
  5. return i + 1
```

---

## Worked Example

```
Input: [10, 80, 30, 90, 40, 50, 70]
pivot = 70 (last element)

Partition:
  i = -1
  j=0: arr[0]=10 <= 70 → i=0, swap(arr[0], arr[0]) → [10,80,30,90,40,50,70]
  j=1: arr[1]=80 > 70 → skip
  j=2: arr[2]=30 <= 70 → i=1, swap → [10,30,80,90,40,50,70]
  j=3: arr[3]=90 > 70 → skip
  j=4: arr[4]=40 <= 70 → i=2, swap → [10,30,40,90,80,50,70]
  j=5: arr[5]=50 <= 70 → i=3, swap → [10,30,40,50,80,90,70]
  swap arr[i+1]=arr[4] with pivot=arr[6]:
  → [10,30,40,50,70,90,80]
  pivot at index 4

Recursively sort [10,30,40,50] and [90,80]
Final: [10, 30, 40, 50, 70, 80, 90]
```

---

## Key Points
- **In-place** sort — no extra array needed
- **Not stable** — equal elements may change relative order
- Performance heavily depends on **pivot selection**
- Average case is O(n log n) but worst case O(n²) for sorted input

## Merge Sort vs Quick Sort

| | Merge Sort | Quick Sort |
|--|------------|------------|
| **Approach** | Divide then merge | Partition then divide |
| **Worst Case** | O(n log n) | O(n²) |
| **Space** | O(n) | O(log n) |
| **Stable** | Yes | No |
| **Best For** | Linked lists, large data | Arrays, in-memory |
