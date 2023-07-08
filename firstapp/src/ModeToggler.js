function ModeToggler(){
    let darkModeOn=false;
    const darkMode=<h1>Dark Mode is on</h1>
    const lightMode=<h1>Light Mode is on</h1>


    function handleClick(){
        darkModeOn=!darkModeOn;

        if(darkModeOn==true){
            console.log("Dark Mode is On")
        }else{
            console.log("Ligth Mode is On")
        }
        
    }
return(
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>
        Click me    
        </button>
    </div>
);
}

export default ModeToggler;