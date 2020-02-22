const database= firebase.database();
const uRef=database.ref('/students');
const fName=document.getElementById("fName");
const regestrationNumber=document.getElementById("registrationNumber");
const instituteName=document.getElementById("instituteName");
const branch=document.getElementById("branch");
const contactNumber=document.getElementById("contactNumber");
const emailAddress = document.getElementById("emailAddress");
const dateOfBirth=document.getElementById("dateOfBirth");



function addStudent()
{
    const key=regestrationNumber.value +"_"+ contactNumber.value;
    uRef.child(key).set({
        fname : fName.value ,
        lname :lName.value ,
        registrationNumber :regestrationNumber.value ,
        instituteName :instituteName.value ,
        branch :branch.value ,
        contactNumber :contactNumber.value ,
        emailAddress : emailAddress.value,
        dateOfBirth :dateOfBirth.value 

    });
    document.getElementById("pppp").innerHTML="Congratulations!You are successfully registered!";
}

function delStudent(){
    const rNumber=document.getElementById("rNumber");
    const cNumber=document.getElementById("cNumber");
const yy=rNumber.value+"_"+cNumber.value;
var ff=0;
    uRef.on("value",function(snapshot){
        snapshot.forEach(function(childsnapshot){
            var x=childsnapshot.val();
            var zz=x.registrationNumber+"_"+x.contactNumber;
            if(yy.localeCompare(zz)==0){
                ff=1;
            document.getElementById("pp").innerHTML="The following details are successfully deleted:";
            document.getElementById("n").innerHTML="Name: "+x.fname+" "+x.lname;
            document.getElementById("r").innerHTML="Registration Number: "+x.registrationNumber;
            document.getElementById("i").innerHTML="Institution: "+x.instituteName;
            document.getElementById("b").innerHTML="Branch: "+x.branch;
            document.getElementById("c").innerHTML="Contact Number: "+x.contactNumber;
            document.getElementById("e").innerHTML="Email: "+x.emailAddress;
            document.getElementById("d").innerHTML="Date of Birth: "+x.dateOfBirth;
            
        }})
    })
    setTimeout(()=>{if(ff==0){
        document.getElementById("pp").innerHTML="This form does not exists!";
    }
    else{
        uRef.child(yy).remove();
    }},1500)
    
}

function viewStudent(){
    const rNumber=document.getElementById("rn");
    const cNumber=document.getElementById("cn");
    var ff=0;
const yy=rNumber.value+"_"+cNumber.value;
    uRef.on("value",function(snapshot){
        snapshot.forEach(function(childsnapshot){
            var x=childsnapshot.val();
            var zz=x.registrationNumber+"_"+x.contactNumber;
            if(yy.localeCompare(zz)==0){
                ff=1;
            document.getElementById("ppp").innerHTML="The following are the details you requested:";
            document.getElementById("nn").innerHTML="Name: "+x.fname+" "+x.lname;
            document.getElementById("rr").innerHTML="Registration Number: "+x.registrationNumber;
            document.getElementById("ii").innerHTML="Institution: "+x.instituteName;
            document.getElementById("bb").innerHTML="Branch: "+x.branch;
            document.getElementById("cc").innerHTML="Contact Number: "+x.contactNumber;
            document.getElementById("ee").innerHTML="Email: "+x.emailAddress;
            document.getElementById("dd").innerHTML="Date of Birth: "+x.dateOfBirth;
        }})

    })
    setTimeout(()=>{
    if(ff==0){
        document.getElementById("ppp").innerHTML="This form does not exists!";
    }},1500);
    
}

