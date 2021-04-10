import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';

/**
 * React component for the Difficulty Selector.
 */
export const Difficulty = (props) => {
  let { difficulty } = useSudokuContext();

  return (
    <div className="status__difficulty">
      <span className="status__difficulty-text">Schwierigkeit:&nbsp;&nbsp;</span>
      <select name="status__difficulty-select" className="status__difficulty-select" defaultValue={difficulty} onChange={props.onChange}>
        <option value="Easy">ab 67</option>
        <option value="Medium">ab 70</option>
        <option value="Hard">ab 75</option>
      </select>
    </div>
  )
}