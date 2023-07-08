function Btn(){
    const clickHandler= 
    () => console.log("mouse over")
return(
    <button onMouseOver={clickHandler}>
        Click Me
    </button>
);
}
export default Btn;