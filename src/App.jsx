import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

const App = () => {
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [faqs, setFaqs] = useState([]);
	const [currentAccordian, setCurrentAccordian] = useState(0);

	const getFaqs = async () => {
		try {
			const resp = await axios.get(`https://api.myjson.com/bins/jw3rg`);
			setLoadingStatus(true);
			setFaqs(resp.data.faqs);
		} catch (e) {
			console.log(e.message);
		}
	};

	const openAccordion = id => {
		if (id === currentAccordian) {
			setCurrentAccordian(0);
			return;
		}
		setCurrentAccordian(id);
	};

	useEffect(() => {
		getFaqs();
	}, []);

	return (
		<div className="container">
			<h1>Wunderman Thompson - Tech Test</h1>
			{!loadingStatus && <div className="container__loading">Loading...</div>}
			{faqs.map(faq => (
				<div key={faq.id} className="container__accordian">
					<button
						className={classNames('container__accordian__tab', {
							'container__accordian__tab--open': currentAccordian === faq.id,
						})}
						onClick={() => openAccordion(faq.id)}
					>
						{faq.question}
					</button>
					<div
						className={classNames('container__accordian__content', {
							'container__accordian__content--open': currentAccordian === faq.id,
						})}
					>
						<p>{faq.answer}</p>
					</div>
				</div>
			))}
			<div className="container__footer">
				Jay Sukhija <br />
				jugraj@gmail.com{' '}
			</div>
		</div>
	);
};

export default App;
