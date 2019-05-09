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
                    <BreadcrumbItem >事件专栏</BreadcrumbItem>
                    
                    
                </Breadcrumb>
                <Content style="padding:50px 0; min-height:900px; background:#fff;width:1230px;margin-left: auto;margin-right: auto;">
                    <Row>
        <Col span="18" offset="3">

             <div style="min-height:700px">
                     <h1 class="qwewqeqqw">事件专栏</h1>
                     <div v-for="(i,key) in xcszzjg" :key="key">
                     <div style="min-height:20px" />
                <Card v-on:click.native="sdawerw(i.id)">
        <Row :gutter="32" type="flex" align="middle">
        <Col span="6">
            <img :src="i.fmtp" width="100%" style="border-radius: 4px;">
           </Col>
            <Col span="18">
            <h3 style="font-size:20px;">{{i.title}}</h3>
            <p style="padding-top:5px;color:#808695">  {{i.desc}}   </p>
            <p style="padding-top:10px;color: #b81c24;font-weight:600;">{{i.update}} · {{i.zxbd}}
            </p>
        </Col>
        </Row>


<div slot="extra"><Icon type="md-git-branch" size=20></Icon>{{i.xglx}}</div>

    </Card> 
</div>
<Page @on-change="weqeqwe213" :total="count" :page-size="10" show-total size="small" style="text-align:center;padding-top:20px"/>
<Spin size="large" fix v-if="spinShow223"></Spin>
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
              count:0,
              xcszzjg:[],
              spinShow223:false
            }
        },created: function () {
                 
                this.dawerte(1)


        },methods: {
            weqeqwe213(val){
                this.dawerte(val)
            },
            sdawerw(val){
                const { href } = this.$router.resolve({name:'zlxw',query:{cookie:val}})
                window.open(href, '_blank')
            },
             dawerte(dsdaqwq){
                this.spinShow223=true
                     const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/xwzl',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi(),
               "page":dsdaqwq
          }
     }, function (err, res, body) {
     
       that.count=body.result[0]
       that.xcszzjg=body.result[1]
       that.spinShow223=false
          
     });
            },
        }

        

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qwewqeqqw {
    padding: 0; 
    line-height: 3rem; 
    font-weight: bold; 
    border-left: none; 
    border-bottom: 2px solid #515A6E; 
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