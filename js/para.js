// Main Function
function calculateParaArea(){
    // Calling base with function
    const base=getAnyInput("para_base");
    console.log(base);
    // Calling height with function
    const height=getAnyInput("para_height");
    console.log(height);
    const area=base*height;
    console.log("Area of Parallelogram is:",area);
    // Display para area with function
    setArea("para_area_display",area);
    
}
// Function for Input
function getAnyInput(anyInput){
    const inputField=document.getElementById(anyInput);
    const inputValue=inputField.value;
    const input=parseFloat(inputValue);
    return input;
}
// Function for Area
function setArea(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;

}