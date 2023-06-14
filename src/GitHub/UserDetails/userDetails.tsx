import React, {useEffect, useState} from "react";
import {SearchUserType, UserType} from "../gitHub";
import axios from "axios";

type UserDetailsPropType = {
    selectedUser: SearchUserType | null
}
const UserDetails = (props: UserDetailsPropType) => {
    const [userDetails, setUserDetails] = useState<null | UserType>(null)
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let ignore = false
        async function startFetching() {
            let ignore = false
            const {data} = await axios
                .get<UserType>(`https://api.github.com/users/${props.selectedUser?.login}`)
            if (!ignore && !!props.selectedUser) {
                setUserDetails(data)
            }
        }
        startFetching()
        return () => {
            ignore = true
        }
    }, [props.selectedUser])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(seconds > 0) {
                setSeconds(prevState => prevState - 1)
            } else {
                setUserDetails(null)
            }
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [seconds])

    return(
        <div>
            <div>
                {userDetails && <div>
                    <div>
                        {seconds}
                    </div>
                    <h2>{userDetails.login}</h2>
                    <img src={userDetails.avatar_url} alt=""/>
                    <br/>
                    {userDetails.followers_url}
                </div>}
            </div>
        </div>
    )
}
export default UserDetails