import { useReducer, useEffect, useContext, createContext } from 'react'


const initialState = {
    covidData: {},
    lang: 'uk',
    typeData: `world`,
    searchQuery: '',
    sortingParams: {
        key: "confirmed",
        order: -1
    }
}

const DataContext = createContext(initialState)

export function useData() {
    return useContext(DataContext)
}

export function DataProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        (async function () {
            const currentDate = new Date().toJSON().split('T')[0]
            const response = await fetch(`https://api-covid19.rnbo.gov.ua/data?to=${currentDate}`)
            const jsonData = await response.json()
            dispatch({type: 'INIT', payload: jsonData})
        })()
    }, [])
    useEffect(() => {
    }, [state])
    return <DataContext.Provider value={[state, dispatch]}>{children}</DataContext.Provider>
}

function reducer(state, action) {
    switch (action.type) {
        case `INIT`: {
            return {...state, covidData: action.payload}
        }
        case `CHANGE_TYPEDATA`: {
            console.log(action.payload);
            return {...state, typeData: action.payload}
        }
        case `CHANGE_LANG`: {
            return {...state, lang: action.payload}
        }
        case `CHANGE_SEARCH_QUERY`: {
            if (state.searchQuery !== action.payload) {
                return {...state, searchQuery: action.payload}
            }
            return state
        }
        case `CHANGE_SORTING_PARAMS`: {
            if (JSON.stringify(state.sortingParams) !== JSON.stringify(action.payload)) {
                return {...state, sortingParams: action.payload}
            }
            return state
        }
        default:
            throw new Error(`Unkwnown action.type! (${action.type})`)
    }
}