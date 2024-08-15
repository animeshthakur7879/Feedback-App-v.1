let form = document.querySelector("form");
let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let rating = document.querySelector("#select");
let textarea = document.querySelector("#comment");
let reviewSection = document.querySelector(".review-section");
let ul = document.querySelector("ul");
let h4 = document.querySelector("#heading")

let count = 0


const addFeedback = (event) =>{
    event.preventDefault();
    // console.log(name.value);
    // console.log(mail.value);
    // console.log(rating.value);
    // console.log(comment.value);

    count++;
    console.log(count);

    h4.className = "text-center display-5 mb-4 "

    // let h4 = document.createElement("p");
    // h4.innerText = "Latest Reviews";
    // h4.className = "text-center display-6";
    // reviewSection.appendChild(h4);

    let li = document.createElement("li");
    let h1Name = document.createElement("h4");
    let h1Mail = document.createElement("h4");
    let h1Rating = document.createElement("h4");
    let p = document.createElement("p");
    let delBtn = document.createElement("button");

    if(rating.value < 3){
        li.className = "list-group-item px-5 py-4 rounded-0 display-6 fw-light mb-5 ";
        li.style.backgroundColor = "#FF6868";
    }
    else if(rating.value == 3){
        li.className = "list-group-item px-5 py-4 rounded-0 display-6 fw-light mb-5 ";
        li.style.backgroundColor = "#FFBB64";
    }
    else{
        li.className = "list-group-item px-5 py-4 rounded-0 display-6 fw-light mb-5 ";
        li.style.backgroundColor = "#9ADE7B";
    }

    

    h1Name.innerText = `Name : ${name.value}`;
    h1Mail.innerText = `Mail : ${mail.value}`;
    h1Rating.innerText = `Rating : ${rating.value}`;
    p.innerText = `Review : ${textarea.value}`;

    delBtn.innerText = "Delete";

    if(rating.value < 3)
    {
        delBtn.className = "btn btn-light py-2 px-4";
    }
    else{
        delBtn.className = "btn btn-light py-2 px-4";
    }
    
    
    
    // delBtn.style.backgroundColor = "#DAD4B5";

    li.appendChild(h1Name);
    li.appendChild(h1Mail);
    li.appendChild(h1Rating);
    li.appendChild(p);
    li.appendChild(delBtn);

    ul.appendChild(li);
   
    

    form.reset();
}


form.addEventListener("submit" , addFeedback);

const remove = (event) => {

    let li = event.target.parentElement ;

    if(count>1){
        if(event.target.className.includes("btn")){
            if(window.confirm("Are you sure ?")){
                ul.removeChild(li);
            }
        } 
        count--;  
        console.log(count); 
    }
    else{
        if(event.target.className.includes("btn")){
            if(window.confirm("Are you sure ?")){
                ul.removeChild(li);
                h4.className = "d-none";
            }
        } 
        }
        
}


ul.addEventListener("click" , remove);


