---
sidebar_position: 1
---

# Bubble Sort

## Concept
Repeatedly compare adjacent elements and swap them if they are in the wrong order. After each pass, the largest unsorted element "bubbles" to its correct position.

## Time Complexity
| Case | Complexity |
|------|-----------|
| Best | O(n) — already sorted |
| Average | O(n²) |
| Worst | O(n²) |

---

## Iterative Algorithm

```
Function BubbleSort(Array, n):
  1. For i = 0 to n-1:
       swapped = false
  2. For j = 0 to n-1:
  3. If arr[j] > arr[j+1]:
       swap arr[j] & arr[j+1]
       swapped = true
  4. If swapped == false:
       break
```

---

## Recursive Algorithm

```
Function BubbleSort(Array, n):
  1. If n <= 1:
       return              ← base case (1 or 0 elements, already sorted)
  2. For i = 0 to n-1 do:
       If arr[i] > arr[i+1]:
         swap arr[i] & arr[i+1]
  3. Call BubbleSort(array, n-1)
  4. Stop
```

---

## Worked Example

```
Initial: [64, 34, 25, 12, 22, 11, 90]

Pass 1: [34, 25, 12, 22, 11, 64, 90]
Pass 2: [25, 12, 22, 11, 34, 64, 90]
Pass 3: [12, 22, 11, 25, 34, 64, 90]
...
Sorted: [11, 12, 22, 25, 34, 64, 90]
```
