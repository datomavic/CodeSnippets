/**
 * -- "Fade-out" an element in the document --
 * A snippet of code which will slowly fade out an element
 * by using opacity. Once it is 'invisible', element will be
 * removed from document.
 * @param {Object} element an element to fade out of. 
 */
let fade = function(element){
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = "none";
          element.remove();
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 3);
}

/**
 * -- "Fade in" an element in the document -- 
 * A snippet of code which will slowly fade in an element
 * by using opacity.
 * @param {Object} element an element to fade into
 */
let unfade = function(element){
  let op = 0.1;  // initial opacity
  element.style.display = 'block';
  let timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 2);
}

/**
 * -- Initiate a download -- 
 * A snippet of code which initiates a download of a file based on 
 * any content you want it to using a 'blob' bound to an anchor tag
 * inside the document.
 */
let downloadFile = function(){
  const content = 'This is our file content';
  const fileExtension = ".txt";
  const type = `${fileExtension};charset=utf-8`;
  const fileName = 'ourFileName'+fileExtension;
  const blob = new Blob([content], {type});
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = fileName;
  document.body.append(anchor);
  //If user selects "yes", click the anchor tag under-the-hood.
  if(confirm("Are you sure you'd like to download this file?"))
    anchor.click();
}

