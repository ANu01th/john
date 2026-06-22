// let fbtn = document.getElementById('show_tick');
// let buyBtn = document.getElementById('bybtn__');
// let showCont = document.getElementById('cont1');
// let showCont1 = document.getElementById('cont');
// // fbtn.addEventListener('click', function name(params) {
// //     document.getElementById('light1').className = 'light'
// //      showCont1.style.display = 'block'
// // })

// document.getElementById('cancle').addEventListener('click', function name(params) {
//     document.getElementById('light1').className = 'light1'
//      showCont1.style.display = 'none'
// });
// document.getElementById('cancle1').addEventListener('click', function name(params) {
//     document.getElementById('light1').className = 'light1'
//    showCont.style.display   = 'none'
//     showCont1.style.display = 'none'
   

// });

// buyBtn.addEventListener('click', function name(params) {
//     showCont.style.display = 'block'
//     showCont1.style.display = 'none'
// });
// let linkBtn = document.getElementById('fbtn');
// let linkBtn1 = document.getElementById('sbtn')
// let linkBtn2 = document.getElementById('tbtn')
// function showMe(params) {
//     document.getElementById('light2').className = 'light3'
//     document.getElementById('cont2').style.display = 'block'; 

// }
// linkBtn.addEventListener('click', showMe)
// linkBtn1.addEventListener('click', showMe)
// linkBtn2.addEventListener('click', showMe)


// let cancleMe = document.getElementById('cancle3');
// cancleMe.addEventListener('click', function name(params) {
//     document.getElementById('light2').className = '';
//     document.getElementById('cont2').style.display = 'none'; 
// });






function startDesign(params) {
    document.getElementById('startdesign').style.visibility = 'visible';

    
    document.getElementById('startdesign').style.visibility = 'visible';
    document.getElementById('chg1').textContent = 'Start Your Design'
    document.getElementById('chg2').textContent = `CONTACT US DIRECTLY`
    document.getElementById('chg3').textContent = `+2340000000000`
    document.getElementById('chg4').textContent = `Message on Whatsapp`
    document.getElementById('chg5').textContent = ``
}


function ShowAccDetails(params) {
    document.getElementById('startdesign').style.visibility = 'visible';
    document.getElementById('chg1').textContent = 'Pricing'
    document.getElementById('chg2').textContent = `OUR PAY SYSTEM`
    document.getElementById('chg3').textContent = `000000000000`
    document.getElementById('chg4').textContent = `Opay`
    document.getElementById('chg5').textContent = `XXXXX XXXXXX XXXXXXX`
}

// function webIntro(params) {
    
// }

// function welcome(params) {
//         window.addEventListener('laod', function (params) {
//             alert('your are mad')
//         })
// }

// welcome()

function template(params) {
    document.getElementById('startdesign').style.visibility = 'visible';
    document.getElementById('chg1').textContent = 'Premium ticket template'
    document.getElementById('temonly').style.display= 'block'
}

function cancleWel(params) {
    document.getElementById('welcome').style.visibility = 'hidden'
}

function cancleStart(params) {
    document.getElementById('startdesign').style.visibility = 'hidden';
    document.getElementById('temonly').style.visibility= 'hidden'


}



//   document.addEventListener("DOMContentLoaded", function() {
//             // Check if the function has already run
//             if (!localStorage.getItem("hasRunOnce")) {
                
//                 // Call your function here
//                 runMyTargetFunction();

//                 // Mark the flag in localStorage so it won't run on next refresh
//                 localStorage.setItem("hasRunOnce", "true");
//             }
//         });

//         function runMyTargetFunction() {
//             // console.log("This function runs exactly once, even after a page refresh!");
//             alert("Welcome! This message appears only on your very first visit.");

//     document.getElementById('welcome').innerHTML = 'hidden'
//         }





           document.addEventListener("DOMContentLoaded", function() {
            // Check if the function has already run
            if (!localStorage.getItem("hasRunOnce")) {
                
                // Call your function here
                runMyFunction();

                // Mark the flag in localStorage so it won't run on next refresh
                localStorage.setItem("hasRunOnce", "true");
            }
        });

        function runMyFunction() {
            console.log("This function runs exactly once, even after a page refresh!");
            alert("Welcome! This message appears only on your very first visit.");
            alert('hi')
        }