// Main Function
function calculateRhombusArea(){
    const d1=getInput("rhombus_d1");
    const d2=getInput("rhombus_d2");
    const area=0.5*d1*d2;
    setArea("rhombus_area_display",area);


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

