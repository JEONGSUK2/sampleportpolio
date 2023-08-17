let dark = false;
function darkMode(){
    // alert()
    if(dark == false){
        dark = true;
        document.querySelector(".fa-moon").classList.add("fa-sun")
        document.querySelector(".fa-moon").classList.remove("fa-moon")
        document.querySelector("html").classList.add("dark")
        localStorage.setItem("dark", true);
    }else{
        dark = false;
        document.querySelector(".fa-sun").classList.add("fa-moon")
        document.querySelector(".fa-sun").classList.remove("fa-sun")
        document.querySelector("html").classList.remove("dark")
        localStorage.removeItem("dark")
    }  
}
const dark_mode = localStorage.getItem("dark"); // 스토리지의 경우 무조건 string이기 때문에 ("")문자열을 사용해야함

if(dark_mode == "true"){
    darkMode()
}
// 로컬은 브라우저가 닫혀도 유지
// 세션은 브라우저가 닫힐 경우 사라짐

function language(lang){
    if(lang == "en"){
        localStorage.setItem("lang", "en");
    }else{
        localStorage.removeItem("lang", "en");
    } 
    // 한국어라면 삭제
}
const $lang = localStorage.getItem("lang");


// 다국어
const url = new URL(location.href).searchParams;
const lang = url.get("Lang")


axios.get("../data/data.json").then(function(res){ 
    if($lang == "en"){  
        res.data.EnNav.map((e,i)=>{
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }
    if(lang == "en"){  
        res.data.EnNav.map((e,i)=>{
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }
})
.catch(function(error){
    console.log(error)
})
// 다국어

//모바일 네비

function mNav(){
    document.querySelector(".m-btn").classList.toggle("on")
}



//모바일 네비