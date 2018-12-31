let appEnvironment = {
	env: 'local'
}

let env = {  }

switch (appEnvironment.env) {
	case "local":
		env = {
			apiUrl: 'http://localhost:5005'
		}
		break;
	
	default:
		// code...
		break;
}

export { env }