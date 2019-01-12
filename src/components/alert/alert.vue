<template>
    <div class='m-alert' v-show='visible'>
        <div class='m-alert__container'>
            <div class='header'>{{title}}</div>
            <div class='body'>
                {{message}}
            </div>
            <div class='footer'>
                <button @click='confirm'>确认</button>
                <button @click='cancel'>取消</button> 
            </div>  
        </div>
    </div>
</template>

<script>
  export default {
      name: 'mAlert',
      data() {
          return {
              visible:false
          }
      },
      methods:{
          confirm(){
              this.$emit('action','confirm')
          },
          cancel(){
              this.$emit('action','cancel')
          }
      },
      beforeDestroy() {
         this.$el.remove()
      },
  }
</script>

<style lang='scss'>
 .m-alert{
     position: absolute;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%);
     border: 1px solid #eee;
     box-sizing: border-box;
     &__container{
         padding: 10px;
         width:200px;
         .body{
             padding:10px 0 40px 0;
         }
         .footer{
             display: flex;
             justify-content: flex-end;
         }
     }
 }
</style>
