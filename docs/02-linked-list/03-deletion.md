---
sidebar_position: 3
---

# Linked List — Deletion Operations

## Delete Operation (General Algorithm)

```
Write an algorithm to update the k-th position of an
array with the element ITEM. The size of an array is n.

DELETE OPERATION:
1. Start
2. Initialize Counter: set J = N
3. Repeat steps 4 & 5 while J == k:
4. Set Arr[JJ] = Arr[CJ+1]
5. Set J = J + 1
6. Set N = N - 1
7. Stop
```

---

## Delete by Value in Singly Linked List

### Case 1: Delete from Front
```
Algorithm (Front deletion):
1. If head == NULL → print "List is empty", stop
2. If (list.data == VAL) then:
     ptr = list
     list = Next(list)
     Delete ptr
     Stop
3. Back = list
   ptr = list
4. While (ptr != NULL) repeat step 3:
5. If (Next(back) = next(ptr)):
     Delete ptr
   End
6. Back = ptr
7. ptr = Next(ptr)
   [End of while loop]
8. End
```

### Case 2: Delete by Value (Traversal)
```
Temp = first
while (temp != NULL):
  If (temp.data == Value):
    first = first.next
    Delete first node
    Stop
  Back = first
  ptr = first.next
  While (curr != NULL):
    If (curr.data == value):
      back.next = current.next
      Delete curr
      Stop
    back = curr
    curr = curr.next
  [End while]
print "value not found"
```

### Pseudocode (Deletion — Two Pointer Approach)
```
1. Res = ID
   If (list == NULL) stop
2. If (data(list) == VAL) then:
     ptr = list
     list = Next(list)
     Delete ptr
     Stop
   Back = list
   ptr = list
3. While (ptr != NULL) repeat step 3 & 4 & 5:
     If (Next(back) = next(ptr)):
       Delete ptr
   End
4. Back = ptr
5. ptr = Next(ptr)
   [End of while loop]
6. End
```

---

## Delete Employee Record (Application)

### Problem
A linked list stores employees. Write an algorithm:
- (i) When an employee joins
- (ii) If an employee leaves
- (iii) If administration searches an employee

### Algorithm (i) — Join (Insert at beginning)
```
1. Create a new node (X = new node)
2. Read(Data(n))
3. If (first == NULL) then:
     first = X
     next(n) = null
   Else:
     next(n) = first
     first = X
4. End
```

### Algorithm (ii) — Leave (Delete)
```
1. ptr = list
2. while (ptr != NULL) repeat steps 3 & 4:
3. If (Data(ptr) == Emp-ID) then:
     print "Employee found"
   End
4. ptr = next(ptr)
   [End of while loop]
5. print "employee not found"
6. Stop
```

### Algorithm (iii) — Search (Administration)
```
Temp = first
while (temp != NULL):
  If (temp.data == Emp-ID) then:
    print "found"
  temp = temp.next
  print "employee not found"
```
