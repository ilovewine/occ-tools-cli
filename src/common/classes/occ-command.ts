import { Command } from '@oclif/command'
import * as Config from '@oclif/config'

export default abstract class OccCommand extends Command {
	protected token: string
	constructor(argv: string[], config: Config.IConfig) {
		super(argv, config)
		// console.log('env', process.env.OCC_AUTH_TEST2);
	}

	private authenticate() {}
}
