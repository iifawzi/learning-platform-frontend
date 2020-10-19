<template>
    <form class="login-form">
        <div class="input-container">
 <inputField type="text" :placeholder="$t('shared.username')" autofocus>
 </inputField>
        </div>
         <div class="input-container">
 <inputField type="password" :placeholder="$t('shared.password')" autocomplete>
 </inputField>
        </div>
         <div class="button-container">
 <submitButton :title="$t('home.signin')" color="login-blue"  />
        </div>
        <div class="no-account">{{$t('home.noAccount')}} <span class="register-word">{{$t('home.register')}}</span></div>
    </form>
</template>

<script>
import inputField from "~/components/shared/inputField"
import submitButton from "~/components/shared/submitButton"
export default {
    components: {
        inputField,
        submitButton,
    },
}
</script>

<style lang="scss" src="./style.scss" scoped  />