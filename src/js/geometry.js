//#region Global variables
const PI = Math.PI;

const radio = document.getElementById("radio");
const diameter = document.getElementById("diameter");
//#endregion

//#region Radio Button Actions
document.getElementById('radio_check').addEventListener('click', function(e) {
    //console.log('Vamos a habilitar el input text');
    radio.disabled = false;
    diameter.value = "";
    diameter.disabled = true;
});

document.getElementById('diameter_check').addEventListener('click', function(e) {
    //console.log('Vamos a habilitar el input text');
    diameter.disabled = false;
    radio.value = "";
    radio.disabled = true;
});

//#endregion

//#region Square Functions
function PerimeterSquare(side){
    return side * 4;
}

function AreaSquare(side){
    return side ** 2;
}

function PerimeterTriangle(sideA, sideB, base){
    return parseInt(sideA) + parseInt(sideB) + parseInt(base);
}
//#endregion

//#region Triangle Functions
function HeightTriangle(side, base){
    const middleBase = base / 2;
    return Math.sqrt((side ** 2) + (middleBase ** 2));

}

function AreaTriangle(base, height){
    return ((base * height)/2).toFixed(3);
}
//#endregion

//#region Circle Functions
function PerimeterCircleRadio(radio){
    return (radio * 2 * PI).toFixed(3);
}

function PerimeterCircleDiameter(diameter){
    return (diameter * PI).toFixed(3);
}

function AreaCircleRadio(radio){
    return (radio ** 2 * PI).toFixed(3);
}

function AreaCircleDiameter(diameter){
    return ((diameter/2)**2 * PI).toFixed(3);
}
//#endregion

// Connect with HTML

//#region Square Action

function getPerimeterSquare(){
    const side = document.getElementById("side_square");
    const measure = document.getElementById("measure_square");
    const result_square = document.getElementById("result_square");

    const perimeter = PerimeterSquare(side.value);
    //console.log(perimeter + " " + measure.value)
    result_square.textContent = `Perimeter: ${perimeter} ${measure.value}`;

}

function getAreaSquare(){
    const side = document.getElementById("side_square");
    const measure = document.getElementById("measure_square");
    const result_square = document.getElementById("result_square");

    const area = AreaSquare(side.value);
    result_square.textContent = `Area: ${area} ${measure.value}²`;

}
//#endregion

//#region Triangle Action
function getPerimeterTriangle(){
    const sideA = document.getElementById("side_triangleA");
    const sideB = document.getElementById("side_triangleB");
    const base = document.getElementById("base_triangle");
    const height = document.getElementById("height_triangle");
    const measure = document.getElementById("measure_triangle");
    const result_triangle = document.getElementById("result_triangle");
    if (sideA.value === "" || sideB.value === "" || base.value ==="") {
        console.error("Need the 3 sides of triangle to calculate the perimeter");
    }else{
        const perimeter = PerimeterTriangle(sideA.value, sideB.value, base.value);
        //console.log(perimeter + " " + measure.value)
        result_triangle.textContent = `Perimeter: ${perimeter} ${measure.value}`;

    }
    
}

function getAreaTriangle(){
    const sideA = document.getElementById("side_triangleA");
    const sideB = document.getElementById("side_triangleB");
    const base = document.getElementById("base_triangle");
    const height = document.getElementById("height_triangle");
    const measure = document.getElementById("measure_triangle");
    const result_triangle = document.getElementById("result_triangle");
    if (height.value === "") {
        /*if (sideA.value !== "" && sideB.value === "" && base.value !== "") {
            const get_height = HeightTriangle(sideA.value, base.value);
            height.value=get_height;
            const area = AreaTriangle(base.value, get_height);
            result_triangle.textContent = `Area: ${area} ${measure.value}²`;

        } else if (sideA.value === "" && sideB.value !== "" && base.value !== "") {
            const get_height = HeightTriangle(sideB.value, base.value);
            height.value = 0;
            height.value=get_height;
            const area = AreaTriangle(base.value, get_height);
            result_triangle.textContent = `Area: ${area} ${measure.value}²`;
        } else*/ if ((sideA.value !== "" && sideB.value !== "" && base.value !== "")) {
            let get_height
            if ((sideA.value === sideB.value )) {
                get_height = HeightTriangle(sideA.value, base.value);                
            } else if(sideA.value === base.value) {
                get_height = HeightTriangle(sideA.value, sideB.value);                
            } else if (sideB.value === base.value) {
                get_height = HeightTriangle(sideB.value, sideA.value);                
            }
            height.value=get_height;
            const area = AreaTriangle(base.value, get_height);
            result_triangle.textContent = `Area: ${area} ${measure.value}²`;
        } else {
            console.error("enter the height the triangle to calculate the area")
        }
    } else {
        if (base.value !== "") {
            const area = AreaTriangle(base.value, height.value);
            result_triangle.textContent = `Area: ${area} ${measure.value}²`;
        }else{
            console.error("Need the base of the triangle to calculate the area")
        }
    }

    //const area = Areatriangle(side.value);
    //result_triangle.textContent = `Area: ${area} ${measure.value}²`;

}
//#endregion

//#region Circle Action

function getPerimeterCircle(){
    const measure = document.getElementById("measure_circle");
    const result_circle = document.getElementById("result_circle");    
    
    if (radio.value !== "" && diameter.value ==="") {
        const perimeter_radio = PerimeterCircleRadio(radio.value);
        result_circle.textContent = `Perimeter: ${perimeter_radio} ${measure.value}`;

    } else if (radio.value === "" && diameter.value !==""){
        const perimeter_diameter = PerimeterCircleDiameter(diameter.value)
        result_circle.textContent = `Perimeter: ${perimeter_diameter} ${measure.value}`;

    } else {
        console.error("Enter the radio or diameter to calculate the perimeter");
    }
}

function getAreaCircle(){
    const measure = document.getElementById("measure_circle");
    const result_circle = document.getElementById("result_circle");
    if (radio.value !== "" && diameter.value ==="") {
        const area_radio = AreaCircleRadio(radio.value);
        result_circle.textContent = `Area: ${area_radio} ${measure.value}²`;

    } else if (radio.value === "" && diameter.value !==""){
        const area_diameter = AreaCircleDiameter(diameter.value)
        result_circle.textContent = `Area: ${area_diameter} ${measure.value}²`;

    } else {
        console.error("Enter the radio or diameter to calculate the area");
    }
}
//#endregion

