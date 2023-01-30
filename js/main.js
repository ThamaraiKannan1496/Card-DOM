let productTwo = {
  prod_img: "../img/team-1.jpg",
  prod_info: "From Dynamic Card-JS",
  prod_btn: "Mathew",
};

let columThree = document.createElement("div");
columContainer = document.createElement("div");
columImg = document.createElement("div");
colum_img = document.createElement("img");
colum_Info = document.createElement("div");
columPara = document.createElement("p");
columBtn = document.createElement("button");
columA = document.createElement("a");

columThree.setAttribute("class", "col-3");
columContainer.setAttribute("class", "card-container");
columImg.setAttribute("class", "card-img");
colum_Info.setAttribute("class", "card-info");
columA.setAttribute("href", "#");

colum_img.src = productTwo.prod_img;
columPara.innerText = productTwo.prod_info;
columA.innerText = productTwo.prod_btn;

columThree.appendChild(columContainer);
columContainer.append(columImg, colum_Info);
columImg.append(colum_img);
colum_Info.append(columPara, columBtn);
columBtn.appendChild(columA);

let insertCard = document.getElementById("prod-2");
insertCard.appendChild(columThree);
// document.getElementsByClassName("card-info")
