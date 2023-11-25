     document.addEventListener('DOMContentLoaded',()=>{
    const signupPage=document.getElementById("signup");
    const profilePage=document.getElementById("profile");
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
        showErrorMessage("password and confirm password do not match.");
    }

     });

     const successMessage=document.getElementById("successheading");
    function showSuccessfullMessage(message){
      successMessage.textContent=message;
   
  }
   const errorMessage=document.getElementById("errormessage");
      function showErrorMessage(message){
        errorMessage.textContent=message;
         errorMessage.style.color='red';

     }


     const logoutButton=document.getElementById("logoutbtn");
     logoutButton.addEventListener("click",()=>{

        localStorage.clear();
        showSignupPage();
     });
     function showSignupPage(){
        signupPage.style.display= 'block';
        profilePage.style.display='none';
     }
     function showProfilePage(){
        signupPage.style.display= 'none';
        profilePage.style.display='block';
        displayUserProfile();
     }
     function displayUserProfile(){
     showSuccessfullMessage("Signup Successful!");

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

