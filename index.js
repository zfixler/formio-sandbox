//import json forms
import { contactJson } from './json/contactJson.js';
import { wizardJson } from './json/wizardJson.js';
import { questionnaireJson } from './json/questionnaireJson.js';

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
        <p class="form-entry"><strong>First Name:</strong> ${firstName}</p>
        <p class="form-entry"><strong>Last Name:</strong> ${lastName}</p>
        <p class="form-entry"><strong>Email:</strong> ${email}</p>
        <p class="form-entry"><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p class="form-entry"><strong>Age:</strong> ${age}</p>
        `;
	});
	wizard.on('submit', function (submission) {
		console.log(submission);
	});
});

//Create Health Questionnaire Form
Formio.createForm(
	document.querySelector('#questionnaire'),
	questionnaireJson
).then(function (form) {
	form.on('submit', function (submission) {
		console.log(submission);
	});
});

//All radio buttons
const radios = document.querySelectorAll('input[type="radio"]');
//Results
const results = document.querySelector('#results');
// Depression Severity
const severity = document.querySelector('#resultSeverity');

//Function that sets score based upon selections
function setScore() {
	let score = 0;
	radios.forEach((radio) => {
		if (radio.checked && radio.value.length === 1) {
			score += parseInt(radio.value);
		}
	});

	results.textContent = score;

	//Set score value in hidden input for data submission
	document.querySelector('.severityScoreInput').component.setValue(score);

	if (score < 5) {
		severity.textContent = 'Minimal severity';
	} else if (score > 4 && score < 10) {
		severity.textContent = 'Mild depression';
	} else if (score > 9 && score < 15) {
		severity.textContent = 'Moderate depression';
	} else if (score > 14 && score < 20) {
		severity.textContent = 'Moderately severe depression';
	} else if (score > 19) {
		severity.textContent = 'Severe depression';
	}

	//Set score description in hidden input for data submission
	document
		.querySelector('.severityDescriptionInput')
		.component.setValue(severity.textContent);
}

//Event listener for radio button selection
radios.forEach((radio) => {
	radio.addEventListener('click', () => {
		setScore();
	});
});

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
