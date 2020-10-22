import Cookie from "js-cookie";
import jwt_decode from "jwt-decode"

export const state = () => ({
    student_info: '',
})

export const mutations = {
    set_student_info(state, student_info) {
        if (state.student_info != '') {
            state.student_info = student_info
        }
    }
}

export const actions = {

    // return true => means the student is verified. 
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
                    const { status, student_info } = await checkToken.apply(this, [token, refresh_tokenValue]);
                    if (status) { // if status is true, save student_info in state: 
                        commit("set_student_info", student_info);
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
                const { status, student_info } = await checkToken.apply(this, [authorization, refresh_token]);
                if (status) { // if status is true, save student_info in state: 
                    commit("set_student_info", student_info);
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
        const student_info = {
            student_name: decoded.student_name,
            student_id: decoded.student_id,
            phone_number: decoded.phone_number,
        }
        const exp = decoded.exp / 60; // in minutes
        const current_time = new Date().getTime() / 60000; // in minutes
        const sixtyMinAfterNow = current_time + 60;
        if (sixtyMinAfterNow > exp) { // if true, so the token will end in less than one hour => get new token: 
            // call api to get new token: 
            return await this.$axios.post("/students/refresh_token", { refresh_token: refresh_token }, { headers: { authorization: token } }).then(res => {
                Cookie.set("authorization", res.data.data.authorization);
                return {
                    status: true,
                    student_info,
                };
            }).catch((err) => {
                return {
                    status: false,
                    student_info: null,
                };
            });
        } else {
            return {
                status: true,
                student_info,
            };
        }
    } catch (err) {
        return {
            status: false,
            student_info: null,
        };
    }
};

