$(function () {

    var showData={
        "chainx":{
            name:"ChainX"
        }
    }

    $(".first-fs-span1").html(showData[getQueryVariable("index")].name)

    var lang
     lang= window.sessionStorage.lang?(lang=window.sessionStorage.lang,changeClick()):'zh';


    if(lang&&lang=="zh")
    {
        $(".dropdown-toggle").html("<span style='padding-right: 10px;'>中文</span>");

    }else if(lang&&lang=="en")
    {
        $(".dropdown-toggle").html("<span style='padding-right: 10px;'>English</span>");
    }

    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    var up="<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrow-up\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "  <path fill-rule=\"evenodd\" d=\"M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z\"/>\n" +
        "  <path fill-rule=\"evenodd\" d=\"M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z\"/>\n" +
        "</svg>"

    var down="<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrow-down\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "  <path fill-rule=\"evenodd\" d=\"M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z\"/>\n" +
        "  <path fill-rule=\"evenodd\" d=\"M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z\"/>\n" +
        "</svg>"

    function loadData(){
        $.ajax({
            url:"./data/detail.json",
            type:"get",
            success:function (res) {
                var _data=res[getQueryVariable("index")]

                // $(".detail-fs-img").attr("src",_data.imgSrc)

                $(".first-fs-span1").text(_data.name)

                $(".first-fs-span2").text(_data.money)

                if(_data.isS)
                {
                    $(".first-fs-span3").empty().append(up+_data.cashlv)
                }else {
                    $(".first-fs-span3").empty().append(down+_data.cashlv)
                }

                $(".bottom-paili-1>div:nth-child(3)>span").text(_data["diyaned"][1])
                $(".bottom-paili-2>div:nth-child(3)>span").text(_data["diyaned"][2])
                $(".bottom-paili-3>div:nth-child(3)>span").text(_data["diyaned"][3])

                console.log(_data)
            }
        })
    }

    // loadData()

    $('#myDropdown>div').on('click', function () {

        $(".dropdown-toggle").html("<span style='padding-right: 10px;'>"+$(this).text()+"</span>");

        if($(this).text().trim()=="中文")
        {
            lang = 'zh'
        }
        if($(this).text().trim()=="English")
        {
            lang = 'en'
        }
         window.sessionStorage.lang=lang;

        changeClick()
    })

    function changeClick() {
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

    $('.copy-btnbtn').on("click",function () {
        var Url2 =$('#copy_text')[0] //$(".que-info-font>span:nth-child(2)>a")[0];
        Url2.select()
        document.execCommand("Copy"); // 执行浏览器复制命令
        $(".copy-tc").css("zIndex",99999)
        $('.copy-tc').toast("show")



    })

    $(".myerweima").on("click",function () {
        $(".erweima").css("zIndex",99999)
        $('.erweima-tc').toast("show")
    })




})