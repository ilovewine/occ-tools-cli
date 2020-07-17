import axios, { AxiosRequestConfig } from 'axios';
import * as notifier from 'node-notifier';
import { Logger } from 'tslog';

export class RequestService {
	private logger = new Logger();

	async send(requestData: AxiosRequestConfig) {
		return axios(requestData)
			.then(response => response)
			.catch(error => {
				// this.logger.error(error);
				console.log(error);
			})
			.finally(() => {
				// notifier.notify({
				// 	title: 'occ-tools CLI',
				// 	message: 'Request sent.',
				// });
			});
	}
}
