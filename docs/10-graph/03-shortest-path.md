---
sidebar_position: 3
---

# Graph — Shortest Path: Dijkstra's Algorithm

## Overview
**Dijkstra's Algorithm** finds the **shortest path** from a source node to all other nodes in a weighted graph.

> Works on **positive weights only**.

---

## Key Idea

1. Maintain a table of distances from the source
2. Start from the source node, set its distance = 0
3. Repeatedly choose the **unvisited node with the smallest distance** and make it the current node
4. **Update (relax)** the distances of its neighbors:
   ```
   new distance = distance(current node) + weight(current → neighbor)
   ```
5. If new distance < previous distance → **update** the neighbor's distance

---

## Algorithm

```
Algorithm Dijkstra(Graph, source):
  1. Initialize distance table:
       dist[source] = 0
       dist[all others] = ∞
  2. Create a set of unvisited nodes
  3. While unvisited set is not empty:
       a. Pick node u with minimum dist[u]  ← current node
       b. Mark u as visited
       c. For each neighbor v of u:
            new_dist = dist[u] + weight(u, v)
            If new_dist < dist[v]:
              dist[v] = new_dist   ← relaxation
  4. Return dist[] table
```

---

## Relaxation Explained

```
Relaxation:
  new distance = distance of current node + weight(current → neighbor)

  If new distance < previous stored distance:
    Update the distance of the neighbor
```

---

## Worked Example

```
Graph:
    A --4-- B
    |       |
    2       3
    |       |
    C --1-- D
    \       /
     5     6
      \   /
       \ /
        E

Source = A

Initial dist table:
  A=0, B=∞, C=∞, D=∞, E=∞

Step 1: Current = A (dist=0)
  Neighbors: B(4), C(2)
  dist[B] = 0+4 = 4 < ∞ → update
  dist[C] = 0+2 = 2 < ∞ → update
  Table: A=0, B=4, C=2, D=∞, E=∞

Step 2: Current = C (dist=2, smallest unvisited)
  Neighbors: D(1), E(5)
  dist[D] = 2+1 = 3 < ∞ → update
  dist[E] = 2+5 = 7 < ∞ → update
  Table: A=0, B=4, C=2, D=3, E=7

Step 3: Current = D (dist=3)
  Neighbors: B(3), E(6)
  dist[B] = 3+3 = 6 > 4 → no update
  dist[E] = 3+6 = 9 > 7 → no update
  Table: A=0, B=4, C=2, D=3, E=7

Step 4: Current = B (dist=4)
  No better paths found

Step 5: Current = E (dist=7)
  No unvisited neighbors

Final shortest distances from A:
  A=0, B=4, C=2, D=3, E=7
```

---

## Key Properties

| Property | Detail |
|----------|--------|
| **Works on** | Non-negative (positive) weights only |
| **Time Complexity** | O(V²) simple / O((V+E) log V) with priority queue |
| **Greedy approach** | Always picks the closest unvisited node |
| **Finds** | Shortest path from ONE source to ALL nodes |

---

## DFS and BFS Traces (Class Examples)

### Graph from notes:
```
Nodes: A, B, C, D, E, F, G, J, K (with edges)

DFS Stack Trace:
Stack    | Print | BFS
A        | A     | A→B→C→G→D→F→J→K
E,D,B    | B     |
E,D,F,C  | F     |
E,D,I,G  | G     |
E,D,I,C  | C     |
E,D,I    | I     |
E,D,H    | H     |
E,D      | D     |
E        | E     |
-        | -     |

DFS output: A B G E J K D C F H I
BFS output: A B C G D F J K ...
```

### Adjacency Table
```
Nodes  | Adjacent Nodes
-------|---------------
A      | B, D, E
B      | C, A
C      | F
D      | B, C
E      | C, D, J
F      | H
G      | A, I
H      | —
I      | B, G
J      | D, K
K      | —
```
