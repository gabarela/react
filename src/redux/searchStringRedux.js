// selectors

export const getSearchString = ({searchString}) => searchString; // zwraca wartosć własciwosci searchString zapisanej bezposrednio w stanie aplikacji
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length; 
export const countAllCards = ({cards}) => cards.length; 

// action name creator

const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload: payload, type: CHANGE });

// reducer
export default function reducer(statePart = ' ', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}


