# useDraggableSelection

A React hook for handling drag-to-select functionality in the Word Search grid.

## Overview

This hook manages the selection of letters through mouse/touch dragging. It calculates which cells are selected based on the drag start and current position, ensuring selections are in valid straight lines (horizontal, vertical, or diagonal).

## Parameters

```typescript
type UseDraggableSelectionProps = {
  onSelectionChange?: (positions: Position[]) => void;
};
```

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>onSelectionChange</code></td>
      <td><code>((positions: Position[]) =&gt; void)?</code></td>
      <td>Callback fired when selection changes</td>
    </tr>
  </tbody>
</table>

See [Position](../../shared/types#position) for more details.

## Return

```typescript
type UseDraggableSelectionReturn = {
  isDragging: boolean;
  dragStart: Position | null;
  startDragSelection: (row: number, col: number) => void;
  updateDragSelection: (row: number, col: number) => void;
  endDragSelection: () => void;
  resetSelection: () => void;
};
```

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>isDragging</code></td>
      <td><code>boolean</code></td>
      <td>Whether the user is currently dragging</td>
    </tr>
    <tr>
      <td><code>dragStart</code></td>
      <td><code>Position</code></td>
      <td>The starting position of the drag</td>
    </tr>
    <tr>
      <td><code>startDragSelection</code></td>
      <td><code>(row: number, col: number) =&gt; void</code></td>
      <td>Call on mouse down</td>
    </tr>
    <tr>
      <td><code>updateDragSelection</code></td>
      <td><code>(row: number, col: number) =&gt; void</code></td>
      <td>Call on mouse move</td>
    </tr>
    <tr>
      <td><code>endDragSelection</code></td>
      <td><code>() =&gt; void</code></td>
      <td>Call on mouse up</td>
    </tr>
    <tr>
      <td><code>resetSelection</code></td>
      <td><code>() =&gt; void</code></td>
      <td>Clear the selection</td>
    </tr>
  </tbody>
</table>

See [Position](../../shared/types#position) for more details.

## Functions

### startDragSelection(row, col)

Called when the user presses the mouse button on a cell.

```typescript
startDragSelection(row: number, col: number): void
```

- Sets `isDragging` to `true`
- Stores the starting position
- Emits the initial position via `onSelectionChange`

### updateDragSelection(row, col)

Called as the user drags across cells.

```typescript
updateDragSelection(row: number, col: number): void
```

- Calculates all positions between start and current position
- Only emits positions in a valid straight line
- If the path is not a straight line, only emits the end position
- Emits updated positions via `onSelectionChange`

### endDragSelection()

Called when the user releases the mouse button.

```typescript
endDragSelection(): void
```

- Sets `isDragging` to `false`
- Clears `dragStart`
- Keeps the selected positions for submission

### resetSelection()

Resets the selection state.

```typescript
resetSelection(): void
```

- Sets `isDragging` to `false`
- Clears `dragStart`
- Emits an empty array via `onSelectionChange`

## Usage

```tsx
import { useDraggableSelection } from "~/features/word-selection";
import type { Position } from "~/shared/types";

function WordSearchGrid() {
  const [selectedPositions, setSelectedPositions] = useState<Position[]>([]);

  const {
    isDragging,
    dragStart,
    startDragSelection,
    updateDragSelection,
    endDragSelection,
    resetSelection,
  } = useDraggableSelection({
    onSelectionChange: (positions) => {
      setSelectedPositions(positions);
    },
  });

  return (
    <button
      onMouseDown={(e) => startDragSelection(row, col)}
      onMouseMove={(e) => updateDragSelection(row, col)}
      onMouseUp={endDragSelection}
    >
      {/* Grid cells */}
    </button>
  );
}
```

## Selection Algorithm

The hook uses [calculateLineSelection()](./helpers#calculatelineselection) to determine which cells are selected:

```typescript
function calculateLineSelection(
  startPos: Position,
  endPos: Position
): Position[];
```

### Logic

1. Calculate the difference in rows and columns
2. Check if the selection is valid:
   - **Horizontal**: `rowDiff === 0`
   - **Vertical**: `colDiff === 0`
   - **Diagonal**: `rowDiff === colDiff`
3. If valid, calculate all positions in the line
4. If invalid, return only the end position

### Example Calculations

```
Start: {row: 0, col: 0}, End: {row: 3, col: 0} (Vertical)
Result: [{row: 0, col: 0}, {row: 1, col: 0}, {row: 2, col: 0}, {row: 3, col: 0}]

Start: {row: 0, col: 0}, End: {row: 2, col: 2} (Diagonal)
Result: [{row: 0, col: 0}, {row: 1, col: 1}, {row: 2, col: 2}]

Start: {row: 0, col: 0}, End: {row: 2, col: 1} (Invalid)
Result: [{row: 2, col: 1}] (only end position)
```
