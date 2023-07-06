let myform = document.querySelector("form");
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  let inputValue = input.value;
  console.log(inputValue);
  const URLSearch = `https://api.pexels.com/v1/search?query=${inputValue}`;
  getPhotoApi(URLSearch);
  inputValue = "";
});

const URLFirstLoad = "https://api.pexels.com/v1/search?query=kittens";
const URLSecondLoad = "https://api.pexels.com/v1/search?query=dogs";

const getPhotoApi = function (url) {
  fetch(url, {
    headers: {
      Authorization: "FM9mDktiks4VWmvJRnZiay70QgNEqKtZfGfsES3vOANycQarHBURMRLu",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore chiamata");
      }
    })

    .then((data) => {
      console.log(data);
      let myRow = document.getElementById("myRow");
      let singlefoto = data.photos;
      singlefoto.forEach((el, i) => {
        let newCol = document.createElement("div");
        newCol.classList.add("mt-4", "col", "col-6", "col-md-4", "col-lg-3");
        newCol.innerHTML = `<div class="card" >
          <img src="${el.src.portrait}" class="img-fluid card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">${el.photographer}</p>
            <a href="detail.html?id=${el.id}" class="btn btn-primary mt-2">Scopri di piu..</a>
            <button id='editB' class='btn btn-danger mt-2'>hide</button>
            <p>id phot:${el.id}</p>
          </div>
        </div>`;

        myRow.appendChild(newCol);
        let deleteB = document.querySelectorAll("#editB");
        let allButton = deleteB[i];
        allButton.addEventListener("click", () => {
          allButton.parentElement.parentElement.remove();
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
};
let firstB = document.getElementById("first-button");
firstB.addEventListener("click", () => {
  getPhotoApi(URLFirstLoad);
});

let secondB = document.getElementById("second-button");
secondB.addEventListener("click", () => {
  getPhotoApi(URLSecondLoad);
});
