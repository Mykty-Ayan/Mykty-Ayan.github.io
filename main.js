// const timezone = Intl.DateTimeFormat.resolvedOptions().timezone()
// function changeBodyBackgroundByTime(currentTime){
//     print()
// }

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event){
    if(event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let index = 0; index < dropdowns.length; index++) {
            var openDropdown = dropdowns[index];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

function writeCurrentYear(){
    let currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerHTML = `Almaty - ${currentYear}`;
}