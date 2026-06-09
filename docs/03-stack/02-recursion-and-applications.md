---
sidebar_position: 2
---

# Stack — Recursion & Applications

## Recursion

> **Definition:** Recursion is a function calling itself again and again with different input in a smaller subpart.

---

## Algorithm: Factorial

```
Algorithm Factorial(n):
  1. Define Function Factorial(n)
  2. If n == 0, return 1  ← base case
  3. Else return n multiplied by (n-1)
  4. Multiply the number by Factorial(n-1)
  5. Keep going till it hits 1
```

---

## Algorithm: Fibonacci Series

### Iterative
```
1. Set a = 0
2. Set b = 1
3. For i = 2 to n do:
     c = a + b
     a = b
     b = c
   [End for]
4. Print c
5. Stop
```

### Recursive
```
Function Fibonacci(n):
  1. If n == 0 → return 0
  2. If n == 1 → return 1
  3. Else → return Fibonacci(n-1) + Fibonacci(n-2)
```

---

## Algorithm: Sum of N Natural Numbers

### Iterative
```
1. Start
2. Sum = 0
3. i = 1
4. While i <= N do:
     sum = sum + i
     i = i + 1
   [End while]
5. Print sum
6. Stop
```

### Recursive
```
Function Sum(N):
  1. Start
  2. If N == 0 → return 0
  3. Else → return N + Sum(N-1)
  4. End
```

---

## Algorithm: Power of a Number (x^n)

### Iterative
```
1. Start
2. Read(x, n)
3. power = 1
4. For i = 1 to N do:
     power = power * x
   [End for]
5. Print power
6. End
```

### Recursive
```
Function Power(x, n):
  1. If n == 0 then return 1
  2. Else return x * Power(x, n-1)
  [End if]
```

---

## Stack Application: Balanced Parentheses

```
Function isValid(Parentheses string S):
  Stack = empty list
  
  For each ch in S do:
    If ch == '(' OR ch == '{' OR ch == '[':
      Push ch into stack
    
    Elif ch == ')' OR ch == '}' OR ch == ']':
      If stack is empty then return false
      
      top = pop from stack
      If NOT ((ch == ')' And top == '(') OR
              (ch == ']' And top == '[') OR
              (ch == '}' And top == '{')):
        return false    ← mismatched brackets
  [End for]
  
  If stack is empty → return True   ← all brackets matched
  Else → return False               ← unmatched opening brackets remain
[End Function]
```
