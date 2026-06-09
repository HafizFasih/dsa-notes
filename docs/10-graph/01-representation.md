---
sidebar_position: 1
---

# Graph — Introduction & Representation

## Definition
A **Graph** is a general non-linear data structure used to represent complex relationships. It is composed of 2 main components:

| Component | Description |
|-----------|-------------|
| **Vertices (Nodes)** | Represent individual entities |
| **Edges (Links)** | Represent relationships/connections between nodes |

**Mathematical Representation:** `G = (V, E)`

> No concept of root or parent/child hierarchy (unless defined).

---

## Types of Graphs

### 1. Undirected Graph
- Edges are **bidirectional** (no arrows)
- If A connects to B, then B connects to A
- Notation: `A - B`

```
    1 --- 2
    |     |
    3 --- 4
```

### 2. Directed Graph (Digraph)
- Edges have a **specific direction** (arrows)
- Notation: `A → B`

```
    1 → 2
    ↑   ↓
    4 ← 3
```

### 3. Weighted Graph
- Edges carry a **value** (weight/cost)

```
    1 --5-- 2
    |       |
    4   8   3
    |       |
    4 --7-- 3
```

### 4. Unweighted Graph
- Edges have **no weights**

### 5. Cyclic Graph
- Contains at least one **cycle** (path that starts and ends at the same vertex)

### 6. Acyclic Graph
- Does **not contain any cycles** — flows in one direction

### 7. Complete (Dense) Graph
- **Every vertex** is connected to every other vertex
- Every complete graph is connected, but not every connected graph is complete

### 8. Sparse Graph
- Has very **few edges** compared to the number of vertices

### 9. Connected Graph
- There is a **path between every pair** of vertices

### 10. Disconnected Graph
- Some vertices have **no path** to others

---

## Graph Representations

### Adjacency List (from class example)

```
Graph (9 nodes: A – I):

      G ─── A ─── E
      │    / \     \
      I   B   D     H
      │   │   │
      └── B   C ───(also → B, D)
          │
          F
```

| Node | Adjacent Nodes |
|------|---------------|
| A | B, D, E |
| B | F |
| C | B, D |
| D | C, H |
| E | H |
| F | — |
| G | A, I |
| H | — |
| I | B, G |

### Adjacency Matrix
- Row and column represent vertices
- `1` = edge exists, `0` = no edge
- For undirected: matrix is **symmetric**

---

## Visual Types Reference

```
Acyclic          Connected       Disconnected

1 → 2 → 3        1 - 2           1   3
↓               /|   |\          |   |
4               3 5   6 7        2   4

Sparse           Dense (Complete)    Cyclic

1 - 2            1 - 2 - 3           1 → 2
|                |\ /|\ /|           ↑   ↓
3                | X | X |           4 ← 3
                 |/ \|/ \|
                 4 - 5 - 6
```
