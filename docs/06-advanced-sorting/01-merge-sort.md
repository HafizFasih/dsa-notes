---
sidebar_position: 1
---

# Merge Sort

## Concept
Merge Sort is a **divide and conquer** algorithm. It recursively splits the array into halves, sorts each half, then merges the two sorted halves.

## Time Complexity
| Case | Complexity |
|------|-----------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

**Space Complexity:** O(n) — requires auxiliary array

---

## Algorithm

```
Algorithm MergeSort(arr, left, right):
  1. If left >= right: return   ← base case
  2. mid = (left + right) / 2
  3. MergeSort(arr, left, mid)       ← sort left half
  4. MergeSort(arr, mid+1, right)    ← sort right half
  5. Merge(arr, left, mid, right)    ← merge both halves
```

### Merge Step
```
Algorithm Merge(arr, left, mid, right):
  1. Create temp arrays L[] and R[]
  2. Copy data to L[] and R[]
  3. i = 0, j = 0, k = left
  4. While i < len(L) and j < len(R):
       If L[i] <= R[j]:
         arr[k] = L[i]; i++
       Else:
         arr[k] = R[j]; j++
       k++
  5. Copy remaining elements of L[] if any
  6. Copy remaining elements of R[] if any
```

---

## Worked Example

```
Input: [38, 27, 43, 3, 9, 82, 10]

Step 1 — Divide:
  [38, 27, 43, 3]   [9, 82, 10]
  [38, 27] [43, 3]  [9, 82] [10]
  [38][27] [43][3]  [9][82]

Step 2 — Merge (sort while merging):
  [27, 38] [3, 43]  [9, 82]
  [3, 27, 38, 43]   [9, 10, 82]

Step 3 — Final Merge:
  [3, 9, 10, 27, 38, 43, 82]
```

---

## Key Points
- Always splits into **exactly two halves**
- Merge step does the actual **sorting work**
- Best choice for **linked lists** (no extra space needed for merge)
- Stable sort — preserves relative order of equal elements
