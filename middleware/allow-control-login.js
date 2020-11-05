export default async ({store,redirect,req}) => {
    const isAuth = await store.dispatch('controlpanel/auth/isVerified',req);
    if (isAuth){
        redirect("/controlpanel/main");
    }
}