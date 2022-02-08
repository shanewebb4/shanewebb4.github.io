
window.onload = function setListeners() {
    const sendBtn = document.getElementById('modal-button-send');
    var nameLine;
    var org;
    var email;
    var message;

    var guy = document.getElementById('input-name').addEventListener('change', (input) => {
        nameLine = input.target.value;
        // console.log(nameLine);
    });
    document.getElementById('input-organization').addEventListener('change', (input) => {
        org = input.target.value;
    });
    document.getElementById('input-email').addEventListener('change', (input) => {
        email = input.target.value;
    });
    document.getElementById('input-message').addEventListener('change', (input) => {
        message = input.target.value;
    });
    sendBtn.addEventListener('click', () => {
        console.log(nameLine);
        console.log(org);
        console.log(email);
        console.log(message);
        var formIsReady = inputsAreFilled(nameLine, org, email);
        if (formIsReady) {
            const subjectLine = nameLine + ' inquiring for ' + org;
            window.location.href = 'mailto:shanewebbu@gmail.com?subject=' + subjectLine + '&body=' + message;
        } else {
            return;
        }
    })
}


// window.onload = function printName() {

//     const formIsReady = inputsAreFilled(nameLine, org, email);

//     if (formIsReady) {
//         window.location.href = 'mailto:shanewebbu@gmail.com?subject='+subjectLine+'&body='+message.target.value;
//     } else {
//         return;
//     }
// }

// function sendEmailFromDefaultClient() {
//     const subjectText = 'Conact form inquiry from ' + nameLine.target.value;
//     var subject = document.getElementById('hidden-form-subject');
//     subject.setAttribute('value', subjectText);


// }

function inputsAreFilled(nameLine, org, email) {
    if (nameLine == undefined || org == undefined || email == undefined) {
        return false;
    } else {
        return true;
    }
}