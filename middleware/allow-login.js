export default async ({store,redirect,req}) => {
    const isAuth = await store.dispatch('main/auth/isVerified',req);
    if (isAuth){
        redirect("/dashboard");
    }
}