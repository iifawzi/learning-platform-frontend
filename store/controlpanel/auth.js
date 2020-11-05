import Cookie from "js-cookie";
import jwt_decode from "jwt-decode"

export const state = () => ({
    teacher_info: '',
})

export const mutations = {
    set_teacher_info(state, teacher_info) {
        if (state.teacher_info != '') {
            state.teacher_info = teacher_info
        }
    }
}

export const actions = {

    // return true => means the teacher is verified. 
    async isVerified({ commit }, req) {
        if (req) {
            const cookie = req.headers.cookie;
            if (!cookie) {
                return false;
            } else {
                const authorization = cookie.split(";").find(c => c.trim().startsWith("authorization"));
                const refresh_token = cookie.split(";").find(c => c.trim().startsWith("refresh_token"));
                if (!authorization || !refresh_token) {
                    return false;
                } else {
                    // token is exists: 
                    const token = authorization.split("=")[1];
                    const refresh_tokenValue = refresh_token.split("=")[1];
                    // check if token is valid: 
                    const { status, teacher_info } = await checkToken.apply(this, [token, refresh_tokenValue]);
                    if (status) { // if status is true, save teacher_info in state: 
                        commit("set_teacher_info", teacher_info);
                    }
                    // return the status either the token is valid (true) or not (false).
                    return status;
                }
            }
        } else {
            const authorization = Cookie.get("authorization");
            const refresh_token = Cookie.get("refresh_token");
            if (!authorization) {
                return false;
            } else {
                // check if token is valid: 
                const { status, teacher_info } = await checkToken.apply(this, [authorization, refresh_token]);
                if (status) { // if status is true, save teacher_info in state: 
                    commit("set_teacher_info", teacher_info);
                }
                // return the status either the token is valid (true) or not (false).
                return status;
            }
        };
    },




}




export const getters = {

}







// this function is used to check if the token is valid or not
const checkToken = async function (token, refresh_token) {
    try {
        const decoded = jwt_decode(token);
        if (decoded.role !== "student"){
            const teacher_info = {
                teacher_name: decoded.teacher_name,
                teacher_id: decoded.teacher_id,
                teacher_phone_number: decoded.teacher_phone_number,
                teacher_role: decoded.teacher_role,
                
            }
            const exp = decoded.exp / 60; // in minutes
            const current_time = new Date().getTime() / 60000; // in minutes
            const sixtyMinAfterNow = current_time + 60;
            if (sixtyMinAfterNow > exp) { // if true, so the token will end in less than one hour => get new token: 
                // call api to get new token: 
                return await this.$axios.post("/teachers/refresh_token", { teacher_refresh_token: refresh_token }, { headers: { authorization: token } }).then(res => {
                    Cookie.set("authorization", res.data.data.authorization);
                    return {
                        status: true,
                        teacher_info,
                    };
                }).catch((err) => {
                    return {
                        status: false,
                        teacher_info: null,
                    };
                });
            } else {
                return {
                    status: true,
                    teacher_info,
                };
            }
        }else {
            return {
                status: false,
                teacher_info: null,
            };
        }

    } catch (err) {
        return {
            status: false,
            teacher_info: null,
        };
    }
};

