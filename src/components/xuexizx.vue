<template>
<div class="layout">
        <Layout>
            <Header style="background:#fafafa">
                  <Menu style="background:#fafafa" mode="horizontal" active-name="3">
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
                    <BreadcrumbItem >资源共享</BreadcrumbItem>
                    
                    
                </Breadcrumb>
                 <Content style="padding:50px 0; min-height:900px; background:#fff;width:1230px;margin-left: auto;margin-right: auto;">
                    
                    <Row type="flex" justify="space-around" align="top">
                        <Col span="4">
                        <Affix :offset-top="50">
                        <Row >
                            <div style="height:30px"></div>
    <Upload
            :disabled="shifzzsc"
            multiple
            :default-file-list="sadawewqeq"
            type="drag"
            :on-exceeded-size="handleFormatError"
            :max-size="51200"
            :data="{token: uptoken}"
            :before-upload="handleUpload"
            :on-success="handleSuccess"
            :on-error="sdaweqweqwrq"
            action="//upload.qiniup.com/"
>
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #b81c24"></Icon>
                <p>点击或拖拽以上传</p>
            </div>
    </Upload>
                            
                            <div style="height:15px"></div>
           

     <Divider orientation="left" size="small" style="padding-bottom:15px;padding-top:15px;">填写信息</Divider>
                       
                           <Form :model="formData">
                <Row :gutter="32">
                   <Col span="24">
                   <FormItem label="标签" label-position="top" prop="tabs" >
 <AutoComplete
        v-model="formData.tab"
        :data=" taplistszk"
        :filter-method="filterMethod"
        clearable>

    </AutoComplete>

</FormItem>
             </Col>
                    <Col span="24">
                       <FormItem label="上传者呢称" label-position="top">
                            <Input :disabled="shifzzsc" v-model="formData.name" placeholder="默认匿名用户">
                           
        </Input>
                        </FormItem>
                    </Col>
                    
                </Row>
              
                <FormItem label="文件简介" label-position="top">
                    <Input :disabled="shifzzsc" type="textarea" v-model="formData.desc" :rows="4" placeholder="可缺省" />
                </FormItem>
            </Form>  
                   



                        </Row>
                       


                       <Spin size="large" fix v-if="spinShow223"></Spin>
                       </Affix>
                        </Col>

           



                        <Col span="16">
        <Row type="flex" justify="space-between" class="code-row-bg">
  <Col span="4">
                        

 <Select v-model="model3" style="width:100px" size="large" @on-change="tabdda">
        <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
    </Select>


   </Col>
   
        <Col span="8">
        
        <Input search enter-button placeholder="搜索其实很简单" @on-search="czcgererwq"/>
        
        
        </Col>
             </Row>  
                    <div style="height:30px"></div>

<div style="min-height:700px">
               <CellGroup>
                <div v-for="(i,key) in bbclistsa" :key="key">
                    <Cell style="min-height:100px;" >  
                    
                   
                            <Row type="flex" align="middle" :gutter="16">
                             <Col >   
                            <Tag type="dot" :color="changeData()">{{i.tab}}</Tag>
                            </Col><Col>
                            <h2 >{{i.filename}}</h2>
                            </Col>
                            
                            </Row> 

                            <div slot="extra">
                        <Button size="large" icon="ios-download-outline" type="primary" :to="i.urlpath" @click="xinzxz(i.urlpath,key)" target="_blank">Download</Button>
                    </div>
                            
                    <div slot="label" style="padding:10px;">
                        <Tag>{{i.name}}</Tag> 发布于 {{i.date}}  <Tag>下载量</Tag> {{i.downloads}} <Tag>文件大小</Tag> {{i.size}}
                        <p style="padding-top:10px;">{{i.desc}} </p>
                       



                    </div>

                    
                       </Cell>
 <Divider />
                </div> 
</CellGroup>
<Spin size="large" fix v-if="spinShow222"></Spin>
</div>
<Page :total="bbclistsaxs.length" @on-change="sadoiajwe" :page-size="6" show-total size="small" style="text-align:center;"/>


                        </Col>
                    </Row>
                    







                   
                </Content>
            </Layout>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>

</template>

