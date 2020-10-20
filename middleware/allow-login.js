export default async ({store,redirect,req}) => {
    const isAuth = await store.dispatch('auth/isVerified',req);
    if (isAuth){
        redirect("/dashboard");
    }
}