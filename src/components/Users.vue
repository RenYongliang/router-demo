<template>
    <div>
        <h3>用户管理区域</h3>
        <table>
          <thead>
            <tr><th>编号</th><th>姓名</th><th>年龄</th><th>操作</th></tr>
          </thead>
          <tbody>
            <tr v-for="item in userlist" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.age}}</td>
              <td>
                <a href="javascript:;" @click="goDetail(item.id)">详情</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Users',
  data () { // 这是一个方法定义，不需要function
    return {
      userlist: [
        { id: 1, name: '张三', age: 10 },
        { id: 2, name: '李四', age: 20 },
        { id: 3, name: '王五', age: 30 },
        { id: 4, name: '赵六', age: 40 }
      ]
    }
  },
  methods: {
    goDetail (id) { // 这是一个方法定义，不需要function
      console.log(id)
      this.$router.push('/userinfo/' + id)
    }
  }
}

</script>
