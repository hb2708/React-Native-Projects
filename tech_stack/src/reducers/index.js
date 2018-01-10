import { combineReducers } from 'redux';
<<<<<<< HEAD
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
=======

export default combineReducers({
  libraries: () => []
>>>>>>> 5072e6c7d4245b552b7cce5b387df3c18f72e7a2
});
