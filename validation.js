const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const mobile=document.getElementById('mobile');
const country=document.getElementById('country');
const date=document.getElementById('date');
const age=document.getElementById('age');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});
function checkInputs()
{
   const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    const mobileValue=mobile.value.trim();
    const countryValue=country.value.trim();
    const dateValue=date.value.trim();
    const ageValue=age.value.trim();
    
    if(usernameValue === ''){
      
    setErrorFor(username,'Username cannot be blank');
    }
    
    else if(!checkName(usernameValue))
    {
        setErrorFor(username,'Username is not valid');
       
    
    }
    else {
        setSuccessFor(username);
    }

    if(emailValue === ''){

    setErrorFor(email,'Email cannot be blank');
    }

    else if(!isEmail(emailValue))
    {
    setErrorFor(email,'Email is not valid');
    }

    else{

        setSuccessFor(email);   
    }

    if(passwordValue === ''){
      
        setErrorFor(password,'password cannot be blank');
        }
    
        else{
            setSuccessFor(password);
        }

        
    if(password2Value === ''){
      
        setErrorFor(password2,'password2 cannot be blank');
        }
    
    else if(passwordValue !== password2Value)
    {

        setErrorFor(password2,'password does not match');
    }

    if(!checkPassword(passwordValue))
    {
   setErrorFor(password,'Password contain 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
     }


    if(!checkPassword(password2Value))
     {
    setErrorFor(password2,'Password conatain 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
      }
    
    else
    {
            setSuccessFor(password2);
        }

        
    if(mobileValue === ''){
      
        setErrorFor(mobile,'Please enter mobile number');
            }
       
    else if(!checkMobile(mobileValue))
    {
        setErrorFor(mobile,'Mobile number is not valid');
    }
    else{
        setSuccessFor(mobile);
            }
        
    if(dateValue === ''){
      
    setErrorFor(date,'Please select the date');
    }

    else{
        setSuccessFor(date);
    }

    if(countryValue === ''){
      
        setErrorFor(country,'Please select country');
        }
    
    else if(countryValue ===  'Select')
    {
        setErrorFor(country,'Please select your country');
    }
        else{
            setSuccessFor(country);
        }
    if(ageValue === '')
    {
        setErrorFor(age,'Please enter age');
    }
    else if(!(ageValue>20 && ageValue<=36))
    {
       setErrorFor(age,'Please enter age between 20 and 37');
    }
    else 
    {
        setSuccessFor(age);
    }
   
    
   if(document.getElementById('male').checked==true || document.getElementById('female').checked)
   {
       setSuccessFor(male);
   }
 
   else{
       setErrorFor(male,'Please select gender');
   }
   
}


function setErrorFor(input,message)
{
const formControl=input.parentElement;
const small=formControl.querySelector('small'); //form control

small.innerText=message; //add error control inside small

//add error class
formControl.className='form-control error';


}

function setSuccessFor(input)
{
    const formControl=input.parentElement;
    formControl.className='form-control success';


}

function isEmail(email)
{
 return /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/.test(email);

}

function checkName(username)
{
    return /^[a-zA-Z0-9\s]+$/.test(username);
}

function checkMobile(mobile)
{
    return /^[1-9]\d{9}$/.test(mobile);
}

function checkPassword(password,password2)
{
 
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password,password2);

} 