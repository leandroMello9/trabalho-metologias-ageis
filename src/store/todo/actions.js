export function addTodo(todo) {
  return {
    type: 'CREATE/TODO',
    payload: { todo },
  };
}
export function deleteTodo(todo) {
  const { id } = todo;
  return {
    type: 'REMOVE/TODO',
    payload: { id },
  };
}
