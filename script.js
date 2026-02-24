//Simple Interest Cal



let SIC = document.querySelector(".SIC")

if(SIC){
    SIC.addEventListener("click" , function () {

        let PA = document.querySelector(".PA").value;
        let IR = document.querySelector(".IR").value;
        let TP = document.querySelector(".TP").value
        let Ans = document.querySelector(".h3Ans")
        let TA = document.querySelector(".TA")

        if (PA && IR && TP){
            let Int = (PA*IR*TP)/100
            Ans.textContent = `The Interest is ${Int}`
            TA.style.display = "flex";
            TA.textContent = `Total Amount is ${parseInt(PA) + parseInt(Int)}`
        
        }
        else{
            Ans.textContent = "Fill  All  Fields !"
            Ans.classList.add("error");
        }

    })
}


//BMI

let BMI_Btn = document.querySelector(".BMI-btn");

if(BMI_Btn){
    BMI_Btn.addEventListener("click" , function(){
        let Ans = document.querySelector(".h3Ans")
        let TA = document.querySelector(".TA")
        let Weight = document.querySelector(".Body-weight").value;
        let height = document.querySelector(".height").value;

        if (Weight && height){
            let BMI = Weight/(height/100)**2
            Ans.textContent = `The BMI is ${BMI}`
            TA.style.display = 'flex'
            if (BMI <= 18.5 ){
                TA.textContent = `You Are Underweight`
            }
            else if(BMI <= 24.9){
                TA.textContent = `You Are Fit Person`
            }
            else if (BMI <= 29.9){
                TA.textContent = `You Are Overweight`
            }
            else{
                TA.textContent = `Extreme Overweight`
            }
        }
        else{
            Ans.textContent = "Fill  All  Fields !"
            Ans.classList.add("error");
        }
    })
}


//Calorie Calculator


let cc_btn = document.querySelector(".cc-btn");

if(cc_btn){
    cc_btn.addEventListener("click" , function (){
        let age = document.querySelector(".age").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let weight = document.querySelector(".Body-weight").value;
        let height = document.querySelector(".height").value;
        let answer = document.querySelector(".h3Ans")
        let activiy = document.querySelector(".activity").value
        
        if (!age || !gender || !weight || !height || activiy=="null"){
            answer.classList.add("error")
            answer.textContent = 'All Field Required  !!!!'
            return;
        }
        
        let BMR = 0

        if(gender.value == "male"){
            BMR = 10 * weight + 6.25 * height - 5 * age + 5;
        }
        else {
            BMR= 10 * weight + 6.25 * height - 5 * age -161;
        }
        let total_cc;
        if (activiy !="null"){
            total_cc = BMR * activiy;
            answer.textContent = `Required Calories is    ${total_cc}`
        }


    })
}