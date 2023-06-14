import s from "../gitHub.module.css";
import React, {useEffect, useState} from "react";
import {SearchResult, SearchUserType} from "../gitHub";
import axios from "axios";


type UsersListPropsType = {
    searchTerm: string
    selectedUser: SearchUserType | null
    setSelectedUser: (user: SearchUserType) => void
}
const UsersList = (props: UsersListPropsType) => {
    const [users, setUsers] = useState<SearchUserType[]>([])
    useEffect(() => {
        let ignore = false
        async function startFetching() {
            let ignore = false
            const {data} = await axios
                .get<SearchResult>(`https://api.github.com/search/users?q=${props.searchTerm}`)
            if (!ignore) {
                setUsers(data.items)
            }
        }
        startFetching()
        return () => {
            ignore = true
        }
    }, [props.searchTerm])
    return(
        <ul>
            {users.map(u => (
                <li key={u.id} className={props.selectedUser?.id === u.id ? s.selected : ""} onClick={() => props.setSelectedUser(u)}>{u.login}</li>
            ))}
        </ul>
    )
}
export default UsersList