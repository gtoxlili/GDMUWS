<template>
<div class="layout">
        <Layout>
            <Header style="background:#fafafa">
                  <Menu style="background:#fafafa" mode="horizontal" active-name="4">
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
                    
                    <BreadcrumbItem >讨论社区</BreadcrumbItem>
                    
                    
                </Breadcrumb>
                <Content style="padding:50px 0; min-height:900px; background:#fff;width:1230px;margin-left: auto;margin-right: auto;">
                    
                    <Row type="flex" justify="space-around" align="top">
                        <Col span="4">
                        <Affix :offset-top="shifzhank[2]">
                    
                            
                            <Button type="error" long size="large"  @click="value32222 = true">新增话题</Button>
                            
                            <div style="height:30px"></div>
                            <CellGroup @on-click="bbclistsa=bbclistqb">
                            <Cell v-once title="所有问题"><Icon slot="icon" type="ios-chatbubbles" :color="changeData()"/></Cell>
                            <Cell v-once title="关注"><Icon slot="icon" type="ios-bookmark" :color="changeData()"/></Cell>
                            <Cell v-once title="分类"><Icon slot="icon" type="md-list" :color="changeData()"/></Cell>
                            </CellGroup>
                    <div style="height:30px"></div>
                    <div style="min-height:200px;">
                            <CellGroup @on-click="tabdda">
                            <Cell v-for="(i,key) in taplists" :title="i" :key="key" :name="i"><Icon slot="icon" :color="changeData()" type="md-square" /></Cell>
                            </CellGroup>
                            <Spin size="large" fix v-if="spinShow"></Spin>
                    </div>    
                            <div style="height:15px"></div>
                        <Button type="dashed" @click="zhankai()" long :icon="shifzhank[1]">{{shifzhank[0]}}</Button>
                   
                         </Affix>
                        </Col>

           



                        <Col span="16">
        <Row type="flex" justify="space-between" class="code-row-bg">
  <Col span="4">

  <Select v-model="model3" style="width:100px" size="large">
        <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
    </Select>



   </Col>
        <Col span="8">
        
        <Input search enter-button placeholder="Search Questions" @on-search="czcgererwq"/>
        
        
        </Col>
             </Row>  
                    <div style="height:30px"></div>





<div style="min-height:700px">

<CellGroup @on-click="handleClick">
               
                <div v-for="(i,key) in bbclistsa" :key="key">
                    <Cell :name="i.shijianc" style="min-height:100px;">  
                    
                   
                            <Row type="flex" align="middle" :gutter="16">
                             <Col >   
                            <Tag type="dot" :color="changeData()">{{i.tab}}</Tag>
                            </Col><Col>
                            <h2>{{i.zhuti}}</h2>
                            </Col>
                            
                            </Row> 

                            <div slot="extra">
                        <p>
            <Icon type="md-arrow-round-up" size=20></Icon>
            {{i.dintie[0]-i.dintie[1]}}
        </p>
        <p>
            <Icon type="ios-chatboxes" size=20></Icon>
            {{i.pinluns}}
        </p>
                    </div>
                            
                    <div slot="label" style="padding:5px;">
                       <div style="padding:5px;"> <Tag>{{i.name}}</Tag> 发布于 {{i.date}} </div>
                        <p style="padding:5px;">{{i.datajl}} </p>
                       



                    </div>

                    
                       </Cell>
 <Divider />
                </div> 
</CellGroup>
<Spin size="large" fix v-if="spinShow222"></Spin>
</div>
<Page :total="bbclistsa.length" @on-change="sadoiajwe" :page-size="8" show-total size="small" style="text-align:center;"/>
                        </Col>
                    </Row>
                    







                   
                </Content>

            </Layout>
            <Footer class="layout-footer-center"></Footer>




        <Drawer
            title="新增话题"
            v-model="value32222"
            width="70"
            :closable="false"
            :styles="styles"
            :mask-closable="false"
        >
            <Form :model="formData">
                <Row :gutter="32">
                   
                    <Col span="4">
                        <FormItem label="姓名" label-position="top" prop="name">
                            <Input :disabled="havecookie" v-model="formData.name" >
                             <Icon type="ios-person-outline" slot="prepend"></Icon></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="标题" label-position="top" prop="name">
                            <Input v-model="formData.zhuti" >
                             <Icon type="ios-flask-outline" slot="prepend"></Icon></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">

            

<FormItem label="标签" label-position="top" prop="tabs" >
 <AutoComplete
        v-model="formData.tab"
        :data="taplistszk"
        :filter-method="filterMethod"
        clearable>

    </AutoComplete>

</FormItem>

                   
                    </Col>
                    <Col span="10">
                        <FormItem label="邮箱" label-position="top" prop="mail">
                           <Input :disabled="havecookie" v-model="formData.url" >
                           <Icon type="ios-mail-outline" slot="prepend"/>
                           </Input>
                        </FormItem>
                    </Col>
                   
                </Row>
               <Row type="flex" justify="space-between" align="top">
        <Col span="15">
            <div>
                
<FormItem label="内容" label-position="top">
            
                    <Input type="textarea" v-model="formData.desc" :autosize="{minRows: 28}"  />
                </FormItem>


            </div>
        </Col>
        <Col span="8">
        
                <p class="ivu-form-item-label">效果浏览</p>
              <div class="ivu-form-item-content" style="padding-top:40px;padding-bottom:40px" v-html="markdowntxt">
                  
          

                      </div>
   
     
        
        </Col> 
        </Row>
                
            </Form>


            
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value32222 = false">Cancel</Button>
                <Button type="primary" :disabled="formData.desc==''||formData.tab==''||formData.name==''||formData.url==''||formData.zhuti==''" @click="newqestion()">Submit</Button>
            </div>
        </Drawer>    
 


        </Layout>
    </div>

