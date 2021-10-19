let salon= {
    name: "The Fashion Pet",
    address:{
        city:"Tijuana",
        street:"Av. Universidad",
        number:"I404",
        zip:"22111",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm",
    },
    phone:"555-555-5555",
    pets:[],
}
class Pet{
    constructor(name, age, gender, breed, service, owner, phone){
        this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.phone=phone;
    }
    
}


//get the values from the form
let petName=document.getElementById("txtName");
let petAge=document.getElementById("txtAge");
let petGender=document.getElementById("txtGender");
let petBreed=document.getElementById("txtBreed");
let petService=document.getElementById("txtService");
let ownerName=document.getElementById("txtOwnerName")
let ownerPhone=document.getElementById("txtOwnerPhone")
//and store them into variables

function register(){
    
    //create the obj
    let thePet= new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,ownerName.value,ownerPhone.value); 
    //push the obj into the array
    salon.pets.push(thePet);
    //display the result
    displayCards(thePet);
    alert(`You registered a new pet!!! You have ${salon.pets.length} pets.`);
    clearForm();
}   
//create the clearform
function clearForm(){
    petName.value="";
    petAge.value="";
    petGender.value="";
    petBreed.value="";
    petService.value="";
    ownerName.value="";
    ownerPhone.value="";

}

function init(){
    let scooby=new Pet("Scooby",50,"Male","Dane","Nail Trim","Shaggy","555-555-4444");
let scrappy=new Pet("Scrappy",40,"Male","Mixed","Bath","Shaggy","555-555-4444")
let tweety=new Pet("Tweety",50,"Male","Canary","Pedicure","Granny","555-663-1234")
salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(tweety);
displayCards();
}
window.onload=init;







