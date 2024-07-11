import { LoginAction } from "./action/LoginAction";
import { RegisterAction } from "./action/RegisterAction";
export class AuthService {

	private loginAction: LoginAction
	private registerAction: RegisterAction

	constructor() {
		this.loginAction = new LoginAction
		this.registerAction = new RegisterAction
	}

	async login(input: any) {
		return await this.loginAction.handle(input)
	}

    async register(input: any) {
		return await this.registerAction.handle(input)
	}
}
