<template>
  <div class="panel panel-default">
    <div class="panel-heading">Board List</div>
    <div class="panel-body">
      {{ msg }}
      {{toDoItems}}
      <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>

    </div>

  </div>

</template>

<script>
export default {
  name: 'List2',
  data () {
    return {
      msg: '리스트 샘플',
      toDoItems: ['1. 밥 먹기.', '2. 잠 자기.']
    }
  },
  mounted() { //페이지 시작하면은 자동 함수 실행
    this.fnGetList();
  },
  methods:{
    fnGetList() { //데이터 가져오기 함수
      this.body = { // 데이터 전송
        board_code:this.board_code
        ,keyword:this.keyword
        ,page:this.page
      }
      this.$axios.get('http://localhost:3000/listAPI',{params:this.body})
          .then((res)=>{
            if(res.data.success) {
              //alert(res.data.success);
              this.list = res.data.list;

              //this.paging = res.data.paging;
              //this.no = this.paging.totalCount - ((this.paging.page-1) * this.paging.ipp);
            } else {
              alert("실행중 실패했습니다.\n다시 이용해 주세요.");
            }
          })
          .catch((err)=>{
            console.log(err);
          })
    },
    getList() {
      this.$axios.get("http://localhost:3000/listAPI")
          .then((res)=>{
            console.log(res.data.success);
          })
          .then((err)=>{
            console.log(err);
          })
    }
  }
}
</script>