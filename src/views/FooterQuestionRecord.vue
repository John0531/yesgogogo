<template>
  <div class="privacy mb-2">
    <div class="row justify-content-center">
      <div class="col fs-md-5">
        <h4 class="pb-3 pb-lg-4 mt-2 fw-bold ps-2">
          會員提問記錄
        </h4>
        <div class="p-6 bg-white" v-if="isNullQuestion" style="height:280px">
          <h3 class="text-center">無提問記錄</h3>
        </div>
        <div v-if="!isNullQuestion">
          <table
            class="table fs-6 border"
            style="table-layout: fixed; border-color: white; vertical-align: middle;"
            v-for="item in number" :key="item"
          >
            <tbody>
              <tr style="height: 50px;">
                <th class="text-primary pt-2" width="25%">問題編號:</th>
                <th class="pt-2">{{ item.serialNumber }}</th>
              </tr>
              <tr style="height: 50px;">
                <td>提問日期:</td>
                <td class="pt-2">{{ item.askDate }}</td>
              </tr>
              <tr style="height: 50px;">
                <td>問題分類:</td>
                <td class="text-nowrap">{{ item.questionType }}</td>
              </tr>
              <tr style="height: 50px;">
                <td style="height: 50px;">問題內容:</td>
                <td
                  style="height: 100%;"
                  v-html="item.question"
                ></td>
              </tr>
              <tr class="bg-light" style="height: 50px;">
                <!-- <td style="border-bottom-color: white;"></td>
                <td colspan="5" style="border-bottom-color: white;">
                </td> -->
                <td>回覆內容:</td>
                <td class="pt-2" v-html="item.responseQuestion"></td>
              </tr>
              <tr class="bg-light" style="height: 50px;">
                <!-- <td
                  colspan="5"
                  align="right"
                >
                </td> -->
                <td>回覆時間:</td>
                <td class="pt-2">{{ item.replierDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number: [],
      isNullQuestion: false
    }
  },
  methods: {
    getQuestion () {
      const url = `${process.env.VUE_APP_API}/api/members/QuestionSelects`
      this.axios.get(url).then(res => {
        if (res.data.rtnCode === 1998) {
          // ?找不到相關提問內容
          this.number = []
          this.isNullQuestion = true
        } else {
          this.number = res.data.info
          this.number.forEach(item => {
            item.question = item.question.replace('\n', '<br>')
            if (item.responseQuestion) {
              item.responseQuestion = item.responseQuestion.split('\\n').join('<br>')
            }
          })
        }
      })
    }
  },
  mounted () {
    this.getQuestion()
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 297px);
}
</style>
