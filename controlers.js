const formValues= document.querySelectorAll('input')
const checkInfoSelected= document.querySelector('.next')
const allTypes=document.querySelectorAll('.ball')
const titleDisplay= document.querySelector('.title h1')
const caption= document.querySelector('.title p')
const allContainersInputs= document.querySelectorAll('.input_content')
const mainContainer= document.querySelector('.content_to_show')
const backBtn=document.querySelector('.go_back')
const principalTags=document.querySelector('.option_selected div')
allTypes[0].style.background='hsl(228, 100%, 84%)'
allTypes[0].style.border='none'
allTypes[0].style.color='hsl(213, 96%, 18%)'

const fragment = new DocumentFragment()

const firstContainer= document.createElement('div')
const secondContainer= document.createElement('div')
firstContainer.style.width='100%'
firstContainer.style.height='100%'
secondContainer.style.width='100%'
secondContainer.style.display='flex'
secondContainer.style.justifyContent='center'
secondContainer.style.alignItems='center'
secondContainer.style.background='hsla(229, 24%, 87%, 0.5)'
secondContainer.style.height='65%'
secondContainer.style.borderRadius='5px'
secondContainer.className='lastChildElement'

checkInfoSelected.addEventListener('click',()=>{
    
    let allData=[formValues[0].value,formValues[1].value,formValues[2].value]
   
    const seeInfoValues=(e)=>e === ""
    let findEmptyData= allData.some(seeInfoValues)
   
    if( findEmptyData ===  true){
        allContainersInputs[0].classList.add('nameuser')
        allContainersInputs[1].classList.add('nameuser')
        allContainersInputs[2].classList.add('nameuser')
     
    }else{
        allTypes[0].style.background=''
        allTypes[0].style.border=''
        allTypes[0].style.color=''
        titleDisplay.innerText='Select your plan'
         allContainersInputs[0].classList.remove('nameuser')
         allContainersInputs[1].classList.remove('nameuser')
         allContainersInputs[2].classList.remove('nameuser')
        backBtn.style.visibility='visible'
        caption.innerText='You have the option of monthly or yearly billing'
        allTypes[1].style.background='hsl(228, 100%, 84%)'
        allTypes[1].style.border='none'
        allTypes[1].style.color='hsl(213, 96%, 18%)'
        allContainersInputs[0].remove()
        allContainersInputs[1].remove()
        allContainersInputs[2].remove()
        let isYearTime=false
        firstContainer.className='setDisplay'
        firstContainer.innerHTML=`<a href="#" class='chekedBoxA' >
        <img src='${'/assets/images/icon-arcade.svg'}' class='icon_cards'>
        <footer>
            <h3 style='color: hsl(213, 96%, 18%);'>Arcade</h3>
            <p style='color:hsl(231, 11%, 63%);'>$9/mo</p>
        </footer>
    </a>
    <a href="#" class='chekedBoxA' >
        <img src='${'/assets/images/icon-advanced.svg'}' class='icon_cards'>
        <footer>
            <h3 style='color: hsl(213, 96%, 18%);'>Abvanced</h3>
            <p style='color:hsl(231, 11%, 63%);'>$12/mo</p>
        </footer>
    </a>
    <a href="#" class='chekedBoxA' >
        <img src='${'/assets/images/icon-pro.svg'}' class='icon_cards'>
        <footer>
            <h3 style='color: hsl(213, 96%, 18%);'>Pro</h3>
            <p style='color:hsl(231, 11%, 63%);'>$15/mo</p>
        </footer>
    </a>  `
        secondContainer.style.marginTop='5%'
        secondContainer.innerHTML =`<p id='monthlyOption'  style='text-align:center; font-weight: 600;width:100px;color: hsl(213, 96%, 18%);'>Monthly</p>
        <div style='width:40px;height:24px; display:flex;align-items:center;background-color: hsl(243, 100%, 62%);border-radius: 30%/50%;'>
        <button  class='timebtn'   ></button> </div>
          <p id='yearlyOption' style='text-align:center;width:100px; font-weight: 600; color:hsl(231, 11%, 63%);'>Yearly</p>`
        fragment.appendChild(firstContainer)
        fragment.appendChild(secondContainer)   
     
        mainContainer.style.gridTemplateRows='1.4fr 0.6fr '
        mainContainer.appendChild(fragment)    
        let timeBtn=document.querySelector('.content_to_show button')
        let optionM=document.querySelector('#monthlyOption')
        let optionY=document.querySelector('#yearlyOption')
        let textOptionY=document.querySelectorAll('.chekedBoxA footer p')
        let innerTextYearPromo=document.querySelectorAll('.chekedBoxA footer')
        timeBtn.onclick=function(){
            timeBtn.style.transform='translateX(18px)'
            timeBtn.style.transition='all 1s'
            optionM.style.color='hsl(231, 11%, 63%)'
            optionY.style.color='hsl(213, 96%, 18%)'
            let promoYear=document.createElement('p')
            promoYear.textContent='2 months free'
            promoYear.style.color='hsl(213, 96%, 18%)'
            let promoYear1=document.createElement('p')
            promoYear1.textContent='2 months free'
            promoYear1.style.color='hsl(213, 96%, 18%)'
            let promoYear2=document.createElement('p')
            promoYear2.textContent='2 months free'
            promoYear2.style.color='hsl(213, 96%, 18%)'
            textOptionY[0].textContent='$90/yr'
            textOptionY[1].textContent='$120/yr'
            textOptionY[2].textContent='$150/yr'
            innerTextYearPromo[0].appendChild(promoYear)
            innerTextYearPromo[1].appendChild(promoYear1)
            innerTextYearPromo[2].appendChild(promoYear2)

            isYearTime = true

        }
        let classNameContainer=mainContainer.lastChild.getAttribute("class")
        checkInfoSelected.addEventListener('click',()=>{
            allTypes[1].style.background=''
            allTypes[1].style.border=''
            allTypes[1].style.color=''
            allTypes[2].style.background='hsl(228, 100%, 84%)'
            allTypes[2].style.border='none'
            allTypes[2].style.color='hsl(213, 96%, 18%)'
           backBtn.disabled=true
           backBtn.style.color='gray'
        titleDisplay.innerText='Pick add-ons'
        caption.innerText='Add-ons help enchance your gamming experience'
        if( mainContainer.lastChild  && classNameContainer === 'lastChildElement')  mainContainer.removeChild(secondContainer)
            
        firstContainer.style.display='flex'
        firstContainer.style.alignContent=''
        firstContainer.style.flexDirection='column'
        firstContainer.style.justifyContent='none'
        firstContainer.style.alignItems='none'
        mainContainer.style.gridTemplateRows='none '


        firstContainer.innerHTML=` <div class="option_box" style='background-color:hsla(229, 24%, 87%, 0.41);' >
        <div class="option_input"><input type="checkbox" checked="'true" >
           <div class="info_input"> <h3>Online Service</h3>
            <p>Acces to multiplayer games</p>
        </div>
        </div>
        <p class="value">${isYearTime === false ? '+$1/mo' : '+$10/yr'}</p>
    </div>
    <div class="option_box" style='background-color:hsla(229, 24%, 87%, 0.41);'>
    <div class="option_input"><input type="checkbox" checked="'true" >
       <div class="info_input"> <h3>Larger storage</h3>
        <p>Extra 1TB of cloud save</p>
    </div>
    </div>
    <p class="value">${isYearTime === false ? '+$2/mo' : '+$20/yr'}</p>
</div>
<div class="option_box" >
    <div class="option_input"><input type="checkbox" >
       <div class="info_input"> <h3>Customizable Profile</h3>
        <p>Custom theme on your profile</p>
    </div>
    </div>
    <p class="value">${isYearTime === false ? '+$2/mo' : '+$20/yr'}</p>
</div>
                                    `
  checkInfoSelected.addEventListener('click',()=>{
    titleDisplay.innerText='Finishing up'
    caption.innerText='Double-check everything looks OK before confirming.'
            allTypes[2].style.background=''
            allTypes[2].style.border=''
            allTypes[2].style.color=''
            allTypes[3].style.background='hsl(228, 100%, 84%)'
            allTypes[3].style.border='none'
            allTypes[3].style.color='hsl(213, 96%, 18%)'
            mainContainer.style.gridTemplateRows='1.5fr 0.5fr '
            firstContainer.style.display='flex'
            firstContainer.style.borderRadius='10px'
            firstContainer.style.flexDirection='column'
            firstContainer.innerHTML=`<div class='paid'>
                    <div class='info_paid'><p class='value'>Arcade(${isYearTime === false ? 'monthly' : 'yearly'})</p>
                                            <a>Change</a></div>  <p class='value'>${isYearTime === false ? '+$9/mo' : '+$90/yr'}</p>  
        </div>
                                        <hr class='divisor_line'/>
                                        <div class='paid_values'>
                                        <div><p class='others_paids'>Online service</p>  <p class='not_calculated'>${isYearTime === false ? '+$1/mo' : '+$10/yr'}</p></div>
                                        <div><p  class='others_paids'>Larger storage</p>  <p class='not_calculated'>${isYearTime === false ? '+$2/mo' : '+$20/yr'}</p></div>
                                        </div>
            `
            checkInfoSelected.textContent='Confirm'
            mainContainer.appendChild(secondContainer)  
            secondContainer.innerHTML=`<div class='final_paid'>
            <p style='color:gray;'>Total (per ${isYearTime === false ? 'month' : 'year'})</p>
            <p class='value'>${isYearTime === false ? '+$12/mo' : '+$120/yr'}</p>
            </div>`
            firstContainer.style.background='hsla(229, 24%, 87%, 0.5)'
            secondContainer.style.background=''

            checkInfoSelected.addEventListener('click',()=>{
                principalTags.className='thanks'
                principalTags.style.gridTemplateRows='none'
                principalTags.innerHTML=`<img src='${'/assets/images/icon-thank-you.svg'}' alt='thanksLogo'>
                    <h1>Thank You!</h1>
                    <p style='color:gray;'>
                    Thanks for confirming your supcription! We hope you have fun using our platform. If you need
                    support please feel to email us at suppport@loremgaming.com
                    </p>
                `
            })
  })
            
    })
       }

})



backBtn.addEventListener('click',()=>{
    if(titleDisplay.textContent === 'Select your plan'){
        titleDisplay.innerText='Personal Info'
        mainContainer.removeChild(mainContainer.firstElementChild)
        mainContainer.removeChild(mainContainer.firstElementChild)
        mainContainer.style.gridTemplateRows='none'
        allTypes[1].style.background=''
        allTypes[1].style.border=''
        allTypes[1].style.color=''
        allTypes[0].style.background='hsl(228, 100%, 84%)'
        allTypes[0].style.border='none'
        allTypes[0].style.color='hsl(213, 96%, 18%)'
        fragment.appendChild(allContainersInputs[0])
        fragment.appendChild(allContainersInputs[1])
        fragment.appendChild(allContainersInputs[2])
        formValues[0].value=''
        formValues[1].value=''
        formValues[2].value=''

        mainContainer.appendChild(fragment)

    }   
})