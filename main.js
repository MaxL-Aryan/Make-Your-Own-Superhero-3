var canvas=new fabric.Canvas('myCanvas');
block_img_wdth=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    });
}

function new_img(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_wdth);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='80')
    {
        console.log("p and shift pressed together");
        block_img_wdth=block_img_wdth+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_wdth;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey==true && keyPressed=='77')
    {
        console.log("m and shift pressed together");
        block_img_wdth=block_img_wdth-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_wdth;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if (keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if (keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if (keyPressed=='39')
    {
        right();
        console.log("right");
    }
    if (keyPressed=='70')
    {
        new_img("ironman_face.png");
        console.log("f");
    }
    if (keyPressed=='66')
    {
        new_img("spiderman_body.png");
        console.log("b");
    }
    if (keyPressed=='76')
    {
        new_img("hulk_legs (1).png");
        console.log("l");
    }
    if (keyPressed=='82')
    {
        new_img("thor_right_hand.png");
        console.log("r");
    }
    if (keyPressed=='72')
    {
        new_img("captain_america_left_hand.png");
        console.log("f");
    }
}
function up()
{
    if (player_y>=100)
    {
        player_y=player_y-block_img_height;
        console.log("block image height = "+block_img_height);
        console.log("when up arrow clicked,X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if (player_y<=450)
    {
        player_y=player_y+block_img_height;
        console.log("block image height = "+block_img_height);
        console.log("when down arrow clicked,X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if (player_x<=850)
    {
        player_x=player_x+block_img_wdth;
        console.log("block image width = "+block_img_wdth);
        console.log("when right arrow clicked,X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if (player_x>=0)
    {
        player_x=player_x-block_img_wdth;
        console.log("block image width = "+block_img_wdth);
        console.log("when right arrow clicked,X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}