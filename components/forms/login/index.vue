<template>
    <form class="login-form">
        <div class="input-container">
 <inputField type="text" placeholder="Username"/>
        </div>
         <div class="input-container">
 <inputField type="password" placeholder="Password"/>
        </div>
         <div class="input-container">
 <submitButton title="Sign in" color="login-blue"  />
        </div>
        <div class="no-account">Don't have an account? <span class="register-word">Register</span></div>
    </form>
</template>

<script>
import inputField from "~/components/shared/inputField"
import submitButton from "~/components/shared/submitButton"
export default {
    components: {
        inputField,
        submitButton
    }
}
</script>

<style lang="scss" src="./style.scss" scoped  />