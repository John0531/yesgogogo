const yggevent = {
  path: '/',
  component: () => import(/* webpackChunkName: "group-event" */ '../views/Activity.vue'),
  children: [
    // ?活動頁
    {
      path: 'activity/2022_birthday',
      name: '2022聯邦生日禮',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/2022_Birthday.vue'),
      meta: {
        title: '2022聯邦生日禮'
      }
    },
    {
      path: 'activity/UITCCardDiscount2022',
      name: '2022聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2022.vue'),
      meta: {
        title: '2022聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_January',
      name: '2023一月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_January.vue'),
      meta: {
        title: '2023一月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_February',
      name: '2023二月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_February.vue'),
      meta: {
        title: '2023二月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_March',
      name: '2023三月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_March.vue'),
      meta: {
        title: '2023二月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_April',
      name: '2023四月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_April.vue'),
      meta: {
        title: '2023四月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_May',
      name: '2023五月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_May.vue'),
      meta: {
        title: '2023五月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_June',
      name: '2023六月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_June.vue'),
      meta: {
        title: '2023六月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/UITCCardDiscount2023_July',
      name: '2023七月聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/UITCCardDiscount2023_July.vue'),
      meta: {
        title: '2023七月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/cardpromotionSecondHalf',
      name: '2022下卡友開卡禮',
      component: () => import(/* webpackChunkName: "group-ubcard-past" */ '../views/activity/CardPromotionSecondHalf.vue'),
      meta: {
        title: '2022下卡友開卡禮'
      }
    },
    {
      path: 'activity/hotspringticket',
      name: '下單抽溫泉券',
      component: () => import(/* webpackChunkName: "group-hotspringticket" */ '../views/activity/HotSpringTicket.vue'),
      meta: {
        title: '下單抽溫泉券'
      }
    },
    {
      path: 'activity/weifat',
      name: '好吃無雷gogo開香',
      component: () => import(/* webpackChunkName: "group-weifat" */ '../views/activity/WeiFat.vue'),
      meta: {
        title: '好吃無雷gogo開香'
      }
    },
    {
      path: 'activity/weekendpopup',
      name: '超級閃購',
      component: () => import(/* webpackChunkName: "group-weekendpopup" */ '../views/activity/SuperPopup.vue'),
      meta: {
        title: '超級閃購'
      }
    },
    {
      path: 'activity/afcollection',
      name: '農漁會精選',
      component: () => import(/* webpackChunkName: "group-afcollection" */ '../views/activity/AgriculturalFishCollection.vue'),
      meta: {
        title: '農漁會精選'
      }
    },
    {
      path: 'activity/treatMommy',
      name: 'yesgogogo寵愛媽媽節',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/TreatMommy.vue'),
      meta: {
        title: 'yesgogogo寵愛媽媽節'
      }
    },
    {
      path: 'activity/againstvirus',
      name: '全民防疫YESGO',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/AgainstVirus.vue'),
      meta: {
        title: '全民防疫YESGO'
      }
    },
    {
      path: 'activity/zongziselected',
      name: '萬粽選物節',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/Zongziselected.vue'),
      meta: {
        title: '萬粽選物節'
      }
    },
    {
      path: 'activity/zongzi',
      name: '粽子大集合',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/Zongzi.vue'),
      meta: {
        title: '粽子大集合'
      }
    },
    {
      path: 'activity/zongzilottery',
      name: '端午金好禮',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/ZongZiLottery.vue'),
      meta: {
        title: '端午金好禮'
      }
    },
    {
      path: 'activity/7daysmenu',
      name: '7天儲食清單',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/7daysMenu.vue'),
      meta: {
        title: '7天儲食清單'
      }
    },
    {
      path: 'activity/peacemind',
      name: '安心好食節',
      component: () => import(/* webpackChunkName: "group-peacemind" */ '../views/activity/PeaceMind.vue'),
      meta: {
        title: '安心好食節'
      }
    },
    {
      path: 'activity/zhongyuan',
      name: '澎湃慶中元',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/ZhongYuan.vue'),
      meta: {
        title: '澎湃慶中元'
      }
    },
    {
      path: 'activity/chungYuanPuTuBizCard',
      name: '你普渡我贊助',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/ShowMeUrBizCard.vue'),
      meta: {
        title: '你普渡我贊助'
      }
    },
    {
      path: 'activity/moonFestival',
      name: '中秋美食季',
      component: () => import(/* webpackChunkName: "group-chungYuanPuTuBizCard" */ '../views/activity/MoonFestival.vue'),
      meta: {
        title: '中秋美食季'
      }
    },
    {
      path: 'activity/newyeargift',
      name: '福兔迎祥_新春禮盒',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/NewYearGift.vue'),
      meta: {
        title: '福兔迎祥 新春禮盒'
      }
    },
    {
      path: 'activity/newYearDishes',
      name: '福氣年菜預購',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/NewYearDishes.vue'),
      meta: {
        title: '福氣年菜預購'
      }
    },
    {
      path: 'activity/2023_birthday',
      name: '2023 聯邦生日禮',
      component: () => import(/* webpackChunkName: "group-2023UBBTD" */ '../views/activity/2023_Birthday.vue'),
      meta: {
        title: '2023 聯邦生日禮'
      }
    },
    {
      path: 'activity/2023_memberbonus',
      name: '2023 年度會員消費回饋10%',
      component: () => import(/* webpackChunkName: "group-event" */ '../views/activity/2023_memberbonus.vue'),
      meta: {
        title: '2023 年度會員消費回饋10%'
      },
      alias: 'activity/2023_memberbonus/:id'
    },
    {
      path: 'activity/cardMemberGift',
      name: '2023 聯邦卡友會員禮',
      component: () => import(/* webpackChunkName: "group-ubcard" */ '../views/activity/CardMemberGift.vue'),
      meta: {
        title: '2023 聯邦卡友會員禮'
      }
    },
    {
      path: 'activity/cardMemberGiftSecondHalf',
      name: '2023 聯邦卡友會員禮下半年度',
      component: () => import(/* webpackChunkName: "group-ubcard" */ '../views/activity/CardMemberGiftSecondHalf.vue'),
      meta: {
        title: '2023 聯邦卡友會員禮下半年度'
      }
    },
    {
      path: 'activity/momCelebrate',
      name: '寵愛女王節',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/MommyCelebrate.vue'),
      meta: {
        title: '寵愛女王節'
      }
    },
    {
      path: 'activity/zongziSummer',
      name: '粽夏慶端午',
      component: () => import(/* webpackChunkName: "group-past" */ '../views/activity/zongziSummer.vue'),
      meta: {
        title: '粽夏慶端午'
      }
    },
    {
      path: 'activity/2023_moonFestival',
      name: '中秋美食賞',
      component: () => import(/* webpackChunkName: "group-moonFestival" */ '../views/activity/2023_MoonFestival.vue'),
      meta: {
        title: '中秋美食賞'
      }
    },
    {
      path: 'activity/:fileName',
      name: '聯邦刷卡優惠',
      component: () => import(/* webpackChunkName: "group-ubcard" */'../views/activity/UITCCardDiscount.vue'),
      meta: {
        title: '每月聯邦刷卡優惠'
      }
    },
    {
      path: 'activity/loveDonation',
      name: '愛心週',
      component: () => import(/* webpackChunkName: "group-loveDonation" */ '../views/activity/LoveDonation.vue'),
      meta: {
        title: '愛心週'
      }
    },
    {
      path: 'activity/diamondPod',
      name: '鑽石鍋',
      component: () => import(/* webpackChunkName: "group-loveDonation" */ '../views/activity/DiamondPod.vue'),
      meta: {
        title: '鑽石鍋'
      }
    },
    {
      path: 'activity/weekendpopup1111',
      name: '超級閃購雙11',
      component: () => import(/* webpackChunkName: "group-weekendpopup" */ '../views/activity/SuperPopup1111.vue'),
      meta: {
        title: '超級閃購雙11'
      }
    }
    // {
    //   path: 'activity/testnewyeargift/',
    //   name: 'app 活動頁測試',
    //   component: () => import(/* webpackChunkName: "group-event" */ '../views/activity/eventTestnewyeargift.vue'),
    //   meta: {
    //     title: 'app 活動頁測試'
    //   }
    // },
    // {
    //   path: 'activity/test2023birthday',
    //   name: 'app 活動頁測試 2023birthday',
    //   component: () => import(/* webpackChunkName: "group-event" */ '../views/activity/eventTest2023birthday.vue'),
    //   meta: {
    //     title: 'app 活動頁測試'
    //   }
    // },
    // {
    //   path: 'activity/:fileName',
    //   name: '活動頁入口',
    //   component: () => import(/* webpackChunkName: "group-event" */'../views/activity/ActivityPagesEntrance.vue'),
    //   meta: {
    //     title: 'app 活動頁測試'
    //   }
    // }
  ]
}

// if (Date.now() < Date.parse('2022/11/12 23:59:59')) {
//   yggevent.children.forEach((item) => {
//     if (item.name === '超級閃購') {
//       item.component = () => import(/* webpackChunkName: "group-SuperPopup" */ '../views/activity/SuperPopup1111.vue')
//     }
//   })
// }
export default yggevent
