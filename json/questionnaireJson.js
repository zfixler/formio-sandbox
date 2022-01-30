export const questionnaireJson = {
	display: 'form',
	settings: {
		pdf: {
			id: '1ec0f8ee-6685-5d98-a847-26f67b67d6f0',
			src: 'https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0',
		},
	},
	components: [
		{
			label: 'Columns',
			columns: [
				{
					components: [
						{
							label: 'Patient ID',
							labelPosition: 'left-left',
							customClass: 'patientInfo',
							labelMargin: 0,
							tableView: true,
							validate: {
								required: true,
							},
							key: 'patientId',
							type: 'textfield',
							input: true,
						},
					],
					width: 6,
					offset: 0,
					push: 0,
					pull: 0,
					size: 'md',
					currentWidth: 6,
				},
				{
					components: [
						{
							label: 'Date',
							customClass: 'patientInfo',
							labelPosition: 'left-left',
							labelMargin: 0,
							format: 'yyyy-MM-dd',
							placeholder: 'Select date',
							tableView: false,
							datePicker: {
								disableWeekends: false,
								disableWeekdays: false,
							},
							enableTime: false,
							timePicker: {
								showMeridian: false,
							},
							enableMinDateInput: false,
							enableMaxDateInput: false,
							key: 'date1',
							type: 'datetime',
							input: true,
							widget: {
								type: 'calendar',
								displayInTimezone: 'viewer',
								locale: 'en',
								useLocaleSettings: false,
								allowInput: true,
								mode: 'single',
								enableTime: false,
								noCalendar: false,
								format: 'yyyy-MM-dd',
								hourIncrement: 1,
								minuteIncrement: 1,
								time_24hr: true,
								minDate: null,
								disableWeekends: false,
								disableWeekdays: false,
								maxDate: null,
							},
						},
					],
					width: 6,
					offset: 0,
					push: 0,
					pull: 0,
					size: 'md',
					currentWidth: 6,
				},
			],
			key: 'columns',
			type: 'columns',
			input: false,
			tableView: false,
		},
		{
			label: 'HTML',
			tag: 'div',
			className: 'headingWrapper',
			attrs: [
				{
					attr: '',
					value: '',
				},
			],
			content:
				'<div class="formHeadings"><p class="instructions">Over the last 2 weeks, how often have you been bothered by any of the following problems?</p><div class="headingsWrapper"><h3 class="colTitle">Not at all</h3><h3 class="colTitle">Several days</h3><h3 class="colTitle">More than half the days</h3><h3 class="colTitle">Nearly every day</h3></div></div>',
			refreshOnChange: false,
			key: 'html',
			type: 'htmlelement',

			input: false,
			tableView: false,
		},
		{
			label: 'Little interest or pleasure in doing things',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question1',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label: 'Feeling down, depressed, or hopeless',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question9',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label: 'Trouble falling or staying asleep, or sleeping too much',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question8',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label: 'Feeling tired or having little energy',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question7',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label: 'Poor appetite or overeating',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question6',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			input: true,
			validate: {
				required: true,
			},
		},
		{
			label:
				'Feeling bad about yourself-or that you are a failure of have let yourself or your family down',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question5',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label:
				'Trouble concentrating on things, such as reading newspaper or watching television',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question4',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label:
				'Moving or speaking so slowly that other people could have noticed. Or the opposite-being so figety or restless that you have been moving around a lot more than usual',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question3',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label:
				'Thoughts that you would be better off dead, or of hurting yourself',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'severityQuestion',
			inline: true,
			tableView: false,
			values: [
				{
					label: '',
					value: 0,
					shortcut: '',
				},
				{
					label: '',
					value: 1,
					shortcut: '',
				},
				{
					label: '',
					value: 2,
					shortcut: '',
				},
				{
					label: '',
					value: 3,
					shortcut: '',
				},
			],
			dataType: 'number',
			key: 'question2',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label:
				'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
			labelPosition: 'left-left',
			optionsLabelPosition: 'right',
			customClass: 'difficultQuestion',
			inline: false,
			tableView: false,
			values: [
				{
					label: 'Not difficult at all',
					value: 'Not difficult at all',
					shortcut: '',
				},
				{
					label: 'Somewhat difficult',
					value: 'Somewhat difficult',
					shortcut: '',
				},
				{
					label: 'Very difficult',
					value: 'Very difficult',
					shortcut: '',
				},
				{
					label: 'Extremely difficult',
					value: 'Extremely difficult',
					shortcut: '',
				},
			],
			dataType: 'string',
			key: 'question10',
			attributes: {
				name: 'radio',
			},
			type: 'radio',
			validate: {
				required: true,
			},
			input: true,
		},
		{
			label: 'severityScoreInput',
			customClass: 'severityScoreInput',
			key: 'severityScoreInput',
			type: 'hidden',
			input: true,
			tableView: false,
		},
		{
			label: 'severityDescriptionInput',
			customClass: 'severityDescriptionInput',
			key: 'severityDescriptionInput',
			type: 'hidden',
			input: true,
			tableView: false,
		},
		{
			label: 'results',
			tag: 'div',
			className: 'resultsWrapper',
			attrs: [
				{
					attr: '',
					value: '',
				},
			],
			content: '<p><strong>Score:</strong><span id="results">0</span></p>',
			refreshOnChange: false,
			key: 'results',
			type: 'htmlelement',
			input: false,
			tableView: false,
		},
		{
			label: 'resultSeverity',
			tag: 'div',
			className: 'severityWrapper',
			attrs: [
				{
					attr: '',
					value: '',
				},
			],
			content:
				'<p><strong>Description:</strong><span id="resultSeverity"></span></p>',
			refreshOnChange: false,
			key: 'resultSeverity',
			type: 'htmlelement',
			input: false,
			tableView: false,
		},
		{
			type: 'button',
			label: 'Submit',
			key: 'submit',
			disableOnInvalid: true,
			input: true,
			tableView: false,
		},
	],
};
