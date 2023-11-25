     document.addEventListener('DOMContentLoaded',()=>{
    const signupPage=document.getElementById("signup");
    const profilePage=document.getElementById("profile");
    const successPage=document.getElementById("successheading")
    const accessToken=localStorage.getItem('accessToken');
//      if(accessToken)  {
//   showProfilePage();
//      }else{
//      showSignupPage();
//     }
const signupForm=document.getElementById("signupform")
 signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
         const accessToken=generateRandomToken();
        const password= document.getElementById("password").value;
         const confirmpassword= document.getElementById("confirmpassword").value;
        
        if(password===confirmpassword){
         
        const user={
            userName:document.getElementById("username").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            confirmpassword: document.getElementById("confirmpassword").value,
        };
        
        
        localStorage.setItem('accessToken',accessToken);
          localStorage.setItem('user',JSON.stringify(user));
          if(accessToken)  {
            
            showProfilePage();
               }else{
               showSignupPage();
              }
    }
     else{
        showErrorMessage("Error :All Fields are Mandatory!");

    }

     });

   
    function showSuccessPage(){
      
      signupPage.style.display= 'none';
      profilePage.style.display='none';
      successPage.style.display='block';
   
  }
   const errorMessage=document.getElementById("errormessage");
      function showErrorMessage(message){
        errorMessage.textContent=message;
         errorMessage.style.color='red';

     }


     const logoutButton=document.getElementById("logoutbtn");
     logoutButton.addEventListener("click",()=>{

        
        showSignupPage();
        localStorage.remove();
     });
     function showSignupPage(){
        signupPage.style.display= 'block';
        errorMessage.textContent=' ';
        profilePage.style.display='none';
     }
     function showProfilePage(){
      showSuccessPage();
        signupPage.style.display= 'none';
        profilePage.style.display='block';
        displayUserProfile();
     }
     function displayUserProfile(){

        const user=JSON.parse(localStorage.getItem('user')); 
        const userNameDisplay=document.getElementById("usernamedisplay") ;
        const emailIdDisplay=document.getElementById("emailiddisplay");
        const tokenDisplay=document.getElementById("tokendisplay");
        const passwordDisplay=document.getElementById("passworddisplay") ;
        userNameDisplay.textContent =`FullName : ${user.userName}`;
        emailIdDisplay.textContent=`Email : ${user.email}`;
        tokenDisplay.textContent=`Token :${accessToken}`;
        passwordDisplay.textContent=`Password : ${user.password}`;
     }

     function generateRandomToken(){
        return Array.from({length:16},()=>Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
     }
    })  

