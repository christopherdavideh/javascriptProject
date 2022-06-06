//#region Global variables
const coupon_book = [
    {coupon:"COUPON10", percent: 10},
    {coupon:"COUPON15", percent : 15},
    {coupon:"COUPON20", percent : 20},
    {coupon:"COUPON25", percent : 25},
    {coupon:"COUPON30", percent : 30},
    {coupon:"COUPON40", percent : 40},
    {coupon:"COUPON50", percent : 50},
    {coupon:"COUPON60", percent : 60},
    {coupon:"COUPON75", percent : 75}
];

let subtotal;
//#endregion

//#region Discounts
function discountPrice(price, discount){
    const total = (price * (100 - discount))/100;
    const total_fix = total.toFixed(2);
    return total_fix;
}

function discountCoupon(price, discount_coupon){
    let isValid =coupon_book.some(function(item){
        return item.coupon === discount_coupon;
    });
    
    console.log(isValid);
    if (isValid) {
        let percent =coupon_book.find(function(item){
            return item.coupon === discount_coupon;
        });
        console.log(percent.percent);
        const discount = percent.percent;
        const total = (price * (100 - discount))/100;
        const total_fix = total.toFixed(2);
        return total_fix; 
    } else{
        //return console.error("Invalid Coupon");
        return price;
    }
    
}

function discountAccumulated(price, discount, discount_coupon){
    console.log(discount_coupon);
    let isValid =coupon_book.some(function(item){
        return item.coupon === discount_coupon;
    });
    
    console.log(isValid);
    if (isValid) {
        let percent =coupon_book.find(function(item){
            return item.coupon === discount_coupon;
        });
        console.log(percent.percent);
        const coupon = percent.percent;
        subtotal = (price * (100 - discount))/100;
        const total = (subtotal * (100 - coupon))/100;
        const total_fix = total.toFixed(2);
        return total_fix;
    } else {
        //return console.error("Invalid Coupon");
        subtotal = (price * (100 - discount))/100;
        return subtotal.toFixed(2);
    }
    
}

//#region KeyUP Action
const input_price = document.getElementById("price");
const input_discount = document.getElementById("discount");
const input_coupon = document.getElementById("coupon");
const result = document.getElementById("total_pay");

input_price.addEventListener('keyup', calculateDiscount);
input_discount.addEventListener('keyup', calculateDiscount);
input_coupon.addEventListener('keyup', calculateDiscount);

function calculateDiscount(){
    const price = parseFloat(input_price.value);
    const discount = parseFloat(input_discount.value);
    const coupon = input_coupon.value;
    let total = price;

    if (!isNaN(price) && !isNaN(discount) && coupon === "") {
        total = discountPrice(price, discount);

    } else if (!isNaN(price) && isNaN(discount) && coupon !== "") {
        total = discountCoupon(price, coupon);

    } else if (!isNaN(price) && !isNaN(discount) && coupon !== ""){
        total = discountAccumulated(price, discount, coupon);

    }

    if(isNaN(total) || total == undefined)
        total = 0.00;

    result.textContent = `$ ${total}`;
}

//#endregion

//#endregion