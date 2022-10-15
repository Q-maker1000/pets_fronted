<template>
  <div>
    <!--搜索框---->
    <search-input></search-input>

    <main class="container">
        <!--adv-->
        <div class="row my-2">
            <div class="col-sm-3" v-for="item in adv" :key="item.index">
                <div class="card">
                    <div class="card-body bg-light">
                        <div class="row pr-2">
                            <div class="col-sm-6">
                                <h5 class="card-title">{{item.title}}</h5>
                                <p class="card-text">{{item.desc}}</p>
                                <a href="#" class="btn-sm btn-primary">现在去看看</a>
                            </div>
                            <div class="col-sm-6 mh-100 mx-0 text-center rounded" style="background-color:darkgrey">
                                <p class="text-light">image</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--选择-->
        <div class="mt-4">
            <ul class="nav nav-tabs" id="selector-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-muted active" id="recommand-tab" data-toggle="tab" href="#recommand" role="tab" aria-controls="recommand" aria-selected="true">为你推荐</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-muted" id="place-tab" data-toggle="tab" href="#place" role="tab" aria-controls="place" aria-selected="false">萌宠好去处</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="recommand" role="tabpanel" aria-labelledby="recommand-tab">
                    <!--条件过滤器-->
                    <div class="row my-2 p-2 border-bottom border-top bg-light mr-auto">
                        <div v-for="(item, index) in serviceCategory" :key="item.index" class="nav nav-pills">
                            <button class="nav-link border rounded mr-3 p-1"
                            @click="aChange(index)"
                            :class="{ 
                                'border-primary':serviceCategoryTag == index, 
                                'border-dark':serviceCategoryTag != index, 
                                'text-primary':serviceCategoryTag == index
                                }">{{item.name}}</button>
                        </div>
                    </div>
                    
                    <div class="row m-0">
                        <div v-for="item in petShop" :key="item.index" class="col-sm-6 my-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row pb-2 border-bottom">
                                        <div class="ml-3 mr-auto" style="width: 250px">
                                            <h5 class="card-title"><strong>{{item.name}}</strong></h5>
                                            <div class="row pl-3" style="height: 25px">
                                                <div v-for="(count, index1) in 5" :key="count.index1">
                                                    <i class="bi" :class="{
                                                        'bi-star-fill':item.star > index1,
                                                        'bi-star':item.star <= index1}"></i>
                                                    <!-- <p style="display:none">{{}}</p> -->
                                                </div>
                                                <p class="card-text mx-2">{{item.comments}}条</p>
                                                <p class="card-text">￥{{item.avgCost}}/人</p>
                                            </div>
                                            <p class="mt-2">{{item.shopType}}  {{item.area}}</p>
                                        </div>
                                        <div class="mr-3 mh-100 text-center rounded" style="background-color:darkgrey; width: 146px; height: 109px">
                                            <p class="text-light">image</p>
                                        </div>
                                    </div>
                                    <a class="row px-3 py-2" style="height: 25px"
                                    v-for="i in item.setMeal" :key="i.index2">
                                        <i class="bi bi-bag-fill text-primary"></i>
                                        <p class="ml-2 text-danger">￥{{i.price}}</p>
                                        <p class="ml-2 mr-auto">{{i.title}}</p>
                                        <p class="text-black-50">半年消费{{i.costed}}<i class="bi bi-chevron-right text-black-50"></i></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

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

                <div class="tab-pane fade text-center pt-5" id="place" role="tabpanel" aria-labelledby="place-tab">
                    本服务暂未开通敬请期待！
                </div>
            </div>
        </div>  

        
    </main>

  </div>
</template>

