---
sidebar_position: 2
---

# BST — Pseudocodes

## 1. Insertion

```
Function Insert(root, value):
  If root is None:
    return NewNode(value)
  If value < root.data:
    root.left = Insert(root.left, value)
  Else If value > root.data:
    root.right = Insert(root.right, value)
  return root
```

---

## 2. Search

```
Function search(root, n):
  If root is None:
    return false
  If root.data == n:
    return true
  If n < root.data:
    return search(root.left, n)
  Else:
    return search(root.right, n)
```

---

## 3. Delete

```
Function delete(root, n):
  If root is None:
    return root

  If n < root.data:
    root.left = delete(root.left, n)
  Else If n > root.data:
    root.right = delete(root.right, n)
  Else:
    # Node found — handle 3 cases:

    # CASE #01: No child (leaf node)
    If root.left is None and root.right is None:
      return None

    # CASE #02: One child
    Else If root.left is None:
      return root.right
    Else If root.right is None:
      return root.left

    # CASE #03: Two children
    Else:
      temp = FindMin(root.right)      ← inorder successor
      root.data = temp.data
      root.right = delete(root.right, temp.data)

  return root
```

### Helper: FindMin
```
Function FindMin(node):
  While node.left is not None:
    node = node.left
  return node
```

---

## 4. Traversals (In-order, Pre-order, Post-order)

```
Function inorder(root):
  If root is not None:
    inorder(root.left)
    print(root.data)
    inorder(root.right)

Function preorder(root):
  If root is not None:
    print(root.data)
    preorder(root.left)
    preorder(root.right)

Function postorder(root):
  If root is not None:
    postorder(root.left)
    postorder(root.right)
    print(root.data)
```

---

## Note on In-order Traversal for BST
> In-order traversal of a BST always gives elements in **sorted (ascending) order**.
> This is a key property used in applications like sorting.
