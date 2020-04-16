export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const selectedEmployee = (selectedEmployee) => ({
  type: 'SELECT_EMPLOYEE',
  employee: selectedEmployee,
});
