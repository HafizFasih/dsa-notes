---
sidebar_position: 4
---

# Linked List — Search Operation

## Search for a Specific Value

### Algorithm
```
Value = value to be searched
List = head pointer
ptr = traversal pointer

1. pts = list
2. while (pts != NULL) repeat steps 3 & 4:
3. If (Data(pts) == VAL) then:
     print "Value found"
   End
4. pts = next(pts)
   [End of while loop]
5. print "Value not found"
6. Stop
```

---

## Find Largest Element (Linear Search on Linked List)

```
Start
Declare variables N, i, largest
Read the size of an array: N
Set largest = arr[0]
Repeat loop from i=1 to N-1:
  If arr[i] > largest:
    then set largest = arr[i]
Display largest
```

---

## Find Smallest Element

```
1. min = arr[0]
2. For i = 1 to n-1:
3. If arr[i] < min:
     min = arr[i]
   [End if]
4. Print min
```

---

## Update an Element

```
If n < pos < 0:
  print "Position not found"
  stop
arr[pos] = ITEM
stop
```

---

## Array Operations Summary

| Operation | Key Steps |
|-----------|-----------|
| **Display** | For i=0 to n-1: print arr[i] |
| **Insert** | Shift elements right, place ITEM at pos |
| **Remove** | Shift elements left from pos+1 |
| **Update** | arr[pos] = ITEM |
| **Largest** | Traverse, track max |
| **Smallest** | Traverse, track min |
