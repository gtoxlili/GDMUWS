<template>
<div class="layout">
        <Layout>
            <Header style="background:#fafafa">
                  <Menu style="background:#fafafa" mode="horizontal" active-name="1-3">
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
                    <BreadcrumbItem >新闻搜索</BreadcrumbItem>
                    
                    
                </Breadcrumb>
                <Content style="padding:50px 0; min-height:900px; background:#fff;width:1230px;margin-left: auto;margin-right: auto;">
                    
                    
                            <Row>

        <Col span="11" offset="6" style="padding-top:50px">
        
            <Select
                v-model="model13"
                filterable
                clearable
                remote
                search
                size="large"
                loading-text="少女祈祷中..."
                placeholder="输入关键词进行搜索"
                suffix="ios-home"
                @on-open-change="wqeqwdsa"
                :remote-method="remoteMethod1"
                :loading="loading1">
                <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
            </Select>
       
        </Col>
        <Col span="1" style="padding-top:50px;padding-left:10px">
          <Button type="primary" size="large" icon="ios-search" @click="dawerte(1)"></Button>
        </col>
    </Row>
    <div v-if="meiyss" style="padding-top:50px;">
               <Row>
        <Col span="12" offset="6" >
        <div style="min-height:700px">
           <h1 class="qwewqeqqw">近日热搜</h1>
           <CellGroup style="padding-top: 20px;" @on-click="zxgzclick">
                <div v-for="(i,key) in xwrs" :key="key">
                <Cell :name="i.title">
                     <Row type="flex" align="middle" justify="center">
        <Col span="6">
        <h1 v-if="key<=2" style="text-align:center;color:#b81c24" >{{key+1}}</h1>
        <h1 v-else style="text-align:center;" >{{key+1}}</h1>
        </Col>
        <Col span="16" offset="2">
        <h2 style="white-space:nowrap;">{{i.title}}</h2> 
             <p style="white-space:nowrap;padding-top:10px;color:#808695">
            <Icon type="md-flame" size=15></Icon>
            {{i.hits}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon type="ios-time" size=15></Icon> {{i.update}}
        </p>
  
        </Col>
    </Row>
                  

                </Cell>
               <Divider size="small" />
               </div> 
            </CellGroup>
            <Spin size="large" fix v-if="spinShow222"></Spin>
            </div>
        </col>
    </Row>    



    </div>
    <div v-else style="padding-top:50px">

         <Row :gutter="32" type="flex" align="top">
        <Col span="18">
         
         

         <div style="min-height:700px">
                <h1 class="qwewqeqqw">搜索结果</h1>
                <p style="white-space:nowrap;padding-top:15px;color:#808695">  找到 {{count}} 个结果   </p>
                <CellGroup style="padding-top:10px">
                    
                     <div v-for="(i,key) in xcszzjg" :key="key">
                <Cell style="min-height:100px;" :to="i.guanlurl" target="_blank">
                    <h2 >{{i.title}}</h2>
                   
                    
                    <p style="padding-top:10px;line-height:150%;width:78%" slot="label">{{i.desc}}</p>
                    <p slot="label" style="padding-top:10px;color: #b81c24;"><b>{{i.laiyuan}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{i.update}}</p>
                </Cell>
 <Divider />
         </div>
               
            </CellGroup>
            <Page @on-change="weqeqwe213" :total="count" :page-size="10" show-total size="small" style="text-align:center;"/>
            <Spin size="large" fix v-if="spinShow223"></Spin>
            </div>



        </col>


        <Col span="6" >
           <h1 class="qwewqeqqw">近日热搜</h1>
           <CellGroup style="padding-top: 20px;" @on-click="zxgzclick">
                <div v-for="(i,key) in xwrs" :key="key">
                <Cell :name="i.title">
                     <Row type="flex" align="middle" justify="center">
        <Col span="4">
        <h1 v-if="key<=2" style="text-align:center;color:#b81c24" >{{key+1}}</h1>
        <h1 v-else style="text-align:center;" >{{key+1}}</h1>
        </Col>
        <Col span="18" offset="2">
        <h2 style="white-space:nowrap;">{{i.title}}</h2> 
             <p style="white-space:nowrap;padding-top:10px;color:#808695">
            <Icon type="md-flame" size=15></Icon>
            {{i.hits}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon type="ios-time" size=15></Icon> {{i.update}}
        </p>
  
        </Col>
    </Row>
                  

                </Cell>
               <Divider size="small" />
               </div> 
            </CellGroup>
        </col>
    </Row> 





    </div>

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
                model13: '',
                loading1: false,
                options1: [],
                xwrs:[],
                count:0,
                xcszzjg:[],
                meiyss:true,
                spinShow223:false,
                spinShow222:true
            }
        },created: function () {
               this.sdawerwq()
        },
        methods: {
            zxgzclick(val){
                this.model13=val
                this.dawerte(1)
            },
            weqeqwe213(val){
                this.dawerte(val)
            },
            dawerte(dsdaqwq){
                if(this.model13){
                this.meiyss=false
                this.xcszzjg=[]
                this.spinShow223=true
                     const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/xwssjg',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi(),
               "q":this.model13,
               "page":dsdaqwq
          }
     }, function (err, res, body) {
     
       that.count=body.result[0]
       that.xcszzjg=body.result[1]
       that.spinShow223=false
          
     });}
            },
            sdawerwq(){

                 const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/jrrs',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi(),
          }
     }, function (err, res, body) {
     
       that.xwrs=body.result
          that.spinShow222=false
     });

            },
            wqeqwdsa(sa){
                if(sa){
                        this.options1= []
                }
                
            },
            remoteMethod1 (query) {
     
                    this.loading1 = true;

                       const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/znxl',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi(),
               "neir":query
          }
     }, function (err, res, body) {
         that.loading1 = false;
        const list = body.result.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        that.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          
     });
                    
            }
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