// Main Function
function calculateEllipseArea(){
    const a=getInput("ellipse_a");
    const b=getInput("ellipse_b");
    const area=3.1416*a*b;
    setArea("ellipse_area_display",area);


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