<template>
<Layout >
<Header style="height:230px;background:transparent;">
        
        <div style="text-align:center;padding:36px;">
         
        <img src="https://s2.ax1x.com/2019/04/01/AslJxg.md.png" alt="ABR2nA.png"  width="600" height="240"/>
        
        </div>
      </Header>
      <Content style="width:1480px;margin-left: auto;margin-right: auto;">
       
<template>
    <div style="height:20px"></div>
    <Row type="flex" justify="space-around">
        <Col span="10">
  
            <Card bordered style="width:100%;height:388px;">
                <template>
    <Carousel v-model="value1" autoplay loop dots="outside">
        <div v-for="item in indextp">
           
        <CarouselItem>
            
            <div class="demo-carousel" style="text-align:center;">
                <router-link tag="a" target="_blank" :to="{name:'Wenz',query:{cookie:item.id}}">
             <Tooltip max-width="200" :content="item.title" transfer>
                <img :src="item.tpurl" alt=""  width="567px" height="328px" /> </Tooltip></router-link>
</div>
        </CarouselItem>
       
        </div>

    </Carousel>
</template>
<Spin size="large" fix v-if="spinShow2"></Spin>
            </Card>
           
            <br><br><br><br>
            <Row>
        <Col span="10">
        <Button type="error" style="height:80px;line-height:66px;" long to="/xinw"><h2>新闻专栏</h2></Button>
        
        </Col>
        <Col span="10" offset="4">
        <Button type="error" style="height:80px;line-height:66px;" long to="/jgls"><h2 >历史展馆</h2></Button>
        
        </Col>
    </Row>



        </Col>
        <Col span="10">
            <Card bordered style="height:388px;width:100%;">
                <h2 slot="title" style="color:#b81c24">时政要闻</h2>
                <CellGroup @on-click="handleClick">
                <Cell v-for="(item,key) in indexsz"  class="skcals" :name="item.id" :key="key" :extra="item.time" :title="item.title" />
                            
                    

</CellGroup>

                <Spin size="large" fix v-if="spinShow"></Spin>
            </Card>


        <br><br><br><br>
            <Row>
        <Col span="10">
        <Button type="error" style="height:80px;line-height:66px;" long to="/xuex"><h2>资源共享</h2></Button>
        
        </Col>
        <Col span="10" offset="4">
        <Button type="error" style="height:80px;line-height:66px;" long to="/agtl"><h2>讨论社区</h2></Button>
        
        </Col>
    </Row>
        </Col>
    </Row>
</template>


</style>


      </Content>
      <br>
  <div style="height: 80px;"> </div>    
</Layout>

</template>

<script>

 export default {
        data () {
            return {
              value1:0,  
               myWidth:"300px",
               indextp:[""],
               indexsz:[""],
               spinShow:true,
               spinShow2:true
            }
        },
        methods: {
             handleClick (val) {
                const { href } = this.$router.resolve({name:'Wenz',query:{cookie:val}})
                window.open(href, '_blank')
            },
        },created: function () {
      
            const that = this 
        this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/indexsk',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'shuliang':'6',
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.indextp=body.result
          that.spinShow2=false
     });
     this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/indextp',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'shuliang':'8','istu':'0','mishi':this.$mishi()
          }
     }, function (err, res, body) {
          
          for (var i=0;i<body.result.length;i++)
{
body.result[i].time=body.result[i].time.slice(0,10)
}
         
that.indexsz=body.result
        that.spinShow=false
          
     });
  },
        mounted () {
      
}

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skcals{
    color:black;
}
.skcals:hover{
    color:#b81c24;
}
</style>
