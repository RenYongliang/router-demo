<template>
    <div>
        <h5>用户详情页 --- 用户Id为：{{id}}</h5>
        <button @click="goback()">后退</button>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['id'],
  methods: {
    goback () {
      // 实现后退功能
      this.$router.go(-1)
    }
  }
}

</script>
