import { createSelector } from 'reselect';

const selectUser = state => state.user;
// used in App.component, header.component
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);