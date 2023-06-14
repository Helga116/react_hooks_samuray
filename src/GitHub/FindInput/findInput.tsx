import React, {useState} from "react";


type FindInputPropsType = {
    value: string
    setSearchTerm: (value: string) => void
    initial: string
    modalActive: boolean
    setModalActive: (value: boolean) => void
}
const FindInput = (props: FindInputPropsType) => {

    const [tempSearch, setTempSearch] = useState(props.value)
    const handleReset = () => {
        setTempSearch(props.initial)
        props.setSearchTerm(props.initial)
    }
    const handleClick = () => {
        props.setSearchTerm(tempSearch)
        props.setModalActive(true)
    }
    return(
        <div>
            <input
                type="text"
                placeholder="search"
                value={tempSearch}
                onChange={(e) => setTempSearch(e.currentTarget.value)}
            />
            <button onClick={handleClick}>Find</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}

export default FindInput