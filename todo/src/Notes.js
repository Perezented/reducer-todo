function Notes() {
    // Immutability - not mutating

    // Shallow check
    const objOne = { text: 'Hello!' };
    const objTwo = { text: 'Hello!' };

    console.log(objOne === objTwo); // ==> false

    // React uses Shallow checks to determine if state or props have changed

    // Primitive Types vs Reference Types

    // Primitive Types
    // string, bool, number, null, undefined, symbol

    const num = 5;

    let newNum = num;
    newNum++;

    console.log(num, newNum);

    // Reference Types
    // objects, arrays, functions

    const person = { name: 'Dustin', age: 33 };

    //mutable pattern
    // const newPerson = person;//person===newPerson
    //newPerson.name = 'Buddy Dusters';// Side effect (changes person.name)

    //immutable pattern
    //create a brand new object for newPerson instead of 'copying' person
    // const newPerson = { ...person };//copy and paste for JS (spread operator)
    //person =/= newPerson
    const newPerson = { ...person, name: 'Buddy Dusters' };
    console.log(person, newPerson); // ==> ??

    //Reducers - update
    //in React, reducer functions take in the current state and an action object, and return a new state object.

    //action object, simply objects that inform the reduce of some action that has taken place in the UI, so that the reducer knows how to update state
    //Action _MUST_ hav e a'type' property
    //actions may also have a payload property to pass data to the reducer

    /* REACT SOURCE CODE */
    let currentState = { make: 'Chevy', model: 'Corvette', year: 2020 };

    const dispatch = (action) => {
        currentState = reducer(currentState, action);
    };
    /*********************/

    const initialState = { make: 'Chevy', model: 'Corvette', year: 2020 };
    // under the hood react will call dispatch one time to initialize state
    // dispatch({ type: 'RANDOM_STRING' })
    console.log('initial state', currentState);

    function reducer(currentState, action) {
        if (action.type === 'UPDATE_YEAR') {
            return {
                ...currentState,
                year: currentState.year + 1,
            };
        } else if (action.type === 'GO_OLD_SCHOOL') {
            return {
                ...currentState,
                year: action.payload,
            };
        } else {
            return currentState;
        }
    }

    // User clicks button called "GET NEWEST YEAR"
    // run a function that updates our state with the newest year
    dispatch({ type: 'UPDATE_YEAR' });
    console.log('update year', currentState);

    // User clicks button called "Go Old School" and fills in a preferred year
    // run a function that updates our state with the newest year
    dispatch({ type: 'GO_OLD_SCHOOL', payload: 1968 });
    console.log('going old school', currentState);

    // const newState = reducer(state, actionObject)
    // // ==> { make: "Chevy", model: 'Corvette', year: 2021 }

    // console.log('update year',newState);

    // const secondAction = { type: 'GO_OLD_SCHOOL', payload: 1968 }

    // const newerState = reducer(newState, secondAction);

    // console.log('Going old school', newerState);
}
export default Notes;
