canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

car1_width = 60
car1_height= 20
car1_x = 10
car1_y = 10
car1_image = "EA4.jpeg"

car2_width = 60
car2_height= 20
car2_x = 10
car2_y = 100
car2_image = "EA4.jpeg"
 background_image = "EA RUNAWAY.jpeg"

 function Add(){
     background_imgTag = new Image()
     background_imgTag.onload = uploadBackground;
     background_imgTag.src = background_image

     car1_imgTag = new Image()
     car1_imgTag.onload = uploadcar1;
     car1_imgTag.src = car1_image

     car2_imgTag = new Image()
     car2_imgTag.onload = uploadcar2;
     car2_imgTag.src = car2_image
 }

 function uploadBackground(){
      ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
     }

     function uploadcar1(){
        ctx.drawImage(car1_imgTag, 0, 0, canvas.width, canvas.height);
     }

     function uploadcar2(){
        ctx.drawImage(car2_imgTag, 0, 0, canvas.width, canvas.height);
     } 