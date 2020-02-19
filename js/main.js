  
  const leftColunm = document.getElementsByClassName("left-column")[0];
  const stickyMap = document.getElementsByClassName("sticky-map")[0];
  let currentScrollY;



// I didn't use display none and block/inline for the Show Buttons because I was having some bugs

  const btnShowMap = document.getElementsByClassName("show-map")[0];
  btnShowMap.addEventListener("click", () => {

    currentScrollY = window.scrollY;
    console.log("currentScrollY: " + currentScrollY);
    leftColunm.style.display = "none";
    stickyMap.style.display = "block";
    btnShowMap.style.bottom = "-100em";
    btnShowMap.style.opacity = "0";
    btnShowList.style.bottom = "0.01em";
    btnShowList.style.opacity = "1";
    
    window.scrollTo(0, 0); // So the user can view the full map

  });

  // window.onscroll = () => {
  //   console.log(window.scrollY);
  // }

  const btnShowList = document.getElementsByClassName("show-list")[0];
  btnShowList.addEventListener("click", () => {

    leftColunm.style.display = "block";
    stickyMap.style.display = "none";
    btnShowList.style.bottom = "-100em";
    btnShowList.style.opacity = "0";
    btnShowMap.style.bottom = "0.01em";
    btnShowMap.style.opacity = "1";
    window.scrollTo(0, currentScrollY);

  });


  
  window.onresize = () => {
    if ( window.innerWidth >= 1100){
      stickyMap.style.display = "block";
      leftColunm.style.display = "block";
    }
    else {
      stickyMap.style.display = "none";
      leftColunm.style.display = "block";
      stickyMap.style.display = "none";
      btnShowList.style.bottom = "-100em";
      btnShowList.style.opacity = "0";
      btnShowMap.style.bottom = "0.01em";
      btnShowMap.style.opacity = "1";
    }
  }
  
  // ---------------------- MAPS Down Here ---------------------- //
  
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    var barra_da_lagoa = {lat: -27.5789399, lng: -48.4412586};
    var lagoinha_do_leste = {lat: -27.7739095, lng: -48.4898743};
    var ponta_das_canas = {lat: -27.4055753, lng: -48.4456224};

    var locations = [
    {lat: -27.5789399, lng: -48.4412586},
    {lat: -27.7739095, lng: -48.4898743},
    {lat: -27.4055753, lng: -48.4202586},
    ];
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: barra_da_lagoa});
    // The marker, positioned at Uluru


    var contentStrings = [
    '<img style="width:14em" src="https://source.unsplash.com/random/1200x800/?room,bed" alt="">'+
    '<br> '+
    '<p style="font-size:1.2rem" >Best breakfast ever!</p> ',
    '<img style="width:18em" src="https://source.unsplash.com/random/1200x800/?paradise,beach" alt="">'+
    '<br> '+
    '<p style="font-size:1.2rem" >Unforgettable experience&#129321</p> ',
    '<img style="width:12.1em" src="https://source.unsplash.com/random/1200x800/?beach,friends" alt="">'+
    '<br> '+
    '<p style="font-size:1.2rem" >I love this place!&#129392</p> ',
    ];

    var infowindows = [];

    locations.forEach((location,i) => {
      infowindows.push(new google.maps.InfoWindow({content: contentStrings[i]}));

      var marker = new google.maps.Marker({position: location, map: map, icon: 'img/marker.svg'});
      marker.addListener('click', function() {
        infowindows[i].open(map, marker);
        });
    infowindows[i].open(map, marker);

    });
    console.log('here: '+contentStrings[1])


  }
      