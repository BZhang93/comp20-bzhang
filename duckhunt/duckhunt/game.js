function draw()
{
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var sprite = new Image();
sprite.onload=function(){

/*dog1*/
ctx.drawImage(sprite, 315, 60, 60, 40, 300, 460, 60, 40);
/*dirt road*/
ctx.drawImage(sprite, 0, 715, 900, 900, 0, 415, 800, 185);
/* dog2*/
ctx.drawImage(sprite, 0, 0, 60, 45, 400, 520, 60, 45);
/*tree*/
ctx.drawImage(sprite, 0, 270, 70, 360, 50, 430, 70, 360);	
/*birds*/
ctx.drawImage(sprite, 80, 120, 35, 30, 600, 126, 35, 30);
ctx.drawImage(sprite, 80, 120, 35, 30, 550, 100, 35, 30);
ctx.drawImage(sprite, 80, 120, 35, 30, 575, 180, 35, 30);
ctx.drawImage(sprite, 130, 230, 40, 36, 460, 525, 40, 36);
ctx.drawImage(sprite, 300, 155, 40, 35, 123, 277, 40, 35);
ctx.drawImage(sprite, 300, 155, 40, 35, 160, 300, 40, 35);
ctx.drawImage(sprite, 300, 155, 40, 35, 200, 250, 40, 35);
ctx.drawImage(sprite, 180, 235, 20, 30, 190, 530, 20, 30);
ctx.drawImage(sprite, 180, 235, 20, 25, 690, 479, 20, 25);
	}
sprite.src = 'duckhunt.png';
}