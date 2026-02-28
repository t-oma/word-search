import { useCallback, useState } from "react";

import { calculateLineSelection } from "./helpers";
import type { Position } from "~/shared/types";

type UseDraggableSelectionReturn = {
  isDragging: boolean;
  dragStart: Position | null;
  startDragSelection: (row: number, col: number) => void;
  updateDragSelection: (row: number, col: number) => void;
  endDragSelection: () => void;
  resetSelection: () => void;
};

type UseDraggableSelectionProps = {
  onSelectionChange?: (positions: Position[]) => void;
};

function useDraggableSelection({
  onSelectionChange,
}: UseDraggableSelectionProps): UseDraggableSelectionReturn {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position | null>(null);

  const startDragSelection = useCallback(
    (row: number, col: number) => {
      const startPos = { row, col };
      setIsDragging(true);
      setDragStart(startPos);
      onSelectionChange?.([startPos]);
    },
    [onSelectionChange]
  );

  const updateDragSelection = useCallback(
    (row: number, col: number) => {
      if (!isDragging || !dragStart) return;

      const endPos = { row, col };
      const newSelection = calculateLineSelection(dragStart, endPos);

      onSelectionChange?.(newSelection);
    },
    [isDragging, dragStart, onSelectionChange]
  );

  const endDragSelection = useCallback(() => {
    setIsDragging(false);
    setDragStart(null);
    // Keep selectedPositions for submission
  }, []);

  const resetSelection = useCallback(() => {
    setIsDragging(false);
    setDragStart(null);
    onSelectionChange?.([]);
  }, [onSelectionChange]);

  return {
    isDragging,
    dragStart,
    startDragSelection,
    updateDragSelection,
    endDragSelection,
    resetSelection,
  };
}

export { useDraggableSelection };
export type { UseDraggableSelectionReturn, UseDraggableSelectionProps };
