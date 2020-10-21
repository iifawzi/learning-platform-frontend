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
    isVerified({ commit }, req) {
        if (req) {
            const cookie = req.headers.cookie;
            if (!cookie) {
                return false;
            } else {
                const authorization = cookie.split(";").find(c => c.trim().startsWith("authorization"));
                if (!authorization) {
                    return false;
                } else {
                    // token is exists: 
                    const token = authorization.split("=")[1];
                    // check if token is valid: 
                    const { status, student_info } = checkToken(token);
                    if (status) { // if status is true, save student_info in state: 
                        commit("set_student_info", student_info);
                    }
                    // return the status either the token is valid (true) or not (false).
                    return status;
                }
            }
        } else {
            const authorization = Cookie.get("authorization");
            if (!authorization) {
                return false;
            } else {
                // check if token is valid: 
                const { status, student_info } = checkToken(authorization);
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
const checkToken = (token) => {
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
        } else {
            return {
                status: true,
                student_info,
            };
        }
    } catch (err) {
        return false;
    }
};
