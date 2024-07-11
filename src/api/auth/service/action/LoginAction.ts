import { AbstractAuthAction } from '../AbstractAuthAction'

export class LoginAction extends AbstractAuthAction {
	async handle(input: any): Promise<any> {
		try {
			const data = await this.userRepository.login(input);
            return data
		} catch (error) {
			return error
		}
	}
}
