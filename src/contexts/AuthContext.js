import { createContext, useContext, useEffect, useState } from "react";
import { signupUser, checkAuthStatus, profileSet, roleTypeSet, ResendEmail, LoginUser, UserLogout, postverifyEmail } from "../helpers/api-communication";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);
    const [errorl, setErrorl] = useState(null);

    useEffect(() => {
        async function checkStatus() {
            const data = await checkAuthStatus();
            if (data) {
                setUser({ email: data.email, name: data.name, profilepic: data.profilepic, isVerified: data.isVerified, id:data.id });
                setIsLoggedIn(true);
            }
        }
        checkStatus();
    }, []);

    const login = async ({ email, password }) => {
        const res = await LoginUser(email, password);
        if (res.error) {
            setErrorl(res.error)
        } else {
            setIsLoggedIn(true);
            window.location.href = '/'
        }

    };
    const signup = async ({ name, username, email, password, checkt_c }) => {
        const res = await signupUser(name, username, email, password, checkt_c);
        if (res.error) {
            setError(res.error)
        } else {
            setIsLoggedIn(true);
            window.location.href = '/create-profile'
        }
    };
    const profile = async ({ location, profilepic }) => {
        const res = await profileSet(location, profilepic);

        if (res) {
            window.location.href = '/role-type'
        }

    }
    const roleType = async ({ roles }) => {
        const res = await roleTypeSet(roles)

        if (res) {
            window.location.href = '/emailverify'
        }
    }
    const ResendEmailConfirmation = async () => {
        const res = await ResendEmail()
        if (res) {
            console.log("email sent")
        }
    }
    const logout = async () => {
        const res = await UserLogout()
        if (res) {
            window.location.href = '/login'
        }
    };
    const postVerifyEmail = async (EmailToken) => {
        const res = await postverifyEmail(EmailToken, user?.id)
    }

    return (
        <AuthContext.Provider value={{ signup, isLoggedIn, error, errorl, profile, roleType, user, login, ResendEmailConfirmation, logout, postVerifyEmail }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};