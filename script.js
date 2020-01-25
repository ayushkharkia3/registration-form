const database= firebase.database();
const uRef=database.ref('/students');
const fName=document.getElementById("fName");
const mName=document.getElementById("mName");
const regestrationNumber=document.getElementById("registrationNumber");
const instituteName=document.getElementById("instituteName");
const branch=document.getElementById("branch");
const contactNumber=document.getElementById("contactNumber");
const emailAddress = document.getElementById("emailAddress");
const dateOfBirth=document.getElementById("dateOfBirth");

function addStudent()
{
    console.log(fName.value);
    console.log(mName.value);
    console.log(lName.value);
    console.log(regestrationNumber.value);
    console.log(instituteName.value);
    console.log(branch.value);
    console.log(contactNumber.value);
    console.log(emailAddress.value);
    console.log(dateOfBirth.value);
    const key=regestrationNumber.value +"_"+ contactNumber.value;
    uRef.child(key).set({
        fname : fName.value ,
        mname :mName.value ,
        lname :lName.value ,
        registrationNumber :regestrationNumber.value ,
        instituteName :instituteName.value ,
        branch :branch.value ,
        contactNumber :contactNumber.value ,
        emailAddress : emailAddress.value,
        dateOfBirth :dateOfBirth.value 

    });
    window.alert("Congratulations!You are successfully registered.");
}
