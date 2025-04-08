import React from 'react';
import { List, Paper, Typography } from '@mui/material';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onDelete }) => {
  // Check if todos is undefined or not an array
  if (!todos || !Array.isArray(todos)) {
    return (
      <Paper elevation={3} style={{ margin: '20px 0', padding: '20px' }}>
        <Typography>No todos available</Typography>
      </Paper>
    );
  }

  // If todos is empty array
  if (todos.length === 0) {
    return (
      <Paper elevation={3} style={{ margin: '20px 0', padding: '20px' }}>
        <Typography>No todos yet. Add one above!</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} style={{ margin: '20px 0' }}>
      <List>
        {todos.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList; 