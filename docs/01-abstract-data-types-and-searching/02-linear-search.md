---
sidebar_position: 2
---

# Linear Search

## Definition
Linear Search searches elements **sequentially** — one element at a time, starting from the leftmost element.

## Example
```
Array = [12, 45, 7, 22, 9],  X = 22
```
Compare each element one by one until X matches or the array ends.

---

## Algorithm (Pseudocode)

```
Algorithm LinearSearch(arr[], N, X):
  Start from the left-most element of array
  Compare each element of array one by one with X
  If arr[i] == X → return i   (element found)
  If X does not match any element → return -1
```

## Iterative Implementation

```
int search(int arr[], int N, int X):
  for (int i = 0; i < N; i++):
    if (arr[i] == X):
      return i
  return -1
```

### Parameters
| Symbol | Meaning |
|--------|---------|
| `N` | Size of array |
| `i` | Index |
| `-1` | Failure (element not found) |
| `0` | Successful return (index) |

---

## Recursive Implementation

```
LinearSearch(array[], n, item):
  if n == 0:
    print "Element not found"
  if array[n] == item:
    print "Element found at index n"
  LinearSearch(array[], n-1, item)
```

---

## Time Complexity

| Case | Complexity |
|------|-----------|
| Best | O(1) — element found in first attempt |
| Worst | O(n) — element found in n-th attempt or not found |

---

## Comparison: Linear vs Binary Search

| | Linear Search | Binary Search |
|--|--------------|--------------|
| **Data Order** | Works on unsorted data | Requires sorted data |
| **Approach** | Sequentially checks each element | Divides sorted data in half |
| **Time Complexity** | O(n) | O(log n) |
| **Efficiency** | Less efficient | More efficient |
| **Application** | Finding item in a small list | Search in a sorted phonebook |
