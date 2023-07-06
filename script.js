const URLFirstLoad = "https://api.pexels.com/v1/search?query=kittens";

const getPhotoApi = function () {
  fetch(URLFirstLoad, {
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
      let firstButton = document.getElementById("first-button");
      let myRow = document.getElementById("myRow");
      let singlefoto = data.photos;
      singlefoto.forEach((el, i) => {
        firstButton.addEventListener("click", () => {
          let newCol = document.createElement("div");
          newCol.classList.add(
            "d-flex",
            "col",
            "col-6",
            "col-md-4",
            "col-lg-3",
            "g-3"
          );
          newCol.innerHTML = `<div class="card" style="width: 18rem;">
          <img src="${el.src.large}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">${el.photographer}
                </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <button id='editB'>hide</button>
            <span>id phot:${el.id}
          </div>
        </div>`;

          myRow.appendChild(newCol);
          let deleteB = document.querySelectorAll("#editB");
          let allButton = deleteB[i];
          allButton.addEventListener("click", () => {
            allButton.parentElement.parentElement.remove();
          });
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

getPhotoApi();

const URLSecondLoad = "https://api.pexels.com/v1/search?query=dogs";

const getsecondapi = function () {
  fetch(URLSecondLoad, {
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
      let secondButton = document.getElementById("second-button");
      let myRow = document.getElementById("myRow");
      let singlefoto = data.photos;
      singlefoto.forEach((el,i) => {
        secondButton.addEventListener("click", () => {
          let newCol = document.createElement("div");
          newCol.classList.add(
            "d-flex",
            "col",
            "col-6",
            "col-md-4",
            "col-lg-3",
            "g-3"
          );
          newCol.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${el.src.large}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-around">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${el.photographer}
                  </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
              <button id='editB'>edit</button>
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
})

    .catch((err) => {
      console.log(err);
    });
};

getsecondapi();
