//your parameter variables go here!
let rect_width  = 20; 
let rect_height = 20;

let octoHead = 82 // controls size of octopus head aswell as colour due to if statement below
let octoSmile = 7 // controls size of octopus smile aswell as seaweed colour due to if statement below
let octoEye = 12 // controls the size of the black ellipse representing octopus eye
let octoMouthStroke = 2 //controls the strokeWeight of the octopus mouth
let waves = 3 // controls the strokeWeight of the wave pattern
let starMouth = 4 //controls the size of the starfish mouth aswell as starfish colour due to if statement below
let starEye = 6 //controls size of the black ellipse representing the starfish eye
let wallpaperColour = 1 //controls the colour of the background due to if statement below

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
if (wallpaperColour == 1) {
  background (130, 207, 255);
}
else if (wallpaperColour == 2){
background (20, 120, 128)
}
else {
  background (9, 52, 171)
}

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//wave backdrop line 1
if (waves > 2) {
stroke (24, 109, 173);
}
else {
stroke (110, 155, 184);
}

if (wallpaperColour == 1) {
  fill (130, 207, 255);
}
else if (wallpaperColour == 2){
fill (20, 120, 128)
}
else {
  fill (9, 52, 171)
}

strokeWeight (waves)


beginShape ()
curveVertex (0,30);
curveVertex (0,30);

curveVertex (20,10);
curveVertex (40,30);
curveVertex (60,10);
curveVertex (80,30);
curveVertex (100,10);
curveVertex (120,30);
curveVertex (140,10);
curveVertex (160,30);
curveVertex (180,10);

curveVertex (200,30);
curveVertex (200,30);


endShape ()

//wave backdrop line 2



beginShape ()
curveVertex (0,60);
curveVertex (0,60);

curveVertex (10,50);
curveVertex (30,70);
curveVertex (50,50);
curveVertex (70,70);
curveVertex (90,50);
curveVertex (110,70);
curveVertex (130,50);
curveVertex (150,70);
curveVertex (170,50);
curveVertex (190,70);

curveVertex (200,60);
curveVertex (200,60);



endShape ()

//wave backdrop line 3



beginShape ()
curveVertex (0,110);
curveVertex (0,110);

curveVertex (20,90);
curveVertex (40,110);
curveVertex (60,90);
curveVertex (80,110);
curveVertex (100,90);
curveVertex (120,110);
curveVertex (140,90);
curveVertex (160,110);
curveVertex (180,90);

curveVertex (200,110);
curveVertex (200,110);


endShape ()

//wave backdrop line 4



beginShape ()
curveVertex (0,140);
curveVertex (0,140);

curveVertex (10,130);
curveVertex (30,150);
curveVertex (50,130);
curveVertex (70,150);
curveVertex (90,130);
curveVertex (110,150);
curveVertex (130,130);
curveVertex (150,150);
curveVertex (170,130);
curveVertex (190,150);

curveVertex (200,140);
curveVertex (200,140);


endShape ()

//wave backdrop line 5



beginShape ()
curveVertex (0,190);
curveVertex (0,190);

curveVertex (20,170);
curveVertex (40,190);
curveVertex (60,170);
curveVertex (80,190);
curveVertex (100,170);
curveVertex (120,190);
curveVertex (140,170);
curveVertex (160,190);
curveVertex (180,170);

curveVertex (200,190);
curveVertex (200,190);


endShape ()


//seaweed top
if (octoSmile < 10){
  fill (76, 166, 96);
}
else {
  fill (5, 84, 62)
}

strokeWeight (0)

stroke (0,0,0)

beginShape ()

curveVertex (100,0);
curveVertex (100,0);

curveVertex (95,15);
curveVertex (79,20);
curveVertex (79,35);
curveVertex (60,52);
curveVertex (45,88);
curveVertex (25,92);
curveVertex (12,108);

curveVertex (27,102);
curveVertex (55,92);
curveVertex (70,85);
curveVertex (85,67);
curveVertex (105,56);
curveVertex (99,43);
curveVertex (112,28);
curveVertex (110,20);

curveVertex (120,0);
curveVertex (120,0);

endShape ()



//octopus head
strokeWeight (2);

if (octoHead > 80) {
stroke (115, 67, 181)
fill (162, 138, 237)
}
else {
stroke (207, 41, 88)
fill (255, 92, 103);
}


