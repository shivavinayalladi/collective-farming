function redirect()
{
    var name=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
   
   window.alert("Account has been created!!! Welcome "+name);
} 
function forgotpassword()
{
    var name=document.getElementById("email").value;
    let k=0;
    for(let i in name)
    {
        if(name[i]=='@')
        {
           k=1;
        }
    }
    if(k==0)
    {
        window.alert("Improper mail id attached "+name);
    }else{
        document.write("Verification message is sent to the mail "+name);
    }
}