import { AbstractMqtt } from './AbstractsMqtt';

/**
 * Class MqttPublisher
 */
export class MqttPublisher extends AbstractMqtt{
	/**
	 *
	 * @returns {Promise<void>}
	 */
	async handle(topic:any, message :any) {
		try {
			await this.connect();
			await this.publish(topic, message);
			// Consumer
		} catch (e) {
			console.log(e);
			const __self = this;
			setTimeout(() => {
				console.log("[MQTT] reconnecting . . . .");
				return __self.handle(topic, message);
			}, 1000);
		}
	}

	async publish(topic: string, message: string) {
		await this.conn.publish(topic, message, (error: any) => {
			if (error) {
			  console.error('Failed to publish MQTT message:', error);
			} else {
			  console.log('MQTT message published successfully');
			}
		  });
	}
}
