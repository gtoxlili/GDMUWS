<template>
<div class="layout">
        <Layout>
            <Header style="background:#fafafa">
                <Menu style="background:#fafafa" mode="horizontal">
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
                    <BreadcrumbItem to="/">时政新闻</BreadcrumbItem>
                    <BreadcrumbItem>{{indexxw.title}}</BreadcrumbItem>
                    
                </Breadcrumb>
                <Content style="padding:50px 0; min-height:900px; background:#fff;width:1400px;margin-left: auto;margin-right: auto;">
                    <Row>
        <Col span="18" offset="3"> 
        <p style="font-size:26px;color:black">{{indexxw.title}}</p>


        
        <p style="float:left;padding:15px 0;font-size:14px;color:#999">发布时间：{{indexxw.time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来源：{{indexxw.laiyuan}}</p>
        <p style="float:right;padding:8px;font-size:14px;">
            <ButtonGroup>
            <Button @click="jiazai()" shape="circle" target="_blank" type="error" style="margin-right:5px;" >评论</Button>
            <Button @click="fxewm()" shape="circle" target="_blank" type="error" style="margin-right:5px;" >分享</Button>
            </ButtonGroup>
        </p>
        <Divider /><br/>
        <div class="vhtml" v-html="indexxw.neirong"></div></Col>
        
    </Row>
                   
                </Content>
            </Layout>
            <Footer class="layout-footer-center"></Footer>



    <Modal v-model=" modalxsd"  width="235" :closable="false" :mask-closable="false" class-name="vertical-center-modal">
        <p slot="header" style="color:#b81c24;text-align:center">
            <Icon type="md-open" />
            <span>二维码分享</span>
        </p>
        
        <div id="qrcode">
        
        </div>
        <div slot="footer">
            <Button type="error" size="large" long @click="modalxsd = false ">确定</Button>
        </div>
    </Modal>

    <template>
  
       
        <Drawer
            title="评论"
            v-model="value3"
            :closable="false"
            width="500"
            :styles="styles"
            :mask-closable="false"
        >
            
               <div v-for="item in pllist" style="padding:10px">
        <Row type="flex" align="bottom" :gutter="12">
        <Col ><h2>{{(item.name==""?"匿名用户":item.name)}}</h2></Col>
        <Col >{{item.date}}</Col>
    </Row>
            <p style='min-height:100px;padding-top:10px'>{{item.data}}</p>
<a style="float:right;" @click="formData.desc='@'+(item.name==''?'匿名用户':item.name)+' ' ,$refs['data'].focus(); "> 回复</a>
        <Divider />
                </div>
               
                   
            <div style="height:200px"> </div>
            <div class="demo-drawer-footer">
            
                <Form :model="formData">
                   
                <Row :gutter="32">
                   
                    <Col span="8">
                        <FormItem label="姓名" label-position="top" prop="name">
                            <Input :disabled="havecookie" v-model="formData.name" ref="name" @on-keydown.enter="$refs['mail'].focus();" >
                             <Icon type="ios-person-outline" slot="prepend"></Icon></Input>
                        </FormItem>
                    </Col>
                    <Col span="16">
                        <FormItem label="邮箱" label-position="top" prop="mail">
                           <Input :disabled="havecookie" typ="email" ref="mail" @on-keydown.enter="$refs['data'].focus();" v-model="formData.url" >
                           <Icon type="ios-mail-outline" slot="prepend"/>
                           </Input>
                        </FormItem>
                    </Col>
                   
                </Row>
                
               
                <FormItem label="评论" label-position="top">
                    <Input ref="data" type="textarea" :autosize="{minRows: 5,maxRows: 30}" v-model="formData.desc" />

                </FormItem>
            </Form>
            <Divider />
                <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                <Button type="primary" @click="shangcpl()">Submit</Button>
            </div>

            <Spin size="large" fix v-if="spinShow"></Spin>
        </Drawer>    

</template>        



        </Layout>
    </div>
</div>

</template>

<script>
import QRCode  from "qrcodejs2"
 export default {
        data () {
            return {
                spinShow:false,
                indexxw:[],
                pllist:[],
                modalxsd:false,
                value3:false,
                styles: {
                    height: 'calc(100% - 150px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    desc: ''
                },havecookie:false
        
            }
        },components: { QRCode },
        beforeCreate: function () {
             this.$Loading.start();
        },
        created: function () {
            
                 const that = this 
           this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/indexxw',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'id':this.$route.query.cookie,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.indexxw=body.result
          that.getCookie();
          that.$Loading.finish();
     });



        },methods: {
            //  生成二维码
            qrcode () {
        
                let qrcode = new QRCode('qrcode', {
                    width: 200,
                    height: 200,        // 高度
                    text:  window.location.href,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
               
            },fxewm(){
                document.getElementById('qrcode').innerHTML=""
               this.$nextTick (function () { 
       this.qrcode();
      this.modalxsd = true 
})

            },jiazai(){
                this.value3 = true
                this.spinShow=true 
                   const that = this 
           this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/cxnr',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'xiaoxi':this.$route.query.cookie,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.pllist=body.result.reverse()
          that.spinShow=false
     });
                    
            },shangcpl(){
                this.$Loading.start();
                var biliwx=/(?:[加+微＋+➕薇？vV威卫星♥️❤️姓xX信]{2,}|weixin|weix)(?:[，❤️.\s]?)(?:[\x4e00-\x9eff]?)(?:[:，：]?)([\w\s]{6,})/.test(this.formData.desc+this.formData.name)
                var biliqq=/(?:[加qQ企鹅号码\s]{2,}|[群号]{1,})(?:[\x4e00-\x9eff]*)(?:[:，：]?)([\d\s]{6,})/.test(this.formData.desc+this.formData.name)
                var bilitb=/￥([\w\s]+)￥/.test(this.formData.desc+this.formData.name)
                if(biliwx||biliqq||bilitb){
                        this.$Loading.error()
                        this.$Notice.error({
                    title: '评论失败',
                    desc: '检测到文本存在垃圾信息，请修改后再试。 '
                });
                }else if(this.formData.desc==""){
                    this.$Loading.error()
                        this.$Notice.error({
                    title: '评论失败',
                    desc: '评论框不得为空。'
                }); 
                }
                else{

                const that = this 
                
            this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/ljsb',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'text':this.formData.desc,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          var jiegg=body.result
 
        if( jiegg.jieguo==0){
                that.shangcpl2()
        }else{
                that.$Loading.error()
                        that.$Notice.error({
                    title: '评论失败',
                    desc: '检测到文本存在垃圾信息，请修改后再试。 '
                });
                }

               

            ////////////
               });    } 

                /////////
            },shangcpl2(){
                var dategs=(new Date().getMonth()+1)+"月 '"+new Date().getDate()
                var bodyxs={"urlpath":this.$route.query.cookie,"name":this.formData.name,"email":this.formData.url,"data":this.formData.desc,"date":dategs}
                const that = this 
                this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/tianjianr',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'xiaoxi':bodyxs,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
       
          that.$Loading.finish();
          that. formData.desc= ''
          that.$Notice.success({
                    title: '评论成功',
                });
        that.pllist.splice(0,0,bodyxs)
        if (document.cookie.length <= 0) {
            that.setCookie(that.formData.name, that.formData.url, 10000);
        }
     });
            },//设置cookie
            setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
                this.havecookie=true
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
            
       
        },
        

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    text-align: center;
    background:transparent;
}
.vhtml{
    line-height: 2.3em;
    }
.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
.demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
        border-top: 1px solid #e8e8e8;
    }
</style>