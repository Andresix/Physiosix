window.onload = function () {
    var image = document.querySelector(".image")
     var backgroundImg=["Six one.jpg",
                       "Six two.jpg",
                       "Six three.jpg"
                       ]

       setInterval(changeImage, 3000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 3));

       image.style.backgroundImage = "url('"+backgroundImg[i]+"')";

     }
   }