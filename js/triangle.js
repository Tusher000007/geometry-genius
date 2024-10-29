// Triangle Area
function calculateTriangleArea(){
    // Triangle Base
    const triangleBaseInput= document.getElementById("triangle_base");
    const triangleBaseValue=triangleBaseInput.value;
    const triangleBase= parseFloat(triangleBaseValue);
    console.log(triangleBase);

// Triangle Height

    const triangleHeightInput= document.getElementById("triangle_height");
    const triangleHeightValue=triangleHeightInput.value;
    const triangleHeight=parseFloat(triangleHeightValue);
    console.log(triangleHeight);
    const triangleArea= 0.5*triangleBase*triangleHeight;
    console.log("Area of Triangle is: ",triangleArea);
    // Triangle_Area_Display
    const triangle_area_display=document.getElementById("triangle_area_display");
    triangle_area_display.innerText=triangleArea;
}
