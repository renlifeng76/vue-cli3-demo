<template>

  <!--审核原创文章-->
  <div>

  <div class="boxmain">
    <el-input v-model="articleId" placeholder="文章Id" style="width:150px"></el-input>
    <el-button type="primary" size="medium" @click="search()">Get</el-button>
    <el-button type="primary" size="medium" @click="post()">Post</el-button>
  </div>

  </div>
  
</template>

<script>
// import qs from 'qs';

export default {
  name: 'Normal',
  data() {
    return {
      fnName:'test.html',      
      apiUrl:'http://localhost:5000/api/values',
      loading: false,      
      count:'0',
      articleId:''
      
    }
  },
  /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
  created () {   
    // var _this = this;
    //_this.search();
  },
  mounted(){
  },  
  updated(){
  },
  components: { 
  },
  //计算属性
  computed: {
 
  },
  //方法
  methods: {

      //检索
      search() {

        var _this = this;

        _this.$http.get(_this.apiUrl)

             .then(function (response) {

                 //debugger;

                 window.console.log(response);

                 //_self.msg=response.data;

             })

            .catch(function (error) {

              window.console.log(error);

            });

      },

      //检索
      post() {

        var _this = this;

        try{

          _this.loading = true;
          // var data = {
          //       a: "1"
          //     }

              //window.console.log(data);
          _this.$http.defaults.headers.post['Content-Type'] = 'application/json';
          
          _this.$http.post("http://localhost:5000/api/values/Post2","'asdf':'asdf'")
          .then(function (response) {
            
              if (response.data.status == "false") {
                  alert(response.data.errMsg);
              } else {
                          window.console.log("12323");
                window.console.log(response.data);
              }   
             
          })
          .catch(function (error) {
            alert(error);
          }); 
          _this.loading = false;

        }catch(err){

          alert(err.message);
        } 

      }      

  },
}
</script>

<style scope>

.boxmain{ 
    width: 980px;
    margin: 0px auto;
    text-align: left;
}
.mainbox{ clear:both; padding:10px; line-height:26px;}
.border{border:1px solid #999; }
.wzmag{ background-color:#f3fbf0; padding:10px 15px; line-height:28px;}
</style>
