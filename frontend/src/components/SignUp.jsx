/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import { useState, useEffect, useMemo } from 'react';
import '../sign.css';

const VALUES = [
	{ id: 1, label: 'name', text: 'Hi, What is your Name?', placeholder: 'Enter your full name', type: 'text' },
	{ id: 2, label: 'uname', text: '& what shall we call you?', placeholder: 'Enter a username', type: 'text' },
	{ id: 3, label: 'email', text: 'Enter you email', placeholder: 'Email', type: 'text' },
	{ id: 4, label: 'password', text: 'Choose a password', placeholder: 'make sure you dont forget', type: 'password' }
];

export default function SignUp() {
	const [ show, setShow ] = useState(VALUES);
	const [ currentIndex, setCurrentIndex ] = useState(0);
	const [ details, setDetails ] = useState({});
	const [ signUp, setSignUp ] = useState(false);
	const [ input, setInput ] = useState('');
	const [ validation, setValidation ] = useState('');
	const [ showPass, setShowPass ] = useState(false);
	const [ displayPass, setDisplayPass ] = useState(false);

	const onKeyPressed = (ev, id) => {
		const nextRender = currentIndex + 1;
		if (ev.charCode === 13) {
			ev.preventDefault();
			setInput('');
			setValidation('');
			checkValidation(nextRender);
		}
	};

	useEffect(
		() => {
			currentIndex === 3 ? setDisplayPass(true) : setDisplayPass(false);
		},
		[ currentIndex ]
	);

	const displayItem = useMemo(() => show[currentIndex], [ show, currentIndex ]);

	const checkValidation = (nextRender) => {
		const label = show[currentIndex].label;
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const rp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		switch (currentIndex < show.length) {
			case nextRender === 1 && input < 3:
				setValidation("Isn't your name a bit short");
				break;
			case currentIndex === 1 && input < 3:
				setValidation('We need more than that');
				break;
			case currentIndex === 2 && !re.test(input):
				setValidation("It doesn't look like an email");
				break;
			case currentIndex === 3 && !rp.test(input):
				setValidation('It needs to contain at least one letter, one number, and 8 characters');
				break;
			case currentIndex === 3 && rp.test(input):
				setSignUp(true);
				break;
			default:
				setCurrentIndex(nextRender);
				setDetails({ ...details, [label]: input.toLowerCase() });
		}
	};

	const handlePassword = () => {
		setShowPass(!showPass);
		displayItem.type = 'text';
		if (showPass) {
			displayItem.type = 'password';
		}
	};

	return (
		<div className="main-wrap">
			<div className="details__list">
				<ol>
					<li>
						<a
							href="#"
							dataref="name"
							onClick={() => {
								setCurrentIndex(0);
								setValidation('');
								setShowPass(false);
							}}
						>
							{details.name}
						</a>
					</li>
					<li>
						<a
							href="#"
							dataref="uname"
							onClick={() => {
								setCurrentIndex(1);
								setValidation('');
								setShowPass(false);
							}}
						>
							{details.uname}
						</a>
					</li>
					<li>
						<a
							href="#"
							dataref="email"
							onClick={() => {
								setCurrentIndex(2);
								setValidation('');
								setShowPass(false);
							}}
						>
							{details.email}
						</a>
					</li>
				</ol>
			</div>
			<form className="signup--form">
				<ol className="signup__list">
					{!signUp && (
						<li
							onKeyPress={(KeyboardEvent) => onKeyPressed(KeyboardEvent, displayItem.id)}
							key={displayItem.id}
						>
							<span>
								<label htmlFor={displayItem.label}>{displayItem.text}</label>
							</span>
							<input
								type={displayItem.type}
								name={displayItem.label}
								id={displayItem.id}
								placeholder={displayItem.placeholder}
								onChange={(e) => setInput(e.target.value)}
								spellCheck="false"
								autoCapitalize="off"
								autoComplete="off"
								autoCorrect="off"
								autoFocus
							/>
							<span
								id="show-pwd"
								className={showPass ? 'view' : 'hide'}
								onClick={handlePassword}
								style={{ opacity: displayPass ? '1' : '0' }}
							/>
						</li>
					)}
					{signUp && (
						<li>
							<p style={{ marginTop: '45px', fontSize: '32pt', float: 'right' }}>
								<a href="#" style={{ color: 'white', textDecoration: 'none' }}>
									sign up
								</a>
							</p>
						</li>
					)}
				</ol>
				<div className="next__page" style={{ opacity: signUp ? '1' : '0' }} />
				<div className="error__message">{validation}</div>
			</form>
		</div>
	);
}
