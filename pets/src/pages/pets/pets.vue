<template>
  <div>
    
    <!--搜索框-->
    <search-input></search-input>

    <!--顶部推荐栏-->
    <div class="d-flex flex-row flex-wrap">
      <div v-for="item in topPets" :key="item.index" class="col-3 mx-0 mb-2">
        <a class="d-flex flex-row flex-wrap rounded overflow-hidden text-decoration-none text-reset" href="#">
          <!--图片-->
          <div class="text-center rounded mr-2" 
            style="background-color:darkgrey;
              height: 100px;
              width: 100px;">
            <p class="text-light m-0">image</p>
          </div>

          <div class="col d-flex flex-column position-static justify-content-start">
            <div class="row">
              <p class="mb-0">{{item.title}}</p>
              <span class="badge badge-pill badge-danger m-1" style="font-size: 10px;">HOT</span>
            </div>

            <div class="row" style="height: 25px">
              <div v-for="(count, index1) in 5" :key="count.index1">
                <i class="bi text-warning" :class="{
                  'bi-star-fill':item.star > index1,
                  'bi-star':item.star <= index1}"
                  style="font-size: 12px;"></i>
              </div>
            </div>
            <div class="row text-danger"><i class="bi bi-currency-yen"></i>{{item.price}}</div>
            <div class="row text-muted py-1" style="font-size: 12px;">
              <i class="bi bi-person" style="font-size: 12px;"></i>
              {{item.publisher}}
            </div>
          </div>
        </a>
      </div>
    </div>
    
    <!--筛选器-->
    <div class="my-3">
      <div class="row border-top border-bottom">
        <div class="col-2 text-center p-2" style="background-color:lightgrey">
          <strong class="text-secondary global-text">宠物类别</strong>
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
        <div class="col-2 text-center p-2 global-text" style="background-color:lightgrey"><strong class="text-secondary">宠物品种</strong></div>
        <div class="col-10">
          <ul class="nav">
            <li v-for="item in petsCategory" :key="item.id" class="nav-item">
              <a class="nav-link" href="#">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row border-top border-bottom">
        <div class="col-2 text-center p-2 global-text" style="background-color:lightgrey"><strong class="text-secondary">体型</strong></div>
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
      <div v-for="item in pets" :key="item.id" class="col-3">
        <div class="card mb-4 shadow-sm">
          <div class="text-center rounded mr-2" 
            style="background-color:darkgrey;
              height: 100px;
              width: 100px;">
            <p class="text-light m-0">image</p>
          </div>
          <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
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
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';
export default {
  components: {
    "search-input": SearchInput
  },
  data() {
    return {
      topPets:[
        {
          id: 1,
          title: "金渐层",
          star: "5",
          age: "2个月零12天",
          price: "4000",
          publisher: "小猫来了(天河店)",
          comments: 22,

        },
        {
          id: 2,
          title: "英短",
          star: "5",
          price: 5000,
          publisher: "猫商人"
        },
        {
          id: 3,
          title: "银渐层",
          star: "5",
          price: 4000,
          publisher: "行至秋色浓."
        },
        {
          id: 4,
          title: "布偶",
          star: "5",
          price: 7000,
          publisher: "Agoni."
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
  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style scoped>
.global-text-sm{
  font-size: 12px;
}
.global-text{
  font-size: 14px;
}
</style>

