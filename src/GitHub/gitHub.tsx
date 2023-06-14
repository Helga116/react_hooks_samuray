import React, {useState} from "react";
import s from "./gitHub.module.css"
import FindInput from "./FindInput/findInput";
import UsersList from "./UsersList/usersList";
import UserDetails from "./UserDetails/userDetails";
import {Modal} from "./modal";

export interface SearchUserType {
    login: string,
    id: number,
    avatar_url: string,
    followers_url: string
}
export type SearchResult = {
    items: SearchUserType
}
export interface UserType extends SearchUserType {}
const GitHub = () => {
    const [modalActive, setModalActive] = useState(false)
    const initialSearchState = "it-kamasutra"
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [searchTerm, setSearchTerm] = useState(initialSearchState)

    return(
        <div className={s.container}>
            <div>
                <FindInput value={searchTerm} setSearchTerm={setSearchTerm} initial={initialSearchState} modalActive={modalActive} setModalActive={setModalActive}/>

                <UsersList searchTerm={searchTerm} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            </div>
            <div>
                <UserDetails key={selectedUser?.id} selectedUser={selectedUser}/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Something bla bla Something bla bla Something bla bla Something bla bla</p>
            </Modal>
        </div>
    )
}

export default GitHub