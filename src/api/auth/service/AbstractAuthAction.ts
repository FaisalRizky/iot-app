import { UserRepository } from "../entity/repository/UserRepository"

export abstract class AbstractAuthAction {
	protected userRepository: UserRepository

	constructor() {
		this.userRepository = new UserRepository

	}
}