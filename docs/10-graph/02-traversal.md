---
sidebar_position: 2
---

# Graph — Traversals (DFS & BFS)

## Two Methods of Graph Traversal

| Method | Full Name | Uses | Order |
|--------|-----------|------|-------|
| **DFS** | Depth First Search | Stack | Deep first, then backtrack |
| **BFS** | Breadth First Search | Queue | Level by level |

---

## A. Depth First Search (DFS)

> Explores as **deep as possible** along each branch before backtracking.

### Algorithm
```
DFS(Graph, start):
  1. Push start node onto Stack
  2. Mark start as visited
  3. While Stack is not empty:
       node = Stack.pop()
       print node
       For each neighbor of node (in reverse order):
         If neighbor not visited:
           Push neighbor onto Stack
           Mark as visited
```

### DFS Example (from class notes)
```
Graph:
    A
   /|\
  B F G
  |\ \  \
  C I D  H
  |  \
  E   J
       \
        K

DFS from A:
Stack trace:
Stack        | Print
A            | A
E, D, B      | B
E, D, F, C   | F
E, D, I, G   | G
E, D, I, C   | C (from G side)
E, D, I      | I
E, D, H      | H
E, D         | D
E            | E

DFS Order: A → B → F → G → C → I → H → D → E
```

### Another DFS trace (from notes)
```
DFS: A B F G C I H D E
```

---

## B. Breadth First Search (BFS)

> Explores all nodes at the **current level** before moving to the next level.

### Algorithm
```
BFS(Graph, start):
  1. BFS will use Queue and perform level by level
     after visiting the first node
  2. After first → second
  
  Enqueue(start)
  Mark start as visited
  While Queue is not empty:
    node = Dequeue()
    print node
    For each neighbor of node:
      If neighbor not visited:
        Enqueue(neighbor)
        Mark as visited
```

### BFS Example 1 (from class notes)
```
BFS starting from A:
A → BDE → FCH → G I

Order: A B D E F C H G I
```

### BFS Example 2 (from class notes)
```
Graph with nodes A, B, C, D, E, F, G, J, K

BFS from A:
A → B, C, F
B → C, A (already visited)
C → F (already visited)
...

BFS: A → B → C → G → D → F → J → K → ...
```

### BFS Trace Table (from class notes)
```
Queue → BFS output

A → B, C, F         | A B C F
B → C, A            | B → C G (A visited)
C → F               | C → F (visited)
...

Full BFS: A B F G C I H D E
```

---

## DFS vs BFS Comparison

| Feature | DFS | BFS |
|---------|-----|-----|
| **Data Structure** | Stack | Queue |
| **Memory** | O(h) — height of tree | O(w) — width of tree |
| **Complete?** | Not always (infinite graphs) | Yes (finite graphs) |
| **Optimal?** | No | Yes (unweighted graphs) |
| **Use Case** | Cycle detection, topological sort | Shortest path (unweighted), level order |

---

## DFS Full Trace (Second example from notes)

```
Graph:
A → B,C,F  |  B → C,A  |  C → F  |  D → B,C  |  E → C,D,J
F → H      |  G → A,I  |  H → -  |  I → B,G  |  J → D,K

Stack:     | Print:  | BFS:
A          | A       | A→B→C→G→D→F→J→K→...
E,D,B      | B       |
E,D,F,C    | F       |
...

DFS: A B G E J K D C F H I
```