ellipse (70,70,octoHead,octoHead);
//left leg
beginShape ()

curveVertex (40,96);
curveVertex (40,96);

curveVertex (25,119,);
curveVertex (13,112);
curveVertex (6,117);
curveVertex (9,128);
curveVertex (28,135);

curveVertex (51,105);
curveVertex (51,105);

endShape ( )

//left middle leg
beginShape ()

curveVertex (55,103);
curveVertex (55,106);

curveVertex (41,137);
curveVertex (35,147);

curveVertex (40,154);
curveVertex (52,148);

curveVertex (66,109);
curveVertex (66,107);
endShape ()

//right middle leg
beginShape ()

curveVertex (72,109,);
curveVertex (72,109,);

curveVertex (84,148,);
curveVertex (90,157,);
curveVertex (98,156,);
curveVertex (101,151,);
curveVertex (96,143,);

curveVertex (84,107,);
curveVertex (84,107,);

endShape ()


//right leg
beginShape ()

curveVertex (90,104);
curveVertex (90,104);

curveVertex (100,119,);
curveVertex (117,135);
curveVertex (133,130);
curveVertex (137,120);
curveVertex (130,118);
curveVertex (120,123);
curveVertex (110,108);

curveVertex (101,95);
curveVertex (101,95);


endShape ()

angleMode (DEGREES);

//eyes
strokeWeight (0)
fill (0,0,0);
ellipse (53,65,octoEye,octoEye);
ellipse (86,65,octoEye,octoEye);

fill (256,256,256);
ellipse (54,64,5,5);
ellipse (87,64,5,5);

//mouth
if (octoHead > 80) {
  fill (162, 138, 237)  
  }
  else{
  fill (255, 92, 103);
  }

strokeWeight (octoMouthStroke)
stroke (0,0,0)
arc (70,80,octoSmile,octoSmile,0,180);



//seaweed bottom
if (octoSmile < 10){
  fill (76, 166, 96);
}
else {
  fill (5, 84, 62)
}

strokeWeight (0)

beginShape ()

curveVertex (0,200,);
curveVertex (0,200);

curveVertex (20,190);
curveVertex (25,180);
curveVertex (50,175);
curveVertex (70,180);
curveVertex (85,170);
curveVertex (100,172);
curveVertex (120,160);
curveVertex (128,161);
curveVertex (140,150);
curveVertex (150,151);
curveVertex (165,141);

curveVertex (163,150);
curveVertex (150,158);
curveVertex (143,157);
curveVertex (127,175);
curveVertex (105,190);
curveVertex (86,185);
curveVertex (60,195);
curveVertex (40,190);

curveVertex (20,200);
curveVertex (20,200);


endShape ()

//starfish
strokeWeight (2)

if (starMouth > 5) {
fill (255, 149, 128);
stroke (240, 107, 84);
}
else {
 fill (255, 191, 223);
 stroke (255, 102, 176);
}

  

beginShape ()

curveVertex (157,27);
curveVertex (157,27);

curveVertex (145,53);
curveVertex (123,53);
curveVertex (140,65);
curveVertex (135,88);
curveVertex (157,74);
curveVertex (178,88);
curveVertex (173,65);
curveVertex (190,53);
curveVertex (168,53);

curveVertex (157,27);
curveVertex (157,27);



endShape ()

//starfish eyes
strokeWeight (0)
fill (0,0,0);
ellipse (149,58,starEye,starEye);
ellipse (163,58,starEye,starEye);

fill (256,256,256);
ellipse (150,57,3,3);
ellipse (164,57,3,3);

//starfish mouth
stroke (0,0,0)
if (starMouth > 5) {
  fill (255, 149, 128)
  }
  else {
   fill (255, 191, 223)
  }

strokeWeight (1)
arc (156,65,starMouth,starMouth,0,180);

//bubbles
strokeWeight (0)
fill (106, 167, 176);
ellipse (170,136,26,26);
ellipse (150,112,19,19);
ellipse (175,102,15,15);

fill (197, 244, 250)
ellipse (168,135,25,25);
ellipse (148,111,18,18);
ellipse (174,101,14,14);


fill (240, 253, 255)
ellipse (164,130,10,8);
ellipse (146,107,6,5);
ellipse (171,98,4,3);
}
