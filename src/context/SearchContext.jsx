import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [searchRequested, setSearchRequested] = useState(false)

    const value = { // separate value keeps the code neat if the code get of 100s of lines
        query,
        setQuery,
        loading,
        setLoading,
        searchRequested,
        setSearchRequested,
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}