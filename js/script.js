window.onload = function(){
  moreFilms = document.getElementById("filmsLink");
  moreFilms.onclick = function(event){
    event.preventDefault()
    showFilms(moreFilms);
  }

  
  
  form = document.getElementById("form");
  formButton = document.getElementById("sendButton");
  formButton.onclick = function(){
    validate(form)
  }
  
  linkOnForm = document.getElementById("link");
  linkOnForm.onclick = function(){
    document.getElementById("form").style.display = "block";
    document.getElementById("back").style.display = "block";
  }
  
  document.getElementById("canсel").onclick = cancelForm;
  document.getElementById("back").onclick = cancelForm;
  
  document.body.onclick = function(event){ 
    var form = document.getElementById("form");
    if ((event.target == form.name) || (event.target == form.email) 
        || (event.target == form.comment)){
      clickInput(event.target);
    }
    borderInput(event.target, form);  
  }
}

function showFilms(elem){  
  blockFilms = document.getElementById("moreFilms");
  blockFilms.style.display = "block";
  
  var i = 0;
  setTimeout(function opacity() {
    i += 0.01;
    blockFilms.style.opacity = i;
    if (i <= 1){
      setTimeout(opacity, 5);    
    }
  }, 5);
  
  elem.style.display = "none";
}

function validate(form) {
  var elems = form.elements;
  errorCheck(elems.name);
  errorCheck(elems.email);
  errorCheck(elems.comment);
}

function errorCheck(input){
  if (input.value == ""){
    input.style.border = "2px solid #ff0000";
  } else {
    input.style.border = "2px solid #c9c9c9";
  }  
}

function clickInput(target){
  if (target.style.border == "2px solid rgb(255, 0, 0)"){
      target.style.border = "2px solid #15a98c";     
  }  
}

function borderInput(target, form){
  if ((target != form.name) && (form.name.style.border == "2px solid rgb(21, 169, 140)")){
    form.name.style.border = "2px solid #c9c9c9";
  }
  if ((target != form.email) && (form.email.style.border == "2px solid rgb(21, 169, 140)")){
    form.email.style.border = "2px solid #c9c9c9";
  }
  if ((target != form.comment) && (form.comment.style.border == "2px solid rgb(21, 169, 140)")){
    form.comment.style.border = "2px solid #c9c9c9";
  }
  if (target.style.border == "2px solid rgb(201, 201, 201)"){
    target.style.border = "2px solid #15a98c"
  }
}

function cancelForm(){
  document.getElementById("form").style.display = "none";
  document.getElementById("back").style.display = "none";
}
