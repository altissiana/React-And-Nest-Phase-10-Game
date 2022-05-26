import { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

export default function DashboardPage() {
	const [ vantaEffect, setVantaEffect ] = useState(0);
	const vantaRef = useRef(null);

	useEffect(
		() => {
			if (!vantaEffect) {
				setVantaEffect(
					BIRDS({
						el: vantaRef.current,
						mouseControls: false,
						touchControls: false,
						gyroControls: false,
						minHeight: window.innerHeight,
						maxWidth: window.innerWidth
					})
				);
			}
			return () => {
				if (vantaEffect) vantaEffect.destroy();
			};
		},
		[ vantaEffect ]
	);

	return <div ref={vantaRef} />;
}
