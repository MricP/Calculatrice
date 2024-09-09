const btn = document.querySelectorAll("button");

btn.forEach( button =>{
    if (button.textContent == "="){
        button.style.backgroundColor = "orange";
    }
    button.onclick = () => {
    
    if(button.textContent == "C"){
        document.body.querySelector("input").value = " ";
    }
    else if (button.textContent != "=" && button.textContent != "C" && button.textContent != "DEL"){
        document.body.querySelector("input").value = document.body.querySelector("input").value + button.textContent;
    }
    else if(button.textContent == "DEL"){
        document.body.querySelector("input").value = document.body.querySelector("input").value.substring(0,document.body.querySelector("input").value.length -1);
    }
   else{
    document.body.querySelector("input").value = eval(document.body.querySelector("input").value);
    
   }
};});


