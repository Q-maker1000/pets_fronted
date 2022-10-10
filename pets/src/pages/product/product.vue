<template>
  <div>
    <!--top navbar-->
    <!-- <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">PETS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">主页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pets">宠物</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/product">宠物商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/serivce">宠物服务</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">举报</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <a class="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#loginModal">
              登录
            </a>
          </form>
        </div>
      </nav>
    </header> -->

    <!--搜索框---->
    <div class="d-flex justify-content-center">
      <div class="form-group row mt-5 pt-4 pb-2 col-sm-8 shadow-sm round">
        <input type="text" id="inputUsername" class="form-control col-sm-10" placeholder="请输入需要搜索的内容">
        <button class="btn btn-primary col-sm-2" type="submit">搜索</button>
      </div>
    </div>

    <main class="container">
      <!--条件筛选器-->
      <div class="mb-3">
        <div class="row border-top border-bottom">
          <div id="key" class="col-2 text-center p-2" style="background-color:lightgrey">
            <strong class="text-secondary">宠物日用</strong>
          </div>
          <div id="values" class="col-10 ">
            <ul class="nav">
              <li v-for="item in daily" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row border-top border-bottom">
          <div id="key" class="col-2 text-center p-2" style="background-color:lightgrey">
            <strong class="text-secondary">洗护美容</strong>
          </div>
          <div id="values" class="col-10 ">
            <ul class="nav">
              <li v-for="item in washingCare" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row border-top border-bottom">
          <div id="key" class="col-2 text-center p-2" style="background-color:lightgrey">
            <strong class="text-secondary">宠物玩具</strong>
          </div>
          <div id="values" class="col-10 ">
            <ul class="nav">
              <li v-for="item in toy" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row border-top border-bottom">
          <div id="key" class="col-2 text-center p-2" style="background-color:lightgrey">
            <strong class="text-secondary">宠物出行</strong>
          </div>
          <div id="values" class="col-10 ">
            <ul class="nav">
              <li v-for="item in outdoor" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--商品展示区-->
      <div class="row mt-4">

        <!--广告列表-->
        <div class="col-2 p-1 border bg-light">
          <div class="col mb-3 pl-1">
            <strong class="text-secondary">精选商品</strong>
          </div>
          <div v-for="item in ADproduct" :key="item.id" class="col px-0">
            <div class="card mb-4">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

              <div class="card-body">
                <strong class="d-inline-block mb-3 text-danger">￥{{item.minPrice}}-{{item.maxPrice}}</strong>
                <div class="mb-1 text-muted">{{item.name}}</div>
                <div class="mb-1 text-muted">{{item.category}}</div>
                <p class="mb-2 text-muted">{{item.username}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-minecart" viewBox="0 0 16 16">
                        <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z"/>
                      </svg>
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--主要商品展示区-->
        <div class="col-10">

          <!--排序筛选器-->
          <div class="row bg-light py-2 px-3 border-top border-bottom">
            <div class="nav nav-pills" role="tablist">
              <a class="nav-link border py-0 active" data-toggle="tab" href="#" role="tab" aria-selected="true">综合</a>
              <a class="nav-link border py-0" data-toggle="tab" href="#" role="tab" aria-selected="false">销量</a>
              <a class="nav-link border py-0" data-toggle="tab" href="#" role="tab" aria-selected="false">评论数</a>
              <a class="nav-link border py-0" data-toggle="tab" href="#" role="tab" aria-selected="false">新品</a>
              <a class="nav-link border py-0" data-toggle="tab" href="#" role="tab" aria-selected="false">价格</a>
              
              <div class="row col-3 ml-2">
                <input class="col-4 px-0" type="text" placeholder="￥"/>
                <div class="col-1 text-center px-0">-</div>
                <input class="col-4 px-0" type="text" placeholder="￥"/>
                <button class="col btn btn-outline-primary py-0 px-1" type="submit"><small>确定</small></button>
              </div>
            </div>
            <!-- <button class="btn btn-outline-primary py-0" type="submit"><small>综合</small></button>
            <button class="btn btn-outline-primary py-0" type="submit"><small>销量</small></button>
            <button class="btn btn-outline-primary py-0" type="submit"><small>评论数</small></button>
            <button class="btn btn-outline-primary py-0" type="submit"><small>新品</small></button>
            <button class="btn btn-outline-primary py-0" type="submit"><small>价格</small></button> -->
          </div>

          <!--商品-->
          <div class="row p-3">
            <div v-for="item in product" :key="item.id" class="col-md-3 px-0">
              <div class="card mb-4">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                <div class="card-body">
                  <strong class="d-inline-block mb-3 text-danger">￥{{item.minPrice}}-{{item.maxPrice}}</strong>
                  <div class="mb-1 text-muted">{{item.name}}</div>
                  <div class="mb-1 text-muted">{{item.category}}</div>
                  <p class="mb-2 text-muted">{{item.username}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-minecart" viewBox="0 0 16 16">
                          <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z"/>
                        </svg>
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr/>

          <!--分页器-->
          <div class="row d-flex justify-content-center p-3">
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      daily: ["清洁除味","猫狗窝","食具水具","笼子围栏","狗厕所"],
      washingCare: ["美容用具","浴液","美容电器","护毛素"],
      toy: ["猫抓板","狗玩具","猫玩具","猫爬架"],
      outdoor: ["牵引绳","航空箱","外出用品","宠物鞋服","宠物配饰"],
      ADproduct: [
        {
          id: 1,
          petName: "毛毛",
          category: "金渐层",
          minPrice: 4000,
          maxPrice: 6000,
          username: "Lisa"
        },
        {
          id: 2,
          petName: "大白",
          category: "金渐层",
          minPrice: 5000,
          maxPrice: 6000,
          username: "Lisa"
        },
        {
          id: 3,
          petName: "晓晓",
          category: "银渐层",
          minPrice: 4000,
          maxPrice: 7000,
          username: "Lisa"
        },
      ],
      product: [
        {
          id: 1,
          petName: "毛毛",
          category: "金渐层",
          minPrice: 4000,
          maxPrice: 6000,
          username: "Lisa"
        },
        {
          id: 2,
          petName: "大白",
          category: "金渐层",
          minPrice: 5000,
          maxPrice: 6000,
          username: "Lisa"
        },
        {
          id: 3,
          petName: "晓晓",
          category: "银渐层",
          minPrice: 4000,
          maxPrice: 7000,
          username: "Lisa"
        },
        {
          id: 8,
          petName: "肥肥",
          category: "布偶",
          minPrice: 7000,
          maxPrice: 10000,
          username: "lff"
        },
        {
          id: 4,
          petName: "毛毛",
          category: "金渐层",
          minPrice: 4000,
          maxPrice: 6000,
          username: "Lisa"
        },
        {
          id: 5,
          petName: "大白",
          category: "金渐层",
          minPrice: 5000,
          maxPrice: 6000,
          username: "Lisa"
        },
        {
          id: 6,
          petName: "晓晓",
          category: "银渐层",
          minPrice: 4000,
          maxPrice: 7000,
          username: "Lisa"
        },
        {
          id: 7,
          petName: "肥肥",
          category: "布偶",
          minPrice: 7000,
          maxPrice: 10000,
          username: "lff"
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>