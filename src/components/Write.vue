<template>
  <div>
    <h2>작업 등록</h2>

    <div class="AddWrap">
      <form>
        <table class="tbAdd">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
          <tr>
            <th>제목</th>
            <td><input type="text" v-model="subject" ref="subject" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea v-model="content" ref="content"></textarea></td>
          </tr>
          <tr>
            <th>작업자</th>
            <td><input type="text" v-model="worker" ref="worker" /></td>
          </tr>
          <tr>
            <th>담당자</th>
            <td><input type="text" v-model="manager" ref="manager" /></td>
          </tr>
          <tr>
            <th>파일</th>
            <td><input ref="image" id="input"
                       type="file" name="image" accept="image/*" multiple="multiple"
                       class="hidden"
                       @change="uploadImage()"></td>
          </tr>

        </table>
      </form>
    </div>

    <div class="btnWrap">
      <a href="javascript:;" @click="fnList" class="btn">목록</a>
      <a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
    </div>
  </div>
</template>

<script>
export default {
  data() { //변수 생성
    return{
      job_code:'FARM'
      ,subject:''
      ,content:''
      ,form:'' //form 전송 데이터
    }
  }
  ,methods:{
    fnList(){ //리스트 화면으로 이동 함수
      this.$router.push({path:'./list',query:this.body});

    },
    fnAddProc() { //등록 프로세스
      if(!this.subject) { //제목이 없다면 값을 입력하라고 알려준다.
        alert("작업명을 입력해 주세요");
        this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
        return;
      }
      if(!this.content) { //제목이 없다면 값을 입력하라고 알려준다.
        alert("작업내용을 입력해 주세요");
        this.$refs.content.focus(); //방식으로 선택자를 찾는다.
        return;
      }
      if(!this.worker) { //제목이 없다면 값을 입력하라고 알려준다.
        alert("작업자를 입력해 주세요");
        this.$refs.worker.focus(); //방식으로 선택자를 찾는다.
        return;
      }
      if(!this.manager) { //제목이 없다면 값을 입력하라고 알려준다.
        alert("담당자를 입력해 주세요");
        this.$refs.manager.focus(); //방식으로 선택자를 찾는다.
        return;
      }
      //alert(this.idx);
      let form = new FormData();
      let image = this.$refs['image'].files[0]

      //alert(this.$refs['image'].files.length);

      for (let i = 0; i < this.$refs['image'].files.length; i++) {
        image = this.$refs['image'].files[i];
        form.append('image', image);
      }
      //form.append('image', image)

      form.append('job_code', this.job_code);
      form.append('subject', this.subject);
      form.append('content', this.content);
      form.append('worker', this.worker);
      form.append('manager', this.manager);

      this.form = { //backend로 전송될 POST 데이터
        job_code:this.job_code
        ,subject:this.subject
        ,content:this.content
        ,worker:this.worker
        ,manager:this.manager
      }

      this.$axios.post('http://localhost:3000/api/write',form, {
        header: { 'Content-Type': 'multipart/form-data' }
      })
      .then((res)=>{
        if(res.data.success) {
          alert('등록되었습니다.');
          this.fnList();
        } else {
          alert("실행중 실패했습니다.\n다시 이용해 주세요");
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    uploadImage: function() {
      let form = new FormData()
      let image = this.$refs['image'].files[0]

      //alert(this.$refs['image'].files.length);

      for (let i = 0; i < this.$refs['image'].files.length; i++) {
        image = this.$refs['image'].files[i];
        form.append('image', image);
      }
      //form.append('image', image)

      this.$axios.post('http://localhost:3000/api/upload', form, {
        header: { 'Content-Type': 'multipart/form-data' }
      }).then( ({data}) => {
        this.images = data
      })
          .catch( err => console.log(err))
    },
    clickInputTag: function() {
      this.$refs['image'].click()
    }
  }
}
</script>

<style scoped>
.tbAdd{border-top:1px solid #888;}
.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:#43b984}
.btnDelete{background:#f00;}
</style>