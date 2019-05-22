// ==UserScript==
// @name google_mask
// @namespace win.somereason.web.utils
// @version 2019.05.22
// @author fcncdn
// @match *://www.google.com/search*
// @match *://www.google.com.hk/search*
// @match *://www.google.com.tw/search*
// @match *://www.google.com/
// @match *://www.google.com.hk/
// @match *://www.google.com.tw/
// @grant none
// ==/UserScript==
//


(function () {
    //伪装favicon
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/FCncdn/google_mask/master/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  
    let bannerLogo=document.getElementById("lga").getElementsByTagName("img")[0]; //原来变量名hplogo和Google重复,导致图片操作失效...干...
    let div_banner = document.getElementById("lga");
    div_banner.height=280;
    div_banner.style.marginTop="60px";
    bannerLogo.src="//raw.githubusercontent.com/FCncdn/google_mask/master/baby.png";
    bannerLogo.removeAttribute("srcset");
    bannerLogo.width=230;
    bannerLogo.height=230;
    bannerLogo.style.paddingTop="0px";
    var searchBtns=document.getElementsByName("btnK");
    for(var x=0;x<searchBtns.length;x++){
      searchBtns[x].value=searchBtns[x].value.replace("Google 搜索","去吧我的小可爱");    
      document.title = document.title.replace(/Google/g, "love you every day");
    }
  
  
    /**
     * 获取图片的大小
     * @param elLogo
     */
    function getImgSize(elLogo) {
        var elImg = elLogo.querySelector("img");
        if (elImg === null) {
            return {height: 30, width: 92}
        } else {
            return {height: elImg.height, width: elImg.width}
        }
    }
})();
