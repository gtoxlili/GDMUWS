<template>
<div class="layout">
        <Layout>
            <Header style="background:#fafafa">
                  <Menu style="background:#fafafa" mode="horizontal" active-name="1-2">
                    <div class="layout-logo"><router-link to="/">
                        <img src="https://s2.ax1x.com/2019/04/01/AslJxg.md.png" alt="AslJxg.png" width="100%" height="100%" />
                        </router-link></div>
                    <div class="layout-nav">
                       
<Submenu name="1">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                新闻专栏
            </template>
            
                <MenuItem name="1-1" to="/xinw">实时新闻</MenuItem>
                <MenuItem name="1-2" to="/xinwws">事件专栏</MenuItem>
                <MenuItem name="1-3" to="/xinwss">新闻搜索</MenuItem>
               
        </Submenu>


<Submenu name="2">
            <template slot="title">
                <Icon type="ios-keypad"></Icon>
                历史展馆
            </template>
            
                <MenuItem name="2-1" to="/jgls">建国历史</MenuItem>
                <MenuItem name="2-2" to="/jdls">建党历史</MenuItem>
             
           
        </Submenu>


                      
                        <MenuItem name="3" to="/xuex">
                            <Icon type="ios-analytics"></Icon>
                            资源共享
                        </MenuItem>
                        <MenuItem name="4" to="/agtl">
                            <Icon type="ios-paper"></Icon>
                            讨论社区
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem to="/">主页</BreadcrumbItem>
                    <BreadcrumbItem to="/xinw">新闻专栏</BreadcrumbItem>
                    <BreadcrumbItem to="/xinwws">事件专栏</BreadcrumbItem>
                    <BreadcrumbItem >{{xcszzjgsw[0]}}</BreadcrumbItem>
                    
                </Breadcrumb>
                <Content style="padding:50px 0; min-height:900px; background:#fff;width:1230px;margin-left: auto;margin-right: auto;">
                    <Row>
        <Col span="18" offset="3">

             <div style="min-height:700px">
                     <h1 >{{xcszzjgsw[0]}}</h1>
                     <p class="qwewqeqqw">  {{xcszzjgsw[1]}}   </p>
                   
                    



                    <div v-for="(i,key) in xcszzjg" :key="key" style="padding-top:15px">
                        <h4  v-if="key==0" class="wqeqweqwe" style="background: #b81c24;">{{i.update}}</h4>
                        <h4  v-else-if="xcszzjg[key].update!=xcszzjg[key-1].update" class="wqeqweqwe" style="background: #808695;">{{i.update}}</h4> 

<Row type="flex" justify="space-around" align="middle">
        <Col span="13">
        <p style="font-size: 1rem;">{{i.title}}</p>
        </Col>
        <Col span="8">
         <Card v-on:click.native="sdawerw(i.url)" padding="8" style="min-height:90px">
        <Row :gutter="32" type="flex" align="middle">
        <Col span="8" v-if="i.fmtp">
            <img :src="i.fmtp" width="100%" style="border-radius: 4px;">
           </Col>
            <Col span="16">
            <h3 style="font-size:20px;">{{i.urlly}}</h3>
            <div v-if="i.fmtp==''" style="height:15px" />
            <p style="padding-top:5px;color:#808695">{{i.urltitle}}</p>
            
        </Col>
        </Row>


<Icon slot="extra" type="ios-link" size=20 />

    </Card> 
        
        </Col>
        
    </Row>
<div style="height:30px" />

               
 
 
         </div>
               
          

            </div>
        </Col>
        
        </Row>
                   
                </Content>
            </Layout>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>
</div>
</template>

<script>

 export default {
        data () {
            return {
              xcszzjg:[],
              xcszzjgsw:[]
              
            }
        },beforeCreate: function () {
             this.$Loading.start();
        },
        created: function () {
                 
                this.dawerte()
                

        },methods: {
            sdawerw(val){
                window.open(val)
            },
             dawerte(){
                
                     const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/zhuanlanend',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi(),
               "id":this.$route.query.cookie
          }
     }, function (err, res, body) {
          that.xcszzjgsw=body.result[0]
       that.xcszzjg=body.result[1]
       that.$Loading.finish();
          
     });
            },
        }

        

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wqeqweqwe {
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.6rem;
    padding: 0 2rem 0 1rem;
    margin-bottom: 1.6rem;
    display: inline-block;
    position: relative;
    margin-block-start: 1.33em;
}
.wqeqweqwe::after {
    content: "";
    position: absolute;
    top: 2px;
    right: -0.6rem;
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    background: #ffffff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.qwewqeqqw {
    padding: 0;  
    border-left: none; 
    border-bottom: 2px solid #515A6E; 
    font-size: 1rem;
    padding:15px;
    color:#808695;
    text-indent: 2em;
}
.layout{
    background:#fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 175px;
    height: 70px;
    background:#fafafa;
    border-radius: 0px;
    float: left;
    position: relative;
    top: 0px;
    left: 0px;
}
.layout-nav{
    width: 540px;
    margin: 0 auto;
    margin-right: 10px;
   
}
.layout-footer-center{
    background:transparent;
}
</style>