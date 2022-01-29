//import json contact form
import { contactJson } from './json/contactJson.js';
import { wizardJson } from './json/wizardJson.js';
import { questionnaireJson } from './json/questionnaireJson.js'

// Create Contact Form
Formio.createForm(document.querySelector('#contact'), contactJson).then(
	function (form) {
		form.on('submit', function (submission) {
			console.log(submission);
		});
	}
);

// Create Wizard Form
Formio.createForm(document.querySelector('#wizard'), wizardJson, {
	breadcrumbSettings: { clickable: false },
	buttonSettings: { showCancel: false },
}).then(function (wizard) {
	wizard.on('nextPage', function (page) {
		//Destructure data from page submission data
		const { firstName, lastName, phoneNumber, email, age } =
			page.submission.data;
		//Display data from page 1 on page change
		document.querySelector('.wizard-page').innerHTML = `
        <h3>Review Your Information</h3>
        <p class="form-entry"><span class="bold">First Name:</span> ${firstName}</p>
        <p class="form-entry"><span class="bold">Last Name:</span> ${lastName}</p>
        <p class="form-entry"><span class="bold">Email:</span> ${email}</p>
        <p class="form-entry"><span class="bold">Phone Number:</span> ${phoneNumber}</p>
        <p class="form-entry"><span class="bold">Age:</span> ${age}</p>
        `;
	});
    wizard.on('emitWizardPageSelected', function (i) {
		console.log('fired');
	});
	wizard.on('submit', function (submission) {
		console.log(submission);
	});
});

//Create Questionnaire Form
Formio.createForm(document.querySelector('#questionnaireForm'), questionnaireJson)

//Pagination
const totalForms = document.querySelectorAll('.formSection');
let selectedForm = 0;

//Function to loop over forms and hide unselected forms
function showSelectedForm() {
	totalForms.forEach((form, index) => {
		if (index === selectedForm) {
			form.style.display = 'block';
		} else {
			form.style.display = 'none';
		}
	});
}
showSelectedForm();

//Next and Previous Buttons
const prevBtn = document.querySelector('#js-prev');
const nextBtn = document.querySelector('#js-next');

//Disabled previous button on first page
if (selectedForm === 0) {
	prevBtn.disabled = true;
}

nextBtn.addEventListener('click', () => {
    //Go to next form if available
	if (selectedForm < totalForms.length) {
		window.scrollTo(0, 0);
		selectedForm += 1;
		prevBtn.disabled = false;
		//Hide Unselected forms
		showSelectedForm();
	}
    //Disable if on last form
	if (selectedForm === totalForms.length - 1) {
		nextBtn.disabled = true;
	}
});

prevBtn.addEventListener('click', () => {
    //Go to previous form if available
	if (selectedForm > 0) {
		window.scrollTo(0, 0);
		nextBtn.disabled = false;
		selectedForm -= 1;
		//Hide Unselected forms
		showSelectedForm();
        //Disable on first form
		if (selectedForm === 0) {
			prevBtn.disabled = true;
		}
	}
});
