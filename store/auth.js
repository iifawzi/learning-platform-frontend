import Cookie from "js-cookie";

export const state = () => ({

})

export const mutations = {

}

export const actions = {
  // return true means the student is verified. 
  isVerified({
    commit
  }, req) {
    if (req) {
      const cookie = req.headers.cookie;
      if (!cookie) {
        return false;
      } else {
        const authorization = cookie.split(";").find(c => c.trim().startsWith("authorization"));
        if (!authorization) {
          return false;
        } else {
          const token = authorization.split("=")[1];
          return true;
        }
      }
    } else {
      const authorization = Cookie.get("authorization");
      if (!authorization) {
        return false;
      } else {
        return true;
      }
    };
  },
}

export const getters = {

}
