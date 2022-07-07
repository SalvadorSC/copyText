exportconst copyText = async (str: string) => {
		if (!navigator.clipboard) {
			// fallback
			const input = document.createElement('textarea');
			input.innerHTML = str;
			document.body.appendChild(input);
			input.focus();
			input.select();
			let result;
			try {
				result = document.execCommand('copy');
			} catch (err) {
				console.error('Fallback: Could not copy text: ', err);
			}
			document.body.removeChild(input);
			return result;
		}
		const result = navigator.clipboard.writeText(str);
		return result;
	};
