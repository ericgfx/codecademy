var chapters = [
"Hello World",
"What was My Mind Just Thinking",
"Count Squirrels!",
"The One-Hour Investment",
"The Concentration Game",
"The Concentration Game",
"The Concentration Game + Name that Loop",
"The Concentration Game + Name that Loop",
"The Concentration Game + Name that Loop",
"The Concentration Game + Five Words",
"The Concentration Game + Write Now",
"The Concentration Game + Write Now",
"The Concentration Game + Write Now",
"The Concentration Game + Write Now",
"The Concentration Game + Write Now + Remind your mind",
"The Concentration Game + Write Now + Simulator",
"The Concentration Game + Write Now + Simulator",
"The Concentration Game + Write Now + Simulator",
"The Concentration Game + Write Now + Simulator + Share the Dream",
"The Concentration Game + Write Now + Simulator + Laser",
"The Concentration Game + Write Now + Simulator + Laser"];


for(var i=1; i<22; i++)
{
  var a=document.createElement('a');
  document.body.appendChild(a);
  var chapterTitle = chapters[i-1];
  for (var x=0; x<8; x++)
  {
  	chapterTitle = '.' + chapterTitle;
  }
  
  var dayString=i;
  if(dayString<10)
    dayString='0'+i;
  a.innerHTML="Day "+dayString+" " + chapterTitle + "<br />";    
  a.href='https://gallery.mailchimp.com/49c4a9cf3d803d571e014b0e3/files/Mind_Hacking_Day_'+dayString+'.mp3'
}