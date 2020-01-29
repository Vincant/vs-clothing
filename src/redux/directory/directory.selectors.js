import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;
// used in directory.component
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);