module.exports = {
	theme: {
		extend: {
			colors: { primary: "#3b82f6", secondary: "#10b981" },
			borderRadius: {
				none: "0px",
				sm: "4px",
				DEFAULT: "8px",
				md: "12px",
				lg: "16px",
				xl: "20px",
				"2xl": "24px",
				"3xl": "32px",
				full: "9999px",
				button: "8px",
			},
			animation: {
				"star-movement-bottom":
					"star-movement-bottom linear infinite alternate",
				"star-movement-top": "star-movement-top linear infinite alternate",
			},
			keyframes: {
				"star-movement-bottom": {
					"0%": { transform: "translate(0%, 0%)", opacity: "1" },
					"100%": { transform: "translate(-100%, 0%)", opacity: "0" },
				},
				"star-movement-top": {
					"0%": { transform: "translate(0%, 0%)", opacity: "1" },
					"100%": { transform: "translate(100%, 0%)", opacity: "0" },
				},
			},
		},
	},
};
