// prendo il riferimento all'url con l'id 
const url="https://api.pexels.com/v1/photos/"
const addressbar= new URLSearchParams(location.search)
console.log(addressbar)

const idAddresBar=addressbar.get('id')
console.log(addressbar+idAddresBar)



  fetch(url+idAddresBar,{
    headers: {Authorization: "FM9mDktiks4VWmvJRnZiay70QgNEqKtZfGfsES3vOANycQarHBURMRLu"}
  })
  .then((res)=>{
    if(res.ok){
      console.log(res)
      return res.json()
    }else{
      throw new Error('errore lettura')
    }
  })

  .then((detail)=>{
    console.log(detail) 
   
    let newCol = document.createElement("div");
    newCol.classList.add('col','col-12','d-flex','justify-content-center')
    newCol.innerHTML=`<div class="card w-50 " >
    <img src=${detail.src.medium}class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${detail.alt}</h5>
      <a href=${detail.photographer_url} target="_blank"<p class="card-text">${detail.photographer}</p></a>
      <a href="Starting-template.html" class="btn btn-primary">Torna alla pagina principale</a>
    </div>
  </div>`
   
         
    document.querySelector('.row').appendChild(newCol)
    let body=document.querySelector('body')
    console.log(body)
    body.style.backgroundColor=`${detail.avg_color}`
  })


      
  .catch((err)=>{
      console.log(err)
  })
