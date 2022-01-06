const txtLimit = questionField.getAttribute("maxlength");
const txtCounter = document.querySelector(".texrarea__counter span");
txtCounter.innerHTML = txtLimit;

// Очищаем все поля при нажатии на кнопку cancel
btnCancel.addEventListener('click', function (e){

    questionField.value = '';
    choiceOfTheme.value = "theme 0";
    txtSetCounter();
})

// создаем и вызываем функцию счетчика лимита поля ввода
questionField.addEventListener("keyup", txtSetCounter);
questionField.addEventListener("keydown", function (event){
    if(event.repeat) txtSetCounter();  // функция позволяет считывать счетчик даже если есть залипание клавиш
});

function txtSetCounter(){

    const txtCounterResult = txtLimit - questionField.value.length;
    txtCounter.innerHTML = txtCounterResult;
}
btnCreate.addEventListener("click", function (e){
})

// вешаем проверку заполнения всех полей
function inputQuestionFocus(){

    const mainFormInputPlaceholder = questionField.placeholder;
    questionField.addEventListener("focus", function (e){
        questionField.placeholder = ""
    });

    questionField.addEventListener("blur", function (e){
        questionField.placeholder = mainFormInputPlaceholder;
    });
}
inputQuestionFocus(); // получаем фокус и анфокус на окне ввода вопроса


// поебать мозга над заполнение всех полей ввода
btnCreate.addEventListener('click', function (e){

    if(questionField.value === ''){
        alert ("Уважаемый! Поле Question не заполнено")
    }

    return false;

});
//
// btnCreate.addEventListener('click', function (e){
//
//     if(choiceOfTheme.value === ''){
//         alert ("Уважаемый! Поле Theme не заполнено")
//     }
//
//     return false;
// });

document.forms[0].onsubmit = function() {

    const radioElems = document.querySelectorAll('.radio'),
        error = document.querySelector('.error');
    submit = false;

    [].forEach.call(radioElems, function(item) {
        item.checked && (submit = true);
    });
    if (!submit) {
        error.style.display = 'block';

        return alert ("Уважаемый! Поле Answer не заполнено");
    }
};

btnCreate.addEventListener('click', function (e){

    let c= document.getElementsByTagName('input');
    for (let i = 0; i<c.length; i++){
        if (c[i].type=='checkbox')
        {
            if (c[i].checked){return true}
        }
    }

    return alert ("Уважаемый! Поле File system не заполнено");
});


const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');

const popUp = document.getElementById('pop_up');
const popuArea = document.querySelector('.popup__area')

function openAndClose(){
    openPopUp.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.add('active');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    })

    btnCancel.addEventListener('click', () => {
        popUp.classList.remove('active');
    })

    popuArea.addEventListener('click', () => {
        popUp.classList.remove('active');
    });
}

openAndClose();