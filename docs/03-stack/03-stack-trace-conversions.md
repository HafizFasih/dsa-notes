---
sidebar_position: 3
---

# Stack Trace for Expression Conversions

## Postfix Evaluation Using Stack

**Expression from notes:** `2 5 3 6 + * * 6 / 2`
(Written in notes as `*2536+**6/2` where the leading `*` is a bullet point marker, not an operator)

**Rule:** When a number is scanned → **push**. When an operator is scanned → **pop two operands**, apply operator, **push result**.

> Stack notation: `[bottom, ..., top]`

| Token | Action | Stack |
|-------|--------|-------|
| 2 | push 2 | [2] |
| 5 | push 5 | [2, 5] |
| 3 | push 3 | [2, 5, 3] |
| 6 | push 6 | [2, 5, 3, 6] |
| + | pop 6, pop 3, push(3+6=**9**) | [2, 5, 9] |
| * | pop 9, pop 5, push(5×9=**45**) | [2, 45] |
| * | pop 45, pop 2, push(2×45=**90**) | [90] |
| 6 | push 6 | [90, 6] |
| / | pop 6, pop 90, push(90/6=**15**) | [15] |
| 2 | push 2 | [15, 2] |

**Final result = 15** (if no trailing operator) or **13** if there's a final `−` operator (15−2=13)

---

## Infix to Prefix Conversion

**Expression from notes:** approx. `P + C * (Q * R) / (S - T)` (exact expression hard to read from handwriting)

**Rules for Infix → Prefix:**
- Scan from **right to left**
- Reverse the final output at the end

| Symbol Scanned | Stack | Output |
|----------------|-------|--------|
| ) | ) | — |
| ) | )) | — |
| T | )) | T |
| - | ))- | T |
| S | ))- | TS |
| ( | ) | TS- |
| / | )/ | TS- |
| ) | )/) | TS- |
| R | )/) | TS-R |
| * | /)* | TS-R |
| Q | /)* | TS-RQ |
| ( | )/ | TS-RQ* |
| C | )/ | TS-RQ*C |
| + | )/+ | TS-RQ*C |
| P | )/+ | TS-RQ*CP |
| (end) | — | TS-RQ*CP+/ |

**Reverse output** → Prefix: `/ + P C * Q R - T S`

---

## Infix to Postfix Conversion

**Rules:**
1. Scan from **left to right**
2. If operand → output immediately
3. If operator → check precedence:
   - If stack is empty or `(` on top → push
   - If incoming has **higher** precedence → push
   - Else → pop and output until lower precedence, then push
4. If `)` → pop until `(` is found (don't output parentheses)
5. At end → pop all remaining operators to output

### Precedence Table

| Operator | Precedence |
|----------|-----------|
| `^` | Highest (3) |
| `*`, `/` | Medium (2) |
| `+`, `-` | Lowest (1) |

---

## Second Postfix Evaluation (from notes page 18)

**Expression:** `6 - / * 2 * 5 + 3 6 / 2` (approximate read from notes)

| Token | Action | Stack |
|-------|--------|-------|
| 2 | push 2 | [2] |
| * | pop 2, pop 5, push(2×5=**10**)... | varies |
| 5 | push 5 | ... |
| 4 | push 4 | ... |
| 6 | push 6 | ... |
| + | pop 6, pop 4, push(4+6=**10**) | ... |

> Note: The second trace in the notes (page 18) is a continuation/new example. The exact expression is hard to read from the handwritten notes — use the first trace above as the primary reference.
