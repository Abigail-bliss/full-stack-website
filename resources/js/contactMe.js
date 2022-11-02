//username autofill
const emailField = document.getElementById("email");
const usernameField = document.getElementById("username");
function usernameAutofill(event){
    const str = emailField.value;
    for(let i = 0; i < str.length; i++){
        if (str[i] == '@'){
            if (usernameField.value == null || usernameField.value == ''){
                usernameField.value = str.substr(0, i);
            }
        }
    }
}
emailField.addEventListener("keyup", usernameAutofill);


//concern message popup
const concernField = document.getElementById("concern");
const questionField = document.getElementById("question");
const commentField = document.getElementById("comment");
const warning = document.getElementById("warning");
function handleConcern(event){
    if (concernField.checked){
        warning.classList.remove("hide");
    } else if (!concernField.checked) {
        warning.classList.add("hide");
    }
}
concernField.addEventListener("input", handleConcern);
commentField.addEventListener("input", handleConcern);
questionField.addEventListener("input", handleConcern);

