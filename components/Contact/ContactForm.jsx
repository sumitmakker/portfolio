import Button from '../Reuseable/Button';
import FormInput from '../Reuseable/FormInput';

function ContactForm() {

	const selectOptions = [
		'Web Application',
		'Mobile Application',
	];

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="m-4 p-6 sm:p-10 rounded-xl shadow-xl text-left" style={{backgroundColor : '#16171f'}}
				>
					
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>

					<select className="w-full px-4 sm:px-6 py-2 border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-dark text-ternary-light">

						{selectOptions.map((option) => (
							<option className="text-normal sm:text-md" key={'option-' + option}>{option}</option>
						))}
					</select>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<span className="text-md font-general-medium bg-secondary-dark hover:bg-ternary-dark text-ternary-light hover:text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
							<Button
								title="Send Message"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;