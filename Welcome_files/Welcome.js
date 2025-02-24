// Created by iWeb 3.0.4 local-build-20171129

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWPhotoFrame([IWCreateImage('Welcome_files/PrintedPaper_frame_01_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_02_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_03_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_06_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_09_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_08_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_07_1.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_04_1.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000),stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/PrintedPaper_frame_01.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_02.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_03.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_06.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_09.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_08.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_07.png'),IWCreateImage('Welcome_files/PrintedPaper_frame_04.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000),shadow_1:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