<script>
import Header from '@/components/topBar.vue';
import SearchInputVue from '../../components/SearchInput.vue';
export default {
    components: {
        'common-header': Header,
        'search-input': SearchInputVue
    },
    data () {
    return {
        serviceCategoryTag: 0,
        adv: [
            {
                title: "热卖榜单",
                desc: "好点排行",
            },
            {
                title: "优惠专区",
                desc: "限量9折",
            },
            {
                title: "甄选好店",
                desc: "等你探店",
            },
            {
                title: "新人专享",
                desc: "更多优惠",
            },
        ],
        serviceCategory: [
            {
                name: "日常清洁",
                isActive: true,
            },
            {
                name: "健康防疫",
                isActive: false,
            },
            {
                name: "宠物绝育",
                isActive: false,
            },
            {
                name: "生病就医",
                isActive: false,
            },
            {
                name: "寄养托运",
                isActive: false,
            },
        ],
        petShop: [
            {
                name: "亮亮猫舍",
                star: 4,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"3-4.5kg短毛猫高端洗护套餐",
                        price: 68,
                        costed: 36,
                    },
                    {
                        title:"幼猫疫苗体检套餐",
                        price: 179,
                        costed: 2498,
                    }
                ]

            },
            {
                name: "狗爸爸宠物医院",
                star: 5,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物医院",
                area: "桃园",
                setMeal: [
                    {
                        title:"3-4.5kg短毛猫高端洗护套餐",
                        price: 68,
                        costed: 36,
                    },
                    {
                        title:"幼犬疫苗体检套餐",
                        price: 199,
                        costed: 967,
                    }
                ]

            },
            {
                name: "壹宠堂宠物生活超市·猫舍",
                star: 4,
                comments: 49,
                avgCost: 79,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"5kg以内小型犬高端洗护套餐",
                        price: 25,
                        costed: 16,
                    },
                    {
                        title:"幼猫首次免疫疫苗",
                        price: 165,
                        costed: 776,
                    }
                ]

            },
            {
                name: "阿莲宠物超市",
                star: 5,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"短毛猫精细洗护套餐",
                        price: 59,
                        costed: 127,
                    },
                    {
                        title:"长毛猫精细洗护套餐",
                        price: 79,
                        costed: 188,
                    },
                ]
            },
            {
                name: "亮亮猫舍",
                star: 4,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"3-4.5kg短毛猫高端洗护套餐",
                        price: 68,
                        costed: 36,
                    },
                    {
                        title:"幼猫疫苗体检套餐",
                        price: 179,
                        costed: 2498,
                    }
                ]

            },
            {
                name: "狗爸爸宠物医院",
                star: 5,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物医院",
                area: "桃园",
                setMeal: [
                    {
                        title:"3-4.5kg短毛猫高端洗护套餐",
                        price: 68,
                        costed: 36,
                    },
                    {
                        title:"幼犬疫苗体检套餐",
                        price: 199,
                        costed: 967,
                    }
                ]

            },
            {
                name: "壹宠堂宠物生活超市·猫舍",
                star: 4,
                comments: 49,
                avgCost: 79,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"5kg以内小型犬高端洗护套餐",
                        price: 25,
                        costed: 16,
                    },
                    {
                        title:"幼猫首次免疫疫苗",
                        price: 165,
                        costed: 776,
                    }
                ]

            },
            {
                name: "阿莲宠物超市",
                star: 5,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"短毛猫精细洗护套餐",
                        price: 59,
                        costed: 127,
                    },
                    {
                        title:"长毛猫精细洗护套餐",
                        price: 79,
                        costed: 188,
                    },
                ]
            },
            {
                name: "壹宠堂宠物生活超市·猫舍",
                star: 4,
                comments: 49,
                avgCost: 79,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"5kg以内小型犬高端洗护套餐",
                        price: 25,
                        costed: 16,
                    },
                    {
                        title:"幼猫首次免疫疫苗",
                        price: 165,
                        costed: 776,
                    }
                ]

            },
            {
                name: "阿莲宠物超市",
                star: 5,
                comments: 883,
                avgCost: 4356,
                shopType: "宠物店",
                area: "桃园",
                setMeal: [
                    {
                        title:"短毛猫精细洗护套餐",
                        price: 59,
                        costed: 127,
                    },
                    {
                        title:"长毛猫精细洗护套餐",
                        price: 79,
                        costed: 188,
                    },
                ]
            },
        ],
    };
  },

  created() {
    this.headerChange(i)
  },

  methods: {
    aChange(index){
        this.serviceCategoryTag = index;
        console.log(index+"====="+this.serviceCategoryTag)
    },
    // headerChange(i){
    //         this.headerIndex = i;
    //         console.log("headerIndex == ",this.headerIndex)
    //     }
  },

  computed: {},

  mounted: {},

  
}

</script>