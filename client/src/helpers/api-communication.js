import axios from "axios";

export const signupUser = async (name, username, email, password, checkt_c) => {
    try {
        const res = await axios.post("/signup", { name, username, email, password, checkt_c });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
export const LoginUser = async ( email, password) => {
    try {
        const res = await axios.post("/login", {  email, password,});
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};

export const checkAuthStatus = async () => {
    try {
        const res = await axios.get("/auth-status");

        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};

export const profileSet = async (location, profilepic) => {
    try {
        const res = await axios.post("/profile", { location, profilepic }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
export const roleTypeSet = async (roles) => {
    try {
        const res = await axios.post("/roletype", { roles });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
export const postverifyEmail = async (emailToken , id) => {
    try {
        const res = await axios.post("/verify-email", { emailToken, id });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
export const ResendEmail = async () => {
    try {
        const res = await axios.post("/resendemail");
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
export const UserLogout = async () => {
    try {
        const res = await axios.post("/logout");
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
};
