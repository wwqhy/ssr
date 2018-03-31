<template>
  <div>
    <div v-for="topic in topics">
      <p>{{topic.title}}</p>
      <table>
        <thead>
          <tr>
            <th class="middle_col">选择</th>
            <th class="middle_col">订单号码</th>
            <th class="middle_col">城区</th>
            <th class="middle_col">车场</th>
            <th class="middle_col">泊位号</th>
            <th class="middle_col">手机号</th>
            <th class="middle_col">车牌号</th>
            <th class="middle_col">驶入时间</th>
            <th class="middle_col">驶出时间</th>
            <th class="middle_col">停车时长</th>
            <th class="middle_col">应收(元)</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      topics: 'getTopics'
    })
  },

  asyncData ({ store }) {
    return store.dispatch(`getTopics`)
  }
}
</script>
