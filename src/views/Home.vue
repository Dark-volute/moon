<template>
  <div class="home">
    <m-row type='flex'>
  <m-col :span='4' class='col'>1</m-col>
  <m-col :span='20' class='col'>2</m-col>
</m-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang='scss'>
.col{
  border: 1px solid red
}

</style>
