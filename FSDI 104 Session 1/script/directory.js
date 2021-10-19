function displayCards(){
    let aPet=salon.pets;
    let tmp="";

     let petsContainer=document.getElementById("petsContainer");
        petsContainer.innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
       
    tmp=`<div class="pet">
        <h5>${aPet[i].name}</h5>
        <li>Age: ${aPet[i].age}</li>
        <li>Gender: ${aPet[i].gender}</li>
        <li>Breed: ${aPet[i].breed}</li>
        <li>Service: ${aPet[i].service}</li>
        <li>Owner: ${aPet[i].owner}</li>
        <li>Phone: ${aPet[i].phone}</li>
        <button>Delete</button>
    </div>`;
    petsContainer.innerHTML+=tmp;
    }
    
    /*let li=document.createElement("li");
    let text=document.createTextNode(`${aPet.name}`);
    li.appendChild(text);
    document.getElementById("petsContainer").appendChild(li);*/

}

displayCards();