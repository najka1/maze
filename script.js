var cord = [
  [2, 2, 226, 2],
  [242, 2, 482, 2],
  [34, 18, 50, 18],
  [66, 18, 82, 18],
  [98, 18, 194, 18],
  [242, 18, 258, 18],
  [290, 18, 306, 18],
  [322, 18, 338, 18],
  [354, 18, 370, 18],
  [434, 18, 482, 18],
  [50, 34, 66, 34],
  [82, 34, 114, 34],
  [146, 34, 162, 34],
  [194, 34, 210, 34],
  [226, 34, 274, 34],
  [306, 34, 322, 34],
  [338, 34, 370, 34],
  [386, 34, 402, 34],
  [418, 34, 466, 34],
  [114, 50, 130, 50],
  [162, 50, 178, 50],
  [210, 50, 242, 50],
  [274, 50, 290, 50],
  [322, 50, 338, 50],
  [354, 50, 386, 50],
  [402, 50, 450, 50],
  [66, 66, 82, 66],
  [114, 66, 130, 66],
  [146, 66, 162, 66],
  [178, 66, 194, 66],
  [226, 66, 274, 66],
  [306, 66, 322, 66],
  [354, 66, 370, 66],
  [402, 66, 418, 66],
  [466, 66, 482, 66],
  [82, 82, 114, 82],
  [194, 82, 210, 82],
  [258, 82, 306, 82],
  [322, 82, 354, 82],
  [370, 82, 402, 82],
  [418, 82, 434, 82],
  [66, 98, 98, 98],
  [130, 98, 162, 98],
  [178, 98, 210, 98],
  [258, 98, 322, 98],
  [354, 98, 386, 98],
  [402, 98, 418, 98],
  [434, 98, 466, 98],
  [50, 114, 66, 114],
  [98, 114, 130, 114],
  [162, 114, 194, 114],
  [210, 114, 226, 114],
  [274, 114, 306, 114],
  [338, 114, 354, 114],
  [386, 114, 434, 114],
  [450, 114, 482, 114],
  [34, 130, 50, 130],
  [66, 130, 98, 130],
  [114, 130, 130, 130],
  [146, 130, 178, 130],
  [226, 130, 258, 130],
  [274, 130, 290, 130],
  [306, 130, 338, 130],
  [354, 130, 370, 130],
  [386, 130, 418, 130],
  [18, 146, 82, 146],
  [98, 146, 114, 146],
  [130, 146, 210, 146],
  [258, 146, 274, 146],
  [290, 146, 306, 146],
  [338, 146, 354, 146],
  [386, 146, 402, 146],
  [434, 146, 450, 146],
  [2, 162, 34, 162],
  [50, 162, 66, 162],
  [114, 162, 130, 162],
  [146, 162, 178, 162],
  [210, 162, 226, 162],
  [274, 162, 290, 162],
  [306, 162, 322, 162],
  [354, 162, 386, 162],
  [18, 178, 50, 178],
  [130, 178, 146, 178],
  [178, 178, 210, 178],
  [226, 178, 242, 178],
  [258, 178, 274, 178],
  [290, 178, 306, 178],
  [370, 178, 386, 178],
  [402, 178, 418, 178],
  [2, 194, 18, 194],
  [50, 194, 82, 194],
  [162, 194, 210, 194],
  [242, 194, 274, 194],
  [322, 194, 338, 194],
  [354, 194, 402, 194],
  [418, 194, 466, 194],
  [2, 210, 34, 210],
  [98, 210, 130, 210],
  [146, 210, 162, 210],
  [226, 210, 242, 210],
  [258, 210, 338, 210],
  [354, 210, 370, 210],
  [386, 210, 402, 210],
  [434, 210, 450, 210],
  [34, 226, 66, 226],
  [98, 226, 114, 226],
  [178, 226, 194, 226],
  [210, 226, 226, 226],
  [242, 226, 274, 226],
  [290, 226, 354, 226],
  [386, 226, 418, 226],
  [18, 242, 34, 242],
  [82, 242, 114, 242],
  [130, 242, 178, 242],
  [194, 242, 210, 242],
  [242, 242, 274, 242],
  [354, 242, 386, 242],
  [402, 242, 466, 242],
  [2, 258, 18, 258],
  [50, 258, 146, 258],
  [178, 258, 194, 258],
  [226, 258, 290, 258],
  [322, 258, 338, 258],
  [354, 258, 370, 258],
  [434, 258, 450, 258],
  [18, 274, 50, 274],
  [82, 274, 98, 274],
  [130, 274, 162, 274],
  [194, 274, 242, 274],
  [274, 274, 322, 274],
  [338, 274, 354, 274],
  [370, 274, 418, 274],
  [434, 274, 466, 274],
  [18, 290, 50, 290],
  [114, 290, 130, 290],
  [146, 290, 162, 290],
  [178, 290, 210, 290],
  [242, 290, 306, 290],
  [322, 290, 338, 290],
  [370, 290, 402, 290],
  [34, 306, 66, 306],
  [98, 306, 114, 306],
  [130, 306, 146, 306],
  [162, 306, 226, 306],
  [290, 306, 306, 306],
  [338, 306, 370, 306],
  [386, 306, 418, 306],
  [434, 306, 482, 306],
  [2, 322, 18, 322],
  [34, 322, 50, 322],
  [66, 322, 82, 322],
  [114, 322, 242, 322],
  [274, 322, 306, 322],
  [322, 322, 338, 322],
  [370, 322, 386, 322],
  [418, 322, 450, 322],
  [18, 338, 34, 338],
  [98, 338, 114, 338],
  [130, 338, 146, 338],
  [194, 338, 210, 338],
  [226, 338, 258, 338],
  [290, 338, 322, 338],
  [338, 338, 370, 338],
  [386, 338, 402, 338],
  [418, 338, 434, 338],
  [450, 338, 482, 338],
  [18, 354, 50, 354],
  [98, 354, 114, 354],
  [146, 354, 162, 354],
  [178, 354, 226, 354],
  [242, 354, 258, 354],
  [322, 354, 354, 354],
  [370, 354, 402, 354],
  [434, 354, 466, 354],
  [2, 370, 18, 370],
  [82, 370, 114, 370],
  [162, 370, 178, 370],
  [210, 370, 242, 370],
  [306, 370, 338, 370],
  [354, 370, 386, 370],
  [402, 370, 434, 370],
  [450, 370, 466, 370],
  [18, 386, 50, 386],
  [98, 386, 162, 386],
  [242, 386, 258, 386],
  [322, 386, 338, 386],
  [386, 386, 402, 386],
  [434, 386, 450, 386],
  [50, 402, 82, 402],
  [98, 402, 146, 402],
  [178, 402, 210, 402],
  [226, 402, 242, 402],
  [258, 402, 354, 402],
  [370, 402, 402, 402],
  [418, 402, 434, 402],
  [450, 402, 466, 402],
  [34, 418, 66, 418],
  [82, 418, 98, 418],
  [130, 418, 226, 418],
  [242, 418, 338, 418],
  [354, 418, 386, 418],
  [434, 418, 450, 418],
  [2, 434, 18, 434],
  [50, 434, 82, 434],
  [114, 434, 146, 434],
  [226, 434, 242, 434],
  [274, 434, 290, 434],
  [322, 434, 354, 434],
  [402, 434, 434, 434],
  [450, 434, 482, 434],
  [18, 450, 50, 450],
  [66, 450, 82, 450],
  [146, 450, 162, 450],
  [178, 450, 210, 450],
  [226, 450, 306, 450],
  [322, 450, 354, 450],
  [370, 450, 402, 450],
  [434, 450, 450, 450],
  [2, 466, 18, 466],
  [82, 466, 114, 466],
  [130, 466, 146, 466],
  [162, 466, 178, 466],
  [210, 466, 226, 466],
  [242, 466, 290, 466],
  [338, 466, 370, 466],
  [402, 466, 434, 466],
  [450, 466, 466, 466],
  [2, 482, 242, 482],
  [258, 482, 482, 482],
  [2, 2, 2, 482],
  [18, 2, 18, 18],
  [18, 34, 18, 146],
  [18, 226, 18, 242],
  [18, 274, 18, 322],
  [18, 338, 18, 370],
  [18, 386, 18, 418],
  [34, 18, 34, 130],
  [34, 178, 34, 242],
  [34, 258, 34, 274],
  [34, 306, 34, 322],
  [34, 370, 34, 434],
  [34, 466, 34, 482],
  [50, 2, 50, 18],
  [50, 34, 50, 114],
  [50, 162, 50, 178],
  [50, 194, 50, 210],
  [50, 242, 50, 258],
  [50, 322, 50, 370],
  [50, 434, 50, 466],
  [66, 18, 66, 50],
  [66, 66, 66, 98],
  [66, 114, 66, 130],
  [66, 178, 66, 194],
  [66, 210, 66, 242],
  [66, 258, 66, 306],
  [66, 322, 66, 402],
  [66, 418, 66, 434],
  [66, 450, 66, 482],
  [82, 18, 82, 34],
  [82, 50, 82, 66],
  [82, 98, 82, 130],
  [82, 146, 82, 242],
  [82, 274, 82, 386],
  [82, 402, 82, 418],
  [82, 434, 82, 450],
  [98, 2, 98, 18],
  [98, 34, 98, 82],
  [98, 146, 98, 226],
  [98, 274, 98, 338],
  [98, 418, 98, 466],
  [114, 50, 114, 66],
  [114, 82, 114, 114],
  [114, 130, 114, 146],
  [114, 162, 114, 194],
  [114, 242, 114, 290],
  [114, 306, 114, 322],
  [114, 354, 114, 370],
  [114, 402, 114, 466],
  [130, 18, 130, 50],
  [130, 66, 130, 98],
  [130, 114, 130, 130],
  [130, 146, 130, 162],
  [130, 178, 130, 242],
  [130, 290, 130, 306],
  [130, 338, 130, 354],
  [130, 370, 130, 386],
  [130, 450, 130, 466],
  [146, 34, 146, 82],
  [146, 98, 146, 146],
  [146, 162, 146, 194],
  [146, 210, 146, 226],
  [146, 274, 146, 290],
  [146, 322, 146, 338],
  [146, 354, 146, 370],
  [146, 434, 146, 450],
  [146, 466, 146, 482],
  [162, 66, 162, 98],
  [162, 178, 162, 210],
  [162, 226, 162, 274],
  [162, 290, 162, 322],
  [162, 338, 162, 370],
  [162, 386, 162, 466],
  [178, 18, 178, 50],
  [178, 66, 178, 98],
  [178, 162, 178, 178],
  [178, 194, 178, 226],
  [178, 258, 178, 274],
  [178, 322, 178, 338],
  [178, 370, 178, 402],
  [178, 434, 178, 450],
  [194, 34, 194, 82],
  [194, 114, 194, 162],
  [194, 210, 194, 258],
  [194, 274, 194, 290],
  [194, 354, 194, 386],
  [194, 418, 194, 434],
  [194, 450, 194, 482],
  [210, 18, 210, 66],
  [210, 98, 210, 130],
  [210, 162, 210, 194],
  [210, 210, 210, 226],
  [210, 258, 210, 274],
  [210, 322, 210, 338],
  [210, 386, 210, 418],
  [210, 434, 210, 450],
  [226, 18, 226, 34],
  [226, 66, 226, 114],
  [226, 130, 226, 162],
  [226, 178, 226, 210],
  [226, 226, 226, 258],
  [226, 274, 226, 306],
  [226, 338, 226, 354],
  [226, 370, 226, 402],
  [226, 418, 226, 466],
  [242, 2, 242, 18],
  [242, 34, 242, 50],
  [242, 82, 242, 130],
  [242, 146, 242, 178],
  [242, 194, 242, 226],
  [242, 290, 242, 322],
  [242, 354, 242, 370],
  [242, 402, 242, 418],
  [242, 466, 242, 482],
  [258, 50, 258, 66],
  [258, 98, 258, 194],
  [258, 258, 258, 290],
  [258, 306, 258, 354],
  [258, 370, 258, 402],
  [258, 418, 258, 450],
  [274, 2, 274, 34],
  [274, 114, 274, 130],
  [274, 226, 274, 242],
  [274, 290, 274, 386],
  [290, 34, 290, 82],
  [290, 146, 290, 210],
  [290, 242, 290, 258],
  [290, 354, 290, 402],
  [290, 434, 290, 450],
  [306, 2, 306, 66],
  [306, 82, 306, 98],
  [306, 114, 306, 130],
  [306, 178, 306, 194],
  [306, 226, 306, 274],
  [306, 290, 306, 306],
  [306, 322, 306, 402],
  [306, 418, 306, 434],
  [306, 450, 306, 482],
  [322, 98, 322, 114],
  [322, 130, 322, 178],
  [322, 194, 322, 210],
  [322, 242, 322, 258],
  [322, 274, 322, 322],
  [322, 434, 322, 466],
  [338, 18, 338, 98],
  [338, 114, 338, 194],
  [338, 226, 338, 274],
  [338, 290, 338, 306],
  [338, 322, 338, 338],
  [338, 370, 338, 386],
  [354, 2, 354, 18],
  [354, 50, 354, 66],
  [354, 82, 354, 114],
  [354, 146, 354, 210],
  [354, 274, 354, 290],
  [354, 306, 354, 322],
  [354, 354, 354, 434],
  [370, 66, 370, 82],
  [370, 98, 370, 146],
  [370, 210, 370, 242],
  [370, 258, 370, 274],
  [370, 290, 370, 306],
  [370, 322, 370, 354],
  [370, 386, 370, 402],
  [370, 434, 370, 466],
  [386, 2, 386, 18],
  [386, 34, 386, 66],
  [386, 130, 386, 146],
  [386, 162, 386, 178],
  [386, 242, 386, 274],
  [386, 306, 386, 322],
  [386, 418, 386, 450],
  [386, 466, 386, 482],
  [402, 18, 402, 50],
  [402, 66, 402, 82],
  [402, 98, 402, 114],
  [402, 146, 402, 162],
  [402, 178, 402, 210],
  [402, 242, 402, 258],
  [402, 322, 402, 354],
  [402, 370, 402, 386],
  [402, 402, 402, 434],
  [418, 2, 418, 34],
  [418, 130, 418, 242],
  [418, 258, 418, 370],
  [418, 386, 418, 418],
  [418, 434, 418, 466],
  [434, 50, 434, 178],
  [434, 210, 434, 226],
  [434, 242, 434, 258],
  [434, 274, 434, 290],
  [434, 370, 434, 386],
  [434, 402, 434, 418],
  [434, 466, 434, 482],
  [450, 50, 450, 82],
  [450, 114, 450, 130],
  [450, 162, 450, 194],
  [450, 210, 450, 242],
  [450, 290, 450, 306],
  [450, 322, 450, 354],
  [450, 386, 450, 402],
  [450, 418, 450, 466],
  [466, 34, 466, 50],
  [466, 66, 466, 98],
  [466, 130, 466, 226],
  [466, 242, 466, 290],
  [466, 306, 466, 322],
  [466, 370, 466, 418],
  [466, 450, 466, 466],
  [482, 2, 482, 482],
];

