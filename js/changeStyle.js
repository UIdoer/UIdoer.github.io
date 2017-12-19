function IsPC(){
 var userAgentInfo = navigator.userAgent;
 var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone","iPad", "iPod");
 var flag = true;
 for (var v = 0; v < Agents.length; v++) {
     if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
 }
 return flag;
}
var styleLinke = document.getElementById('style');
var script = document.getElementById('script');
var head = document.getElementsByTagName('head')[0]
if(IsPC()){
    styleLinke.setAttribute('href','css/pc.css');
    script.setAttribute('src','js/pc.js');
}else{
    styleLinke.setAttribute('href','css/mobile.css');
    script.setAttribute('src','js/mobile.js');
}
head.appendChild(styleLinke);
head.appendChild(script);