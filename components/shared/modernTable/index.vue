<template>
  <table :class="['modernTable', language === 'en' ? 'left' : 'right']">
      <slot name="table__head"></slot>
    <slot name="table__data"></slot>
  </table>
</template>

<style lang="scss" src="./style.scss" scoped />