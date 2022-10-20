<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>精选萌宠</el-breadcrumb-item>
      <el-breadcrumb-item>宠物狗</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="row my-3">
      <!-- 图片 -->
      <div class="col-5 text-center rounded">
        <div class="detail-img"><p class="text-light">image</p></div>
      </div>
      <!-- 详情 -->
      <div class="col-7 bg-light px-0" v-for="item in pet" :key="item.index">
        <div id="title" class="text-md" >
          <span class="badge badge-success">{{item.tag}}</span>
          {{item.title}}
        </div>

        <div class="row mx-0 my-2 p-2" style="background-color:#f3f3f3;">
          <div class="text-sm pt-2 detail-title text-center">价格</div>
          <div class="col pl-3 text-danger text-md" style="font-size: 22px;">
            <i class="bi bi-currency-yen pr-1"></i>{{item.price}}
            <a href="#" class="px-1 text-sm">降价通知</a>
          </div>
          <div class="px-2 text-sm ml-auto text-center border-left">
            <p class="m-0 p-0">累计评价</p>
            <a class="m-0 p-0" href="#" style="font-size: 14px;">{{item.comments}}</a>
          </div>
        </div>
        <div class="row mx-0">
          <div class="text-sm pt-2 detail-title text-center mx-1">配送至</div>
          
          <el-form :inline="true" size="mini" class="demo-form-inline">
            <el-form-item class="pl-3">
              <el-cascader ref="chooseRegionDom" v-model="regionCodeList" :props="props"></el-cascader>
            </el-form-item>
          </el-form>
          
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>

</script>
<script>
export default {
  data(){
    let that = this
    return{
      pet: [
        {
          tag: '新品',
          title: '拉布拉多',
          price: 8889,
          comments: 500,
        }
      ],
      regionCodeList: ["440000", "440300"],
      props: {
        // 单选
        checkStrictly: true,
        // 懒加载
        lazy: true,
        lazyLoad(node, resolve) {
          that.$http.get("https://restapi.amap.com/v3/config/district", {
          // that.$http.get("/gaodeMapAPI/v3/config/district", {
            params: {
              keywords: node.value,
              subdistrict: '1',
              key: '352c9eef6ad7adc07c19f26716335a56'
            }
          })
          .then(res => {
            let nodes = res.data.districts[0].districts.map(item => {
              return {
                value: item.adcode,
                label: item.name,
                leaf: item.level === "district"
              }
            })
            resolve(nodes)
          })
        }
      }
    }
  },
  methods: {
    // getRegionInfo(){
    //   // 获取选中的nodeList
    //   let nodeList = this.$refs.chooseRegionDom.getCheckedNodes()
    //   // 解析node的label 和 value
    //   this.$set(this.regionInfo,'regionName',nodeList[0].label)
    //   this.$set(this.regionInfo,'regionCode',nodeList[0].value)
    // }
  }
}
</script>



<style>
.detail-img{
  height: 350px;
  width: 467 px;
  background-color:darkgrey;
}
.text-md{
  font-size: 20px;
}
.text-sm{
  font-size: 12px;
}
.detail-title{
  width: 39px;
  color: #999999;
}
</style>