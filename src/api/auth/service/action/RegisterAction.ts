import { AbstractAuthAction } from '../AbstractAuthAction'

export class RegisterAction extends AbstractAuthAction {
	async handle(input: any): Promise<any> {
		try {
			const data = await this.userRepository.register(input)
            return data
		} catch (error) {
			return error
		}
	}
}
