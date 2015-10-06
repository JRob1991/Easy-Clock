// Current time
function currentTime() {
  d = new Date(); //new data object
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

// 0 if #'s under 9
  if(hr <= 9) hr = '0'+hr;
  if(min <= 9) min = '0'+min;
  if(sec <= 9) sec = '0'+sec;
  
  color = "#"+hr+min+sec;
  //set background color
  document.body.style.background = color;
  //set time
  document.getElementById("clock").innerHTML = color;
  
  setTimeout(currentTime, 1000);
}

//calling the function
currentTime();

