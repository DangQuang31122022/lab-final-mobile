export const addJob = (job) => ({
  type: 'ADD_JOB',
  payload: job,
});

export const deleteJob = (id) => ({
  type: 'DELETE_JOB',
  payload: id,
});

export const editJob = (id, data) => ({
  type: 'EDIT_JOB',
  payload: { id, data },
});
