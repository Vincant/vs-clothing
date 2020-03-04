import { DirectoryActionTypes } from './directory.types';

export const updateSections = collectionsMap => ({
  type: DirectoryActionTypes.UPDATE_SECTIONS,
  payload: collectionsMap
});