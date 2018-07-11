jQuery(function($) {
  //scroll
  $("a[href^=#], .btn-top").on("click", function() {
    var speed    = 500;
    var href     = $(this).attr("href");
    var $target  = $($.find(href == "#" || href == "" ? "html" : href));
    var position = $target.offset().top;
    $("html,body").animate({scrollTop:position - 140}, speed, "swing");
    return false;
  });

  //smartphone navi
  $("#navToggle").on("click", function() {
    $("header").toggleClass("openNav");
  });
});


jQuery(function() {
    var nav = jQuery('#gnav');

    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;

    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if (jQuery(window).scrollTop() > offsetTop) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    }
    jQuery(window).scroll(floatMenu);
    jQuery('body').bind('touchmove', floatMenu);
});


// トップにもどるボタン
jQuery(function() {
    var showFlag = false;
    var topBtn = jQuery('#top_btn');

    topBtn.css('bottom', '-200px');
    var showFlag = false;

    //スクロールが100に達したらボタン表示
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 800);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-200px'}, 800);
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

/* gmap */
function initialize() {
    var latlng = new google.maps.LatLng(36.069665,140.115089);
    var latlng2 = new google.maps.LatLng(36.069197, 140.114870);
    var myOptions = {
        zoom: 18, /*拡大比率*/
        center: latlng, /*表示枠内の中心点*/
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var styleOptions =
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]

    var styledMapOptions = { name: '株式会社アクトビジョン' }
    var actvisionType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
    map.mapTypes.set('actvision', actvisionType);
    map.setMapTypeId('actvision');

    var icon = {
        url : '/images/company/marker55.png',
        scaledSize : new google.maps.Size(55, 72),
        // ↑ここで画像のサイズを指定
    }

    var icon2 = {
        url : '/images/company/markerp55.png',
        scaledSize : new google.maps.Size(55, 72),
        // ↑ここで画像のサイズを指定
    }

    // 情報ウィンドウのインスタンスを作成
    var infoWindow = new google.maps.InfoWindow( {
        content: '株式会社アクトビジョン<br>〒305-0051<br>茨城県つくば市二の宮3-8-2 雅ビル405<br><a href="https://goo.gl/maps/iCs53vuWaNR2" target="_blank">Googleマップで見る</a>' ,
        position: latlng ,
    } ) ;

    // 情報ウィンドウのインスタンスを作成
    var infoWindow2 = new google.maps.InfoWindow( {
        content: 'お客さま駐車場<br>入口向かって右側、<br>手前から２つ目のスペースにご駐車ください。<br><a href="/images/company/access.pdf" target="_blank">詳細はこちらをクリック</a>' ,
        position: latlng2 ,
    } ) ;

    var markerOptions = {
        position: latlng,
        map: map,
        icon: icon,
        title: '株式会社アクトビジョン',
        zIndex: 2
    };
    var markerOptions2 = {
        position: latlng2,
        map: map,
        icon: icon2,
        title: 'お客様駐車場',
        zIndex: 1
    };

    var marker = new google.maps.Marker(markerOptions);
    var marker2 = new google.maps.Marker(markerOptions2);

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map);
    });
    google.maps.event.addListener(marker2, 'click', function() {
        infoWindow2.open(map);
    });

    /*アイコン設定ここまで▲*/
}