var path = [
  [234, 2],
  [234, 10],
  [202, 10],
  [202, 26],
  [186, 26],
  [186, 58],
  [170, 58],
  [170, 106],
  [202, 106],
  [202, 138],
  [218, 138],
  [218, 154],
  [202, 154],
  [202, 170],
  [186, 170],
  [186, 154],
  [138, 154],
  [138, 170],
  [122, 170],
  [122, 202],
  [106, 202],
  [106, 154],
  [122, 154],
  [122, 138],
  [138, 138],
  [138, 106],
  [122, 106],
  [122, 74],
  [106, 74],
  [106, 42],
  [122, 42],
  [122, 26],
  [90, 26],
  [90, 10],
  [58, 10],
  [58, 26],
  [42, 26],
  [42, 122],
  [58, 122],
  [58, 138],
  [90, 138],
  [90, 234],
  [122, 234],
  [122, 250],
  [154, 250],
  [154, 266],
  [122, 266],
  [122, 282],
  [138, 282],
  [138, 298],
  [154, 298],
  [154, 314],
  [122, 314],
  [122, 298],
  [106, 298],
  [106, 266],
  [74, 266],
  [74, 314],
  [58, 314],
  [58, 394],
  [42, 394],
  [42, 410],
  [74, 410],
  [74, 426],
  [90, 426],
  [90, 458],
  [74, 458],
  [74, 474],
  [122, 474],
  [122, 442],
  [138, 442],
  [138, 458],
  [154, 458],
  [154, 474],
  [186, 474],
  [186, 458],
  [170, 458],
  [170, 426],
  [186, 426],
  [186, 442],
  [202, 442],
  [202, 426],
  [218, 426],
  [218, 458],
  [202, 458],
  [202, 474],
  [234, 474],
  [234, 458],
  [298, 458],
  [298, 474],
  [250, 474],
  [250, 482]
];
audio = new Audio('aud/chomp.wav');
audio.volume=0.15;


