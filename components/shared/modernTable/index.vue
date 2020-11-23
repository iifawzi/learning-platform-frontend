<template>
  <table :class="['modernTable', language === 'en' ? 'left' : 'right']">
    <thead>
      <slot name="table__head"></slot>
    </thead>
    <tbody>
      <slot name="table__data"></slot>
    </tbody>
  </table>
</template>

<style lang="scss" src="./style.scss" scoped />