// فتح القائمة
function openMenu() {
    document.getElementById("sidebar").style.right = "0";
}

// إغلاق القائمة
function closeMenu() {
    document.getElementById("sidebar").style.right = "-250px";
}


// الوضع المظلم
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    // حفظ الحالة
    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme", "dark");

    }else{

        localStorage.setItem("theme", "light");
    }
}

// استرجاع الوضع المحفوظ
window.onload = function(){

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");
    }
}

// حجم الأسطوانة
function cylinderVolume(){

    let r = document.getElementById("radius").value;
    let h = document.getElementById("height").value;

    let result = Math.PI * r * r * h;

    document.getElementById("cylinderResult").innerHTML =
    "الحجم = " + result.toFixed(2);
}

// مساحة الدائرة
function circleArea(){

    let r = document.getElementById("circleRadius").value;

    let result = Math.PI * r * r;

    document.getElementById("circleResult").innerHTML =
    "المساحة = " + result.toFixed(2);
}

// حل معادلة الدرجة الثانية
function quadratic(){

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let delta = (b * b) - (4 * a * c);

    if(delta < 0){

        document.getElementById("quadraticResult").innerHTML =
        "لا توجد حلول حقيقية";

    }else{

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.getElementById("quadraticResult").innerHTML =
        "X1 = " + x1.toFixed(2) +
        "<br> X2 = " + x2.toFixed(2);
    }
}

