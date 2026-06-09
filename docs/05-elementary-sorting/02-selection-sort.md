---
sidebar_position: 2
---

# Selection Sort

## Concept
Find the **minimum element** from the unsorted part and place it at the beginning. Repeat for the remaining unsorted portion.

## Time Complexity
| Case | Complexity |
|------|-----------|
| Best | O(n²) |
| Average | O(n²) |
| Worst | O(n²) |

---

## Iterative Algorithm

```
Function SelectionSort(arr, n):
  1. For i = 0 to n-2:
       min_index = i
       For j = i+1 to n-1 do:
         If arr[j] <= arr[min_index]:
           set min_index = j
       swap arr[i] & arr[min_index]
```

Full pseudocode:
```
For i = 0 to n-2:
  min_index = i
  For j = i+1 to n-1 do:
    If arr[j] <= arr[min_index]:
      set min_index = j
  swap arr[i] & arr[min_index]
```

---

## Recursive Algorithm

```
Function SelectionSort(arr, n, i):
  1. If i = n-1:
       return
  2. For j = i+1 to n-1 do:
       If arr[j] < arr[min_index]:
         set min_index = j
         set min_index = j
       swap arr[i] & arr[min_index]
  3. Call SelectionSort(arr, n, i+1)
  4. Stop
```

---

## Worked Example

```
Initial: [64, 25, 12, 22, 11]

Pass 1: min=11, swap → [11, 25, 12, 22, 64]
Pass 2: min=12, swap → [11, 12, 25, 22, 64]
Pass 3: min=22, swap → [11, 12, 22, 25, 64]
Pass 4: min=25, swap → [11, 12, 22, 25, 64]
Sorted: [11, 12, 22, 25, 64]
```
