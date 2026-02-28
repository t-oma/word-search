# Word Selection

The word selection feature provides drag-to-select functionality for the Word Search game. Users can select letters by clicking and dragging across the grid.

## Overview

The word selection feature enables:

- **Click and drag** to select letters in a straight line
- **Horizontal selection** - left to right or right to left
- **Vertical selection** - top to bottom or bottom to top
- **Diagonal selection** - any diagonal direction
- **Word validation** - ensures selection is in a valid direction

## How It Works

```
User Interaction Flow:

┌─────────────────────────────────────────────────────────────┐
│                    useDraggableSelection                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. MOUSE DOWN (on cell)                                     │
│     └── startDragSelection(row, col)                      │
│         └── Set isDragging = true                         │
│         └── Store dragStart position                       │
│         └── Emit initial position                          │
│                                                              │
│  2. MOUSE MOVE (over cells)                                 │
│     └── updateDragSelection(row, col)                     │
│         └── Calculate line from start to current          │
│         └── Emit all positions in the line                │
│                                                              │
│  3. MOUSE UP                                                │
│     └── endDragSelection()                                │
│         └── Set isDragging = false                        │
│         └── Keep selected positions for submission         │
│                                                              │
│  4. RESET (optional)                                        │
│     └── resetSelection()                                  │
│         └── Clear all positions                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Selection Rules

The selection must be in a **straight line**:

| Direction  | Valid | Example                |
| ---------- | ----- | ---------------------- |
| Horizontal | ✅    | left→right, right→left |
| Vertical   | ✅    | top→bottom, bottom→top |
| Diagonal   | ✅    | any diagonal angle     |
| Arbitrary  | ❌    | L-shaped, curved, etc. |

### Valid Selection Examples

```
Horizontal:        Vertical:           Diagonal:

A B C D E         A . . . E          A . . . I
. . . . .         B . . . .          . B . . H
. . . . .         C . . . .          . . C . G
. . . . .         D . . . .          . . . D F
. . . . .         E . . . .          . . . . E
```

### Invalid Selection

If user drags in a non-straight line, only the **end position** is selected:

```
Invalid (L-shaped):     Result:

A B C                  Only C is selected
. . D                  (end position only)
. . .
```