const brick1 = new Image();
brick1.src = "slike/brick1.png";
const brick2 = new Image();
brick2.src = "slike/brick2.png";
const brick3 = new Image();
brick3.src = "slike/brick3.png";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ch = document.getElementById("canvas2");
const ctx2 = ch.getContext("2d");

const brickWidth1 = 45;
const brickHeight1 = 35;
const brickWidth2 = 23;
const brickHeight2 = 23;
const brickWidth3 = 18;
const brickHeight3 = 18;
//slike/lego.png

function moveImageAlongPath() {

  document.getElementById("play").setAttribute("disabled",true);
  
  const image = new Image();
  image.src = "slike/lego.png"; // Replace with the path to your image

  const startPosition = path[0];
  const endPosition = path[path.length - 1];

  const imgWidth = 30; // Adjust the width of your image
  const imgHeight = 30; // Adjust the height of your image

  let currentStep = 0;//1
  var stepx = 0;// 15 
  var stepy = 0;// 0
  var pstepx = 0;//15
  var pstepy = 0;//0
  var dstepx = 0;//0
  var dstepy = 0;//0
  var x=0;
  var y=0;
  function animate() {
    if (currentStep < path.length - 1) {
      dstepx = Math.min(Math.abs(dstepx)+1, Math.abs(stepx))*Math.sign(stepx); /* premika v levo in desno*/
      dstepy = Math.min(Math.abs(dstepy)+1, Math.abs(stepy))*Math.sign(stepy);/* premika gor in dol */
      if(stepx==dstepx&&stepy==dstepy) { /* preveri, da je pršlo do naslednje točke */
        dstepx=0;
        dstepy=0;

        pstepx = path[currentStep][0]/16; /* shrani trenutno točko */
        pstepy = path[currentStep][1]/16;

        currentStep++; /* se premakne v naslednjo tocko */

        stepx = path[currentStep][0] / 16 - pstepx; /* shraniu točko, do katere bo interpoliralo */
        stepy = path[currentStep][1] / 16 - pstepy;
      } 
      ctx2.clearRect(x, y, imgWidth, imgHeight);
      audio.play();
      x = (dstepx+pstepx)*16 - imgWidth / 2; /* zračune na katerih koordinatah bo narisalo sliko */
      y = (dstepy+pstepy)*16 - imgHeight / 2;
      /*  ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);*/
      ctx2.drawImage(image, x, y, imgWidth, imgHeight);
     

      console.log(x+" "+y);

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 200);
    }
  }

  animate();
}

