// JavaScript Document
$(function(){ 
      // do something 
    var script=document.createElement("script");  
    script.type="text/javascript";  
    script.src="http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**";  
    document.getElementsByTagName('head')[0].appendChild(script);  


    var value = sessionStorage.getItem("language");
    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            if(value==="1"){
                Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }
    function onProgress(value) {
    }
    function onError(error) {
    }
    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }
    function onRestoreOriginal() { 
    }
});

function translate(){
    var value = sessionStorage.getItem("language");
    if(value==="1"){
        sessionStorage.setItem("language", "0"); 
    }else{
        sessionStorage.setItem("language", "1");
    }
    window.location.reload();//刷新当前页面.
}
--------------------- 
作者：GitLqr 
来源：CSDN 
原文：https://blog.csdn.net/CSDN_LQR/article/details/78026254 
版权声明：本文为博主原创文章，转载请附上博文链接！