<script>

 export default {
        data () {
            return {
              formData: {
                    name: '',
                    desc: '',
                    tab:""
                },
                uptoken:"",
                shifzzsc:false,
                taplistszk:[],
                cityList:["全部"],
                model3:"全部",
                bbclistsa:[],
                bbclistsaxs:[],
                sadawewqeq:[],
                spinShow222:true,
                spinShow223:true
            }
        },created: function () {
            
                      const that = this
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/qntoken',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi(),
               "shixian":Math.round(new Date().getTime() / 1000) + 1 * 3600,
               "kongjian":"junian"
          }
     }, function (err, res, body) {
          that.uptoken=body.result
       
     });

         this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/qntab',
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
          that.cityList=that.cityList.concat(body.result)
          that.spinShow223=false
     });

                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/qnshlist',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.bbclistsaxs=body.result.reverse()
          that.bbclistsa=that.bbclistsaxs.slice(0,6)
          that.spinShow222=false
     });


        },  methods: {
            xinzxz(iwqeq,weq){
                const that = this 
                 this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/xzqnxz',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               'filename':iwqeq,
               'mishi':this.$mishi(),
          }
     }, function (err, res, body) {
         that.bbclistsa[weq].downloads+=1
       
     });
            },
            sadoiajwe(val){
                this.bbclistsa=this.bbclistsaxs.slice((val-1)*6,val*6)
                this.model3="全部"
            },
            tabdda(val){
                if(val=="全部"){
                    this.bbclistsa=this.bbclistsaxs
                }else{
                    var xsdsfr=[]
                for(var j=0;j < this.bbclistsaxs.length;j++){
                    if(this.bbclistsaxs[j].tab==val){
                        xsdsfr.push(this.bbclistsaxs[j])
                    }
                    this.bbclistsa=xsdsfr
                }}
            },
            czcgererwq(val){
                var xsdsfr=[]
                for(var j=0;j < this.bbclistsaxs.length;j++){
                    var zhuti=this.bbclistsaxs[j].filename+this.bbclistsaxs[j].desc
                    if(zhuti.indexOf(val)!=-1){
                        xsdsfr.push(this.bbclistsaxs[j])
                    }
                    this.bbclistsa=xsdsfr
                }
            },
            sdaweqweqwrq(){
                this.$Loading.error();
                this.$Notice.error({
                    title: '上传失败，请重试！',
                });
        this.shifzzsc=false
            },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            handleSuccess (a,fileList) {
                const that = this 
                 var dategs=(new Date().getMonth()+1)+"月 '"+new Date().getDate()
                this.$http({
          method: "POST",
          url: 'https://ubfvxa4c.engine.lncld.net/1.1/functions/qnshchuan',
          json: true,
          headers: {
               "Content-Type": "application/json",
               "X-LC-Key": "vMPQ9lzIPvPHosJGxywekiOJ",
               "X-LC-Id": "UBFVxA4cxVYGwsGDDRiFoLNM-gzGzoHsz",
          }, body: {
               "name":this.formData.name==""?"匿名用户":this.formData.name,
               "desc":this.formData.desc==""?"这个人很懒，什么都没有留下。":this.formData.desc,
               "tab":this.formData.tab,
               "size":fileList.size>=1024000?parseInt(fileList.size/1024000)+'mb':parseInt(fileList.size/1000)+"kb",
               "date":dategs,
               "filename":fileList.name,
               "urlpath":"http://qn.juniancc.club/"+fileList.response.key+"?attname="+fileList.name,
               'mishi':this.$mishi()
          }
     }, function (err, res, body) {
          that.$Loading.finish();
          var xidj={
               "name":that.formData.name==""?"匿名用户":that.formData.name,
               "desc":that.formData.desc==""?"这个人很懒，什么都没有留下。":that.formData.desc,
               "tab":that.formData.tab,
               "size":fileList.size>=1024000?parseInt(fileList.size/1024000)+'mb':parseInt(fileList.size/1000)+"kb",
               "date":dategs,
               "filename":fileList.name,
               "urlpath":"http://qn.juniancc.club/"+fileList.response.key+"?attname="+fileList.name,
               "downloads":0
          }
          that.bbclistsa.splice(0,0,xidj)
          if (that.taplistszk.indexOf(that.formData.tab)==-1){
              that.taplistszk.push(that.formData.tab)
          }
          that.formData.desc= ''
          that.formData.tab= ''
          that.formData.name= ''
          that.sadawewqeq=[]
          that.$Notice.success({
                    title: '上传成功',
                });
        that.shifzzsc=false
     });


            },
            handleFormatError (file) {
                this.$Loading.error();
                this.$Notice.warning({
                    title: '文件超出大小限制！',
                    desc: file.name + ' 的文件大小为'+parseInt(file.size/1024000)+'mb,文件上传上限为50mb。'
                });
                this.shifzzsc=false
            },
            handleUpload (file) {
                if(this.formData.tab==""){
                    this.$Notice.warning({
                    title: "请先完善 "+file.name + ' 的文件信息'
                });
                    return false
                }else{
                    this.$Loading.start();
                    this.shifzzsc=true
                    return true
                }
                
            }
        }
        

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
    background:transparent;
}
</style>