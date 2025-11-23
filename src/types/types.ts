declare global {
	interface formDataType {
		email: string;
		name: string;
		message: string;
		subject: string;
	}
	interface errorType {
		email: boolean;
		name: boolean;
		message: boolean;
	}
}
