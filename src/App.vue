<template>
  <div id="app">
    <Layout>
      
      <Content style="min-height: calc(100vh - 74px);">
        <router-view></router-view>
      </Content>
      

        <Footer style="height: 74px;background:#b81c24;color:#fafafa;width:100%;min-width:1500px">
         <div style="float:left;">
        CopyRight &copy; 网站设计大赛橘年队  |  <a class="skcals" target="_blank" href="http://www.beian.miit.gov.cn/">
    粤ICP备19044128号 
  </a>
        </div>
         <div style="float:right;">
         <b target="_blank" style="color:#fafafa;margin-right:10px;">关于我们：</b>
         <template>
    
        <Button ghost to="mailto:gtcc1108@gmail.com" target="_blank" size="small" icon="md-mail-open" style="margin-right:5px;"></Button>   
        <Button ghost to="https://github.com/Glovecc" target="_blank" size="small" icon="logo-github" style="margin-right:5px;"></Button>
        <Button ghost to="https://juniancc.club" target="_blank" size="small" icon="logo-codepen" style="margin-right:5px;"></Button>
    
</template>
         </div>
        </Footer>
    </Layout>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style scoped>
.skcals{
    color:#fafafa;
}
.skcals:hover{
    text-decoration:underline;
}
</style>

