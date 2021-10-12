<template>
    <div class="list">
     <!-- <ul>
        <li v-for="(item,index) in moviesList" :class="{'isActive' : activeIndex==item.id}" @click="changeColor(item.id)" :key="item.id">{{item.name}}</li>
      </ul>
      <input type="button" @click = 'btnClick' value="点击事件">
      <section v-show="isShow">
        <label>userName</label>
        <input type="text" placeholder="userName" key="userName">
      </section>
      <section v-show="!isShow">
        <label>phone</label>
        <input type="text" placeholder="phone">
      </section>
      <ul v-for="(item,key,index) in objList" :key = 'item'>
        <li>{{index}}{{key}}{{item}}</li>
      </ul>-->
      <table>
        <thead>
          <tr class="trStyle">
            <th></th>
            <th>商品名</th>
            <th>出厂日期</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in bookList" :key="item.id">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.outdate}}</td>
            <td >{{item.price}}</td>
            <td>
              <button @click="reduce(index)" :disabled="bookList[index].count <= 1">-</button>
              <span>{{item.count}}</span>
              <button @click="increasement(index)">+</button>
            </td>
            <td><button>移除</button></td>
          </tr>
        </tbody>
      </table>
      <h2>总价格:{{totalPrice}}</h2>
      <input type="radio" value="男" v-model="sex">
      <input type="radio" value="女" v-model="sex">
      <label>{{sex}}</label>
      <div>
        <!--单独一个checkbox-->
        <label for="deal">
          <input type="checkbox" id="deal" value="xieyi" v-model="isAgree">同意协议
        </label>
        <label>{{isAgree}}</label>
      </div>
      <div>
        <!--多个checkbox-->
        <input type="checkbox" value="1" v-model="valList">1
        <input type="checkbox" value="2" v-model="valList">2
        <input type="checkbox" value="3" v-model="valList">3
        <input type="checkbox" value="4" v-model="valList">4
        <label style="display: block">多个checkbox集合：{{valList}}</label>
      </div>
    </div>
</template>

<script>
export default {
  name: 'list',
  beforeRouterEnter: (to, from, next) => {
    console.log('准备进入')
    next()
  },
  created () {
    for (let item of this.bookList) {
      console.log(item.price)
    }
  },
  data () {
    return {
      isAgree: true,
      valList: [],
      activeIndex: '',
      isShow: true,
      lastId: 4,
      sex: '',
      bookList: [
        {
          id: 1,
          name: 'bookA',
          outdate: '2020-1-1',
          price: '49',
          count: 1
        },
        {
          id: 2,
          name: 'bookB',
          outdate: '2020-2-1',
          price: '22',
          count: 1
        },
        {
          id: 3,
          name: 'bookC',
          outdate: '2020-3-1',
          price: '60',
          count: 1
        },
        {
          id: 4,
          name: 'bookD',
          outdate: '2020-4-1',
          price: '50',
          count: 1
        }
      ],
      maxNum: [1, 2, 412, 123, 4124, 12, 44]
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next()
  },
  methods: {
    changeColor (index) {
      this.activeIndex = index
    },
    btnClick () {
      this.moviesList.pop()
      this.moviesList.unshift({id: ++this.lastId, name: `${this.lastId}bbb`})
    },
    increasement (index) {
      this.bookList[index].count++
    },
    reduce (index) {
      this.bookList[index].count--
    }
  },
  computed: {
    fullName: {
      get () {
        return this.moviesList
      }
    },
    totalPrice () {
      let result = this.maxNum.reduce(function (previousValue, currentValue, currentIndex, array) {
        return previousValue > currentValue ? previousValue : currentValue
      })
      return result
    }
  }
}
</script>

<style scoped>
  html{
    font-size:50px !important;
  }
  table{
    tale-layout:fixed;
    text-align: center;
    width: 100%;
    font-size: 12px;
    border-spacing: 0;
  }
  .trStyle th{
    background-color: #81ffec;
    border: 1px solid rgba(99, 178, 255, 0.33)
  }
  td{
    border: 1px solid rgba(99, 178, 255, 0.33)
  }
  button{
    cursor: pointer;
    padding: .2rem;
    background: #dde2de;
    border-radius: 4px;
  }
  .isActive{
    color:red
  }
  tbody tr td {
    padding: .4rem;
  }
</style>
