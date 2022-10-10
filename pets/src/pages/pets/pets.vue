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
              <a class="nav-link active" href="/pets">宠物</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/product">宠物商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/service">宠物服务</a>
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

    <!--搜索框-->
    <div class="d-flex justify-content-center">
      <div class="form-group row mt-5 pt-4 pb-2 col-sm-8 shadow-sm round">
        <input type="text" id="inputUsername" class="form-control col-sm-10" placeholder="请输入需要搜索的内容">
        <button class="btn btn-primary col-sm-2" type="submit">搜索</button>
      </div>
    </div>
    
    <!--主要容器-->
    <main class="container">
      <!--top3-->
      <div class="row p1 bg-light">

        <div class="p-0 text-center ml-3">
          <span class="badge badge-danger py-3 shadow"><h7>推荐</h7></span>
        </div>

        <div class="col d-flex justify-content-between pl-0">
          <div v-for="item in topPets" :key="item.id" class="col-md-4">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row m-2 p-2 shadow-sm h-md-250 position-relative">
              <div class="col mh-100 text-center rounded mr-2" style="background-color:darkgrey;height: 150px;width: 150px;">
                <p class="text-light">image</p>
              </div>
              <div class="col d-flex flex-column position-static justify-content-start">
                <p class="d-inline-block mb-2">{{item.title}}</p>
                <div class="row pl-3" style="height: 25px">
                  <div v-for="(count, index1) in 5" :key="count.index1">
                    <i class="bi" :class="{
                      'bi-star-fill':item.star > index1,
                      'bi-star':item.star <= index1}"></i>
                  </div>
                  <!-- <p class="card-text mx-2">{{item.comments}}条</p>
                  <p class="card-text">￥{{item.avgCost}}/人</p> -->
                </div>
                <p class="mb-1 text-muted">￥{{item.price}}</p>
                <p class="mb-1 text-muted">{{item.username}}</p>
                <button class="btn btn btn-primary p-0 mt-2"><small>加入购物车</small></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <!--筛选器-->
      <div class="mb-3">
        <div class="row border-top border-bottom">
          <div class="col-2 text-center p-2" style="background-color:lightgrey">
            <strong class="text-secondary">宠物类别</strong>
          </div>
          <div class="col-10">
            <ul class="nav">
              <li v-for="item in species" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row border-top border-bottom">
          <div class="col-2 text-center p-2" style="background-color:lightgrey"><strong class="text-secondary">宠物品种</strong></div>
          <div class="col-10">
            <ul class="nav">
              <li v-for="item in petsCategory" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row border-top border-bottom">
          <div class="col-2 text-center p-2" style="background-color:lightgrey"><strong class="text-secondary">体型</strong></div>
          <div class="col-10">
            <ul class="nav">
              <li v-for="item in species[1].bodyType" :key="item.id" class="nav-item">
                <a class="nav-link" href="#">{{item.type}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row p1 bg-light shadow-sm p-2 my-2">
          <button class="btn btn-outline-primary py-0" type="submit"><small>综合</small></button>
          <button class="btn btn-outline-primary py-0" type="submit"><small>销量</small></button>
          <button class="btn btn-outline-primary py-0" type="submit"><small>评论数</small></button>
          <button class="btn btn-outline-primary py-0" type="submit"><small>新品</small></button>
          <button class="btn btn-outline-primary py-0" type="submit"><small>价格</small></button>

          <div class="row col-3 ml-2">
            <input class="col-4 px-0" type="text" placeholder="￥"/>
            <div class="col-1 text-center px-0">-</div>
            <input class="col-4 px-0" type="text" placeholder="￥"/>
            <button class="col-3 btn btn-outline-primary py-0 px-1" type="submit"><small>确定</small></button>
          </div>
        </div>
      </div>

      <!--商品-->
      <div class="row my-3">
        <div v-for="item in pets" :key="item.id" class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <strong class="d-inline-block mb-3 text-danger">￥{{item.minPrice}}-{{item.maxPrice}}</strong>
              <div class="mb-1 text-muted">{{item.name}}</div>
              <div class="mb-1 text-muted">{{item.category}}</div>
              <p class="mb-2 text-muted">{{item.username}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">关注</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">加入购物车</button>
                </div>
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
      
    </main>

  </div>
</template>

<script>
export default {
  data() {
    return {
      topPets:[
        {
          id: 1,
          title: "金渐层",
          star: "5",
          age: "2个月零12天",
          price: "4000",
          publisher: "猫咪专卖·小猫来了（天河店）",
          comments: 22,

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
      pets: [
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
      species: [
        {
          name: "宠物猫",
        },
        {
          name: "宠物狗",
          bodyType: [
            {type: "大型"},
            {type: "中型"},
            {type: "小型"},
          ]
        },
        {
          name: "宠物鸭",
        },
        {
          name: "兔子",
        },
        {
          name: "宠物鱼",
        }
      ],
      petsCategory: [
        {name: "金毛"},
        {name: "泰迪"},
        {name: "哈士奇"},
        {name: "拉布拉多"},
        {name: "柯基"},
      ],
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>
