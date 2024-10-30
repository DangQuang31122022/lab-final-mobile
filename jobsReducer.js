const initialState = {
  jobs: [],
};

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_JOB':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'DELETE_JOB':
      return { ...state, jobs: state.jobs.filter((job) => job.id !== action.payload) };
    case 'EDIT_JOB':
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? { ...job, ...action.payload.data } : job
        ),
      };
    default:
      return state;
  }
}