console.log('\'Allo \'Allo!');

var openurl='http://android.tao.com/';

function testApp(openurl) {  
    var timeout, t = 1000, hasApp = true;  
    setTimeout(function () {  
        if (hasApp) {  
            //alert('安装了 app');
            $('#isinstall').text('直接打开');
            $('#open_or_download').click(function(){
            	window.location.href='http://www.baidu.com';
            });
        }else {  
            //alert('未安装 app');
            $('#isinstall').text('立即下载');
            $('#open_or_download').click(function(){
            	window.location.href='http://www.baidu.com';
            });
        }  
        document.body.removeChild(ifr);  
    }, 2000);//2000是执行testapp多少毫秒后得到结果,定义一个超时设定,过此时间一定可以得到一个结果
  
  /*注释 t1:开始执行testapp函数时的初始计时(精确到毫秒)
  		 t2:执行调用app结束后的时间(精确到毫秒)
		 使用iframe的自动载入特性进行调用app,执行内容包括js生成创建iframe的时间和
		 iframe的载入时间(即调用尝试打开手机上app的完成所需响应时间) 为不影响页面,
		 在浏览器后台检测,所以将iframe设置为不显示的元素
		 这段时间完成后 取值t2  (为了最大限度的排除掉可能因浏览器效率低等原因导致js创建iframe的时间过长,人为的设置增加等待一秒后才计时t2,此值最终不影响计算,可视情况随意改动)
		 此时 t2-t1 为调用打开app需要的时间 使用这段时间做判断用户是否安装app
		 (依据原理:若未安装,此段js尝试载入打开app时需要的执行时间几乎可忽略不计,以我手机为例10毫秒以内
		 若已安装,此段js尝试载入时,会去委托接入安卓的后台,等待安卓的后台获取和处理以及界面渲染等一系列过程,步骤比未安装时的要繁琐复杂得多,这些过程都需要时间,以我手机为例整个过程必然超过100毫秒,若担心手机cpu太快可以将该值改小,若cpu快未安装app时所需的时间会更小)
   */
    var t1 = Date.now();
    var ifr = document.createElement('iframe');  
    ifr.setAttribute('src', openurl);  
    ifr.setAttribute('style', 'display:none');  
    document.body.appendChild(ifr);  
    timeout = setTimeout(function () {  
         var t2 = Date.now();
         /* 已安装时:alert(t2-t1<t+40);为false
         	!t1恒为false
			即(t2>x || false)的形式 之所以这样写是为了让表达式默认为false,
			因为当t1 or t2 or t为null或undenfined时,用!操作符会产生true的结果
			和有些网页上出于严谨目的使用!!操作符的目的一致
         */
         if (!t1 || t2 - t1 < t + 40) {  
             hasApp = false;  
         }  
    }, t);  
 }   //testApp is end

var ua=navigator.userAgent; console.log(ua);
var url;

if(ua.match(/Windows\sPhone/i) !=null){
    url = '#';
    //alert('this is Windowsphone 手机');
}
else if(ua.match(/iPhone|iPod/i) != null){
    url = '#';
    //alert('this is apple 手机');
}
else if(ua.match(/Android/i) != null){
    url = '#';
    testApp(openurl);
}
else if(ua.match(/Firefox/i) !=null){
	url='#';
	testApp(openurl);
}







// 登录 模态框部分 js
$(function(){
    $('#login_frame').modal({
      backdrop:'static',
      keyboard:false
    });

    // $('#login_frame').on('shown.bs.modal', function () {
    //   $('#phone_num').focus();alert('focus');
    // });
//$('#phone_num').focus();

});






$(function(){
  $('[data-toggle="tooltip"]').tooltip();
  //$('#phone_num').tooltip('hide');
});


function check_null(){      
      var phone_num=$('#phone_num').val();
      var pass_word=$('#pass_word').val();

      if(phone_num == null||phone_num == ''||phone_num == undefined||phone_num==0){
          //alert('手机号码不能为空');
          
          $('#phone_num').tooltip('show');
          return false;
      }
      if(pass_word == null||pass_word == ''||pass_word == undefined){
        alert('密码不能为空');
        return false;
      }
      return true;      
}



function check_phone_num(){
      var phone_num=$('#phone_num').val();
      var filter=/^1\d{10}$/;
      if(filter.test(phone_num)){ 
          $('#phone_num').tooltip('hide');         
          return false;
      }
      else{
        // alert('手机号码格式不正确');
       $('#phone_num').tooltip('show');
        return false;
      }
      
}

function check_pass_word(){
      var pass_word=$('#pass_word').val();
      // alert(pass_word);
      return false;
}



//user_profile 标签页部分 cancel 使用data-toggle来启动


//使用masnory 布局框架 的js部分
$(function(){
  var $container = $('.masonry_con');

  $container.masonry({
    columnWidth: 150,
    itemSelector: '.item_pic',
    'gutter':10,
    'isFitWidth': true
  });

  var msnry = $container.data('masonry');
 // console.log(msnry);


  $('a[data-toggle=pill]').each(function () {
  var $this = $(this);

  $this.on('shown.bs.tab', function () {    
      $container.masonry({
        columnWidth: '.item_pic',
        itemSelector: '.item_pic'
      });   
  });

  }); // a data-toggle is end

});

 