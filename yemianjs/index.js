$(function () {
    var lang="en"
    $(window).on("resize",function () {
        console.log($(window).width())
        var ishow=$(window).width()>960?true:false

        var l_img=$("#banner-fs").data("l-img")
        var m_img=$("#banner-fs").data("m-img")

        var img_bb='<img src="'+m_img+'" />'

        if(ishow)
        {
            var hw=1980/845;
            $(".bgsssss-bn").height(($(window).width()*845/1980)+"px");
            $(".bgsssss-bn").css("display","flex")
            $(".phone-download").css("display",'none')

        }else {
            $(".bgsssss-bn").css("display","none")
            $(".phone-download").css("display",'flex')
        }


        var ishow1=$(window).width()<=576?true:false

        if(ishow1)
        {
            var sw=$(window).width()/2

            console.log()

            console.log($("#zhuanhua-fs .row>div").width(sw-30)+"px")
        }



    }).trigger("resize")

    $("#banner-fs").css({
        marginTop:$("#topbanner").height()+"px"
    })

     lang=window.sessionStorage.lang?(lang=window.sessionStorage.lang,changeClick()):'en';

    changeClick()

    if(lang&&lang=="zh")
    {
        $(".dropdown-toggle").html("<span style='padding-right: 10px;'>中文</span>")
    }else if(lang&&lang=="en")
    {
        $(".dropdown-toggle").html("<span style='padding-right: 10px;'>English</span>")
    }

    $('#myDropdown>a').on('click', function () {
        $(".dropdown-toggle").html("<span style='padding-right: 10px;'>"+$(this).text()+"</span>");
        if($("#navbarSupportedContent").hasClass("show"))
        {
            $("#navbarSupportedContent").removeClass("show")
        }
        if($(this).text().trim()=="中文")
        {
            lang = 'zh'
        }
        if($(this).text().trim()=="English")
        {
            lang = 'en'
        }

        changeClick()
    })


    function changeClick() {
        window.sessionStorage.lang=lang;
        jQuery.i18n.properties({
            //加载资浏览器语言对应的资源文件
            name: 'strings', //资源文件名称
            path: 'language/', //资源文件路径
            language: lang,
            cache: false,
            mode: 'map', //用Map的方式使用资源文件中的值
            callback: function () {
                //加载成功后设置显示内容
                for (let i in $.i18n.map) {
                    $('[data-lang="' + i + '"]').text($.i18n.map[i])
                }
                document.title = $.i18n.map['title']
            },
        })

        return lang;
    }

   $(".card").each(function (index,item) {
       $(item).on("click",function () {
           if($(this).data("dj")=="yes")
           {
               window.location.href="detail.html?index="+$(this).data("type")

           }else {
               $('.copy-tc').toast("show")
           }

       })
   })


    isScroll.init('.divtest');
    isScroll.init(".fs-animate")
    $(".divtest").each(function(index,item){
        if(index==0)
        {
            $(item).css("animationDelay",0+'s')
        }
        if(index==1)
        {
            $(item).css("animationDelay",0.1+'s')
        }
        if(index==2)
        {
            $(item).css("animationDelay",0.2+'s')
        }
        if(index==3)
        {
            $(item).css("animationDelay",0.3+'s')
        }
        $(item).on("animationstart",function(){
            $(this).removeClass("animate")
        })
    })

    $(".fs-animate").each(function(index,item){
        $(item).css("animationDelay",index*0.2+'s')
        // if(index==0)
        // {
        //     $(item).css("animationDelay",index*0.5+'s')
        // }
        // if(index==1)
        // {
        //     $(item).css("animationDelay",0.2+'s')
        // }
        // if(index==2)
        // {
        //     $(item).css("animationDelay",0.3+'s')
        // }
        // if(index==3)
        // {
        //     $(item).css("animationDelay",0.4+'s')
        // }
        $(item).on("animationstart",function(){
            $(this).removeClass("animate")
        })

        $(".dowloadfsss,.phonedown-fff").on("click",function () {
            $('.copy-tc').toast("show")
        })
    })
    var timerfd=null

    $(".navbar-nav>.nav-fssss").on("click",function () {
        clearInterval(timerfd)
        if($("#navbarSupportedContent").hasClass("show"))
        {
            timerfd= setTimeout(function () {
                $("#navbarSupportedContent").removeClass("show")
            },1000)

        }
    })

    function getIsWxClient () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        }
        return false;
    };

    $(".mybaipibook").on("click",function () {
        if(lang=="en")
        {
            window.location.href="https://xiamipool.oss-cn-shanghai.aliyuncs.com/xiamipool_white_paper.1.0.pdf"
        }else {
            window.location.href="https://xiamipool.oss-cn-shanghai.aliyuncs.com/whitepaper_cn.1.0.pdf"
        }
    })




    // translate()
})