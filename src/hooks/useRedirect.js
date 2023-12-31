import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
    const history = useHistory()

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('dj-rest-auth/token/refresh/')
                // if user is logged in, th code below will run
                if (userAuthStatus === 'loggedIn') {
                    history.push('/')
                }
            } catch (err) {
                // if user is logged in, th code below will run
                if (userAuthStatus === 'loggedOut') {
                    history.push('/')
                } else {
                console.log(err)
                }
            };
        };
        handleMount()
    }, [history, userAuthStatus]);
};