function drawMaze() {

  console.log("maze " + cord.length);
  ctx.beginPath();
  scale = 1.5;
  canvas.width = 484 * scale;
  canvas.height = 484 * scale;
  ctx.scale(scale, scale);
  ch.width = 484 * scale;
  ch.height = 484 * scale;
  ctx2.scale(scale, scale);
   brick1.onload = function() {
    ctx2.drawImage(brick1,50,119, brickWidth1, brickHeight1);
    ctx2.drawImage(brick1,164,87, brickWidth1, brickHeight1);
		ctx2.drawImage(brick1,37,391, brickWidth1, brickHeight1);
		ctx2.drawImage(brick2,100,462, brickWidth2, brickHeight2);
		ctx2.drawImage(brick2,195,0, brickWidth2, brickHeight2);
		ctx2.drawImage(brick3,150,145, brickWidth3, brickHeight3);
		ctx2.drawImage(brick3,260,449, brickWidth3, brickHeight3);
    ctx2.drawImage(brick3,80,257, brickWidth3, brickHeight3);
    };
  for (i = 0; i < cord.length; i++) {
    console.log("maze2");
    ctx.moveTo(cord[i][0], cord[i][1]);
    ctx.lineTo(cord[i][2], cord[i][3]);
  }
  ctx.lineWidth = 2;
  ctx.stroke();
  console.log("maze3 " + cord.length);
}

drawMaze();

//draw solution
function drawSolution() {
  document.getElementById("play").setAttribute("disabled", true);
  


  document.getElementById("play").removeAttribute("disabled");


}