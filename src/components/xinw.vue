<template>
<div class="layout">
        <Layout>
            <Header style="background:#fafafa">
                  <Menu style="background:#fafafa" mode="horizontal" active-name="1-1">
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
                    <BreadcrumbItem >实时新闻</BreadcrumbItem>
                    
                    
                </Breadcrumb>
                <Content style="padding:50px 0; min-height:900px; background:#fff;width:1230px;margin-left: auto;margin-right: auto;">
                    <Row :gutter="64" type="flex" align="top">
        <Col span="15">
            <div style="min-height:700px">
                <h1 class="qwewqeqqw">最新关注</h1>
                <CellGroup style="padding-top:20px"  @on-click="zxgzclick">
                     <div v-for="(i,key) in indexzx" :key="key">
                <Cell :name="i.guanlurl" style="min-height:100px;" >
                    <h2 >{{i.title}}</h2>
                    
                    <div slot="extra">
                        <p>
            <Icon type="md-git-branch" size=30></Icon>
           {{i.guanl}}
        </p>
  
                    </div>
                    
                    <p style="padding-top:10px;line-height:150%;width:78%" slot="label">{{i.desc}}</p>
                    <p slot="label" style="padding-top:10px;color: #b81c24;font-weight:bold; ">{{i.update}} · {{i.ztitle}}</p>
                </Cell>
 <Divider />
         </div>
               
            </CellGroup>
            <Page @on-change="weqeqwe213" :total="count2" :page-size="8" show-total size="small" style="text-align:center;"/>
            <Spin size="large" fix v-if="spinShow223"></Spin>
            </div>
        </Col>
        <Col span="9">
            <div style="min-height:700px">
                <h1 class="qwewqeqqw">往事进展</h1>
                <CellGroup style="padding-top:20px"  @on-click="zxgzclick">
                    <div v-for="(i,key) in indextp" :key="key">
                <Cell :name="i.guanlurl" style="min-height:100px;">
                    <Row type="flex" align="middle" >
        <Col span="4">
        <Avatar :src="i.media" size="large" />
        </Col>
        <Col span="20">
        <h2 >{{i.ztitle}}</h2> 
        </Col>
    </Row>
    <div slot="extra">
                        <p>
            <Icon type="md-git-branch" size=30></Icon>
            {{i.guanl}}
        </p>
  
                    </div>
                    
                    <p style="padding-top:10px;line-height:150%;width:80%" slot="label"><span style="font-weight:600;color: #b81c24;">{{i.update}}</span> · {{i.desc}}</p>
                    <p slot="label" style="padding-top:10px;color: #b81c24;font-weight:bold; ">{{i.title}}</p>
                    
                    
                </Cell>
 <Divider />
 
         </div>
               
            </CellGroup>
            <Page @on-change="weqeqweqw" :total="count1" :page-size="6" show-total size="small" style="text-align:center;"/>
            <Spin size="large" fix v-if="spinShow222"></Spin>
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
              indextp:[],
              indexzx:[],
              count1:0,
              count2:0,
              spinShow222:true,
              spinShow223:true
            }
        },created: function () {
                 
            this.huoquxwjz(1)
            this.huoquzxgz(1)

        },methods: {
            zxgzclick(val){
                const { href } = this.$router.resolve({name:'livexw',query:{cookie:val}})
                window.open(href, '_blank')
                
            },
            wsjzclick(val){
                console.log(val)
            },
            weqeqweqw(val){
                this.spinShow222=true
                this.huoquxwjz(val)
            },
            weqeqwe213(val){
                this.spinShow223=true
                this.huoquzxgz(val)
            },
         huoquxwjz(dsa){
               const that = this 
        this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/xwjz',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'page':dsa,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.indextp=body.result[1]
          that.count1=body.result[0]
          that.spinShow222=false
     });
         },huoquzxgz(dsa){
               const that = this 
        this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/zxxw',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'page':dsa,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
         that.count2=body.result[0]
          that.indexzx=body.result[1]
          that.spinShow223=false
     });
         },//////

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