function calculateRectangleArea(){
    // Rectangle Width
    const rectangleWidthInput=document.getElementById("rectangle_width");
    const rectangleWidthValue=rectangleWidthInput.value;
    const rectangleWidth=parseFloat(rectangleWidthValue);
    console.log(rectangleWidth);

    // Rectangle Length
    const rectangleLengthInput=document.getElementById("rectangle_length");
    const rectangleLengthValue=rectangleLengthInput.value;
    const rectangleLength=parseFloat(rectangleLengthValue);
    console.log(rectangleLength);

    // Rectangle Area
    const rectangleArea=rectangleWidth*rectangleLength;
    console.log("Area of Rectangle is:",rectangleArea);

    // RectangleAreaDisplay
    const rectAngleAreaDisplay=document.getElementById("rectangle_area_display");
    rectAngleAreaDisplay.innerText=rectangleArea;
    

}