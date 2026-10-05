document.addEventListener("DOMContentLoaded", function(){
    console.log("MIT Profile Loaded");

    const today = new Date().toLocaleDateString();

    document.getElementById("welcome").textContent=
    "welcome to my MIT college Profile Today's dates is" + today + ".";
})