</template>

<script>

 export default {
        data () {
            return {
                shifzhank:["展开更多","md-arrow-dropdown",100],
              taplists:[],
              taplistszk:[],
              bbclistqb:[],
              cityList:['热门话题','需求投票','最新回复','最新发布'],
              model3:"最新发布",
              bbclistsa:[],
              value32222:false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    desc: '',
                    tab:"",
                    zhuti:""
                },markdowntxt:"",
                converter:null,
                havecookie:false,
                spinShow:true,
                spinShow222:true
            }
        }, watch:{
        'formData.desc':'contentChanged',

    },
        created: function () {
               this.jiazaitab()  
               this.jiazailist()
        }, mounted() {
            var showdown  = require('showdown');
            var converter = new showdown.Converter();
            this.converter = converter;
            this.getCookie();

    },
        methods:{
            sadoiajwe(val){
                this.bbclistsa=this.bbclistqb.slice((val-1)*8,val*8)
            },
            czcgererwq(val){
                var xsdsfr=[]
                for(var j=0;j < this.bbclistqb.length;j++){
                    var zhuti=this.bbclistqb[j].zhuti+this.bbclistqb[j].datajl
                    if(zhuti.indexOf(val)!=-1){
                        xsdsfr.push(this.bbclistqb[j])
                    }
                    this.bbclistsa=xsdsfr
                }
            },
            tabdda(val){
                var xsdsfr=[]
                for(var j=0;j < this.bbclistqb.length;j++){
                    if(this.bbclistqb[j].tab==val){
                        xsdsfr.push(this.bbclistqb[j])
                    }
                    this.bbclistsa=xsdsfr
                }
            },
            zhankai(){
                if(this.shifzhank[0]=="展开更多"){
                    this.taplists=this.taplistszk
                    this.shifzhank=["合拢标签","md-arrow-dropup",-10000]
                }else{
                    this.taplists=this.taplistszk.slice(0,5)
                    this.shifzhank=["展开更多","md-arrow-dropdown",100]
                }
            },
            handleClick (val) {
                const { href } = this.$router.resolve({name:'bbcwz',query:{bbcdatec:val}})
                window.open(href, '_blank')
            },
             contentChanged(){ 
           var html = this.converter.makeHtml(this.formData.desc);
           this.markdowntxt = html;
        },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
             submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {

                        //判断复选框是否被勾选 勾选则调用配置cookie方法
                        if (self.checked == true) {
                            console.log("checked == true");
                            //传入账号名，密码，和保存天数3个参数
                            self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
                        }else {
                          console.log("清空Cookie");
                          //清空Cookie
                          self.clearCookie();
                        }
                        console.log("登陆成功");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //设置cookie
            setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },
            //读取cookie
            getCookie: function() {
                console.log(document.cookie)
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split('='); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] == 'userName') {
                            this.formData.name = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] == 'userPwd') {
                            this.formData.url = arr2[1];
                        }
                    }
                    this.havecookie=true
                }
            },
            //清除cookie
            clearCookie: function() {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            },newqestion(){
                this.$Loading.start();
                if (document.cookie.length <= 0) {
                    this.setCookie(this.formData.name, this.formData.url, 10000);
                    this.havecookie=true
                }
                 const that = this 
                 var dategs=(new Date().getMonth()+1)+"月 '"+new Date().getDate()
                 var shijianc=new Date().getTime()
                this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/bbctj',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               "name":this.formData.name,
               "url":this.formData.url,
               "data":this.markdowntxt,
               "tab":this.formData.tab,
               "zhuti":this.formData.zhuti,
                "date":dategs,
                "shijianc":shijianc,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.$Loading.finish();
          var xidj={
               "name":that.formData.name,
               "datajl":that.markdowntxt.replace(/<.+?>/g,"").slice(0,60),
               "tab":that.formData.tab,
               "zhuti":that.formData.zhuti,
                "date":dategs,
                "shijianc":shijianc,
                "dintie":[0,0],
                "pinluns":0
          }
          that.bbclistsa.splice(0,0,xidj)
          if (that.taplistszk.indexOf(that.formData.tab)==-1){
              that.taplistszk.push(that.formData.tab)
          }
          that.formData.desc= ''
          that.formData.tab= ''
          that.formData.zhuti= ''
          that.$Notice.success({
                    title: '发布成功',
                });

         that.value32222 = false
        if (document.cookie.length <= 0) {
            that.setCookie(that.formData.name, that.formData.url, 10000);
        }
     });
                
            },jiazaitab(){
                const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/cxbbctab',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.taplistszk=body.result
          that.taplists=that.taplistszk.slice(0,5)
          that.spinShow=false
     });
            },jiazailist(){
                const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/cxbbclist',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.bbclistqb=body.result.reverse()
          that.bbclistsa=that.bbclistqb.slice(0,8)
          that.spinShow222=false
     });
            }
    }
        }
        

    

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cljsss{
    color:rgb(144,11,9);
    text-decoration:underline;
    font-size: 16px;
}
.cljsss:hover{
    color:red;
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
.demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
}

</style>