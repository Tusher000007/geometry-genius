// Main Function
function calculatePentagonArea(){
    const p=getInput("pentagon_p");
    const a=getInput("pentagon_a");
    const area=0.5*p*a;
    setArea("pentagon_area_display",area);


}
// Input with function
function getInput(inputWithId){
    const inputField=document.getElementById(inputWithId);
    const inputValue=inputField.value;
    const input=parseFloat(inputValue);
    return input;

}
// Area Display with function
function setArea(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}
