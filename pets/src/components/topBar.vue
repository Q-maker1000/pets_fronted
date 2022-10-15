<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">PETS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto" >
          <li v-for="(item,index) in header" :key="index" class="nav-item" >
            <a class="nav-link" :class="{'active':$route.path == item.link}" :href="item.link" @click="headerChange(i)">
              {{item.title}}
            </a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0 mr-sm-1" type="submit">搜索</button>
          <a class="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#loginModal">
            登录
          </a>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'common-header',
    
    data() {
        return {
            headerIndex: 0,
            header:[
                {title: "主页", link: "/"},
                {title: "精选萌宠", link: "/pets"},
                {title: "日常用品", link: "/product"},
                {title: "生活服务", link: "/service"},
                {title: "举报", link: "#"},
            ]
        }
    },
    methods: {
        headerChange(i){
            this.headerIndex = i;
            console.log("headerIndex == ",this.headerIndex)
        }
    },
}
</script>

<style>

</style>