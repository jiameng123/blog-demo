<template>
<div>我是Archives</div>
</template>

<script>
export default {

  name: 'archives',

  data () {
    return {

    };
  },
  created(){
  	   this.$http.get('../api/echo.php')
      .then((response)=>{
            console.log(response)
        })
      .catch((error) =>{
        console.log(error)
    })
  }
};
</script>

<style lang="css" scoped>
</style>