<template>
  <div id="building" class="d-flex justify-content-end">
    <div class="shadow m-5 bg-white rounded p-5" style="width: 550px;">
      <h5><b>欢迎注册</b></h5>
      已有账号？立即<a href="/">登录</a>
      <hr/>
      <form>
        <div class="form-group row my-5">
          <label for="inputUsername" class="col-sm-2 col-form-label text-center">用户名</label>
          <div class="col-sm-10">
            <input type="text" id="inputUsername" class="form-control" placeholder="请设置用户名">
          </div>
        </div>
        <div class="form-group row my-5">
          <label for="inputPhone" class="col-sm-2 col-form-label text-center">手机号</label>
          <div class="col-sm-10">
            <input type="text" id="inputPhone" class="form-control" placeholder="用于登录和找回密码">
          </div>
        </div>
        <div class="form-group row my-5">
          <label for="inputPassword" class="col-sm-2 col-form-label text-center">密码</label>
          <div class="col-sm-10">
            <input type="text" id="inputUsername" class="form-control" placeholder="请设置登录密码">
          </div>
        </div>
        <div class="form-group row my-5">
          <label for="inputCode" class="col-sm-2 col-form-label text-center">验证码</label>
          <div class="col-sm-6">
            <input type="text" id="inputCode" class="form-control" placeholder="输入请输入验证码">
          </div>
          <div class="col-sm-4">
            <button class="btn btn-outline-primary shadow-sm">获取验证码</button>
          </div>
        </div>
      </form>
      <button class="btn btn-lg btn-primary btn-block shadow" type="submit">登录</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    };
  },

  methods: {}

}

</script>

<style>
@import 'register.css'
</style>
