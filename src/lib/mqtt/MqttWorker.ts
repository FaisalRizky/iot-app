import { ProductService } from '../../api/product/service/ProductService';
import { AbstractMqtt } from './AbstractsMqtt';

/**
 * Class MqttWorker
 */
export class MqttWorker extends AbstractMqtt{
	/**
	 *
	 * @returns {Promise<void>}
	 */
	async handle() {
		try {
			await this.connect();
			await this.subscribe("update-product");
			// Consumer
		} catch (e) {
			console.log(e);
			const __self = this;
			setTimeout(() => {
				console.log("[MQTT] reconnecting . . . .");
				return __self.handle();
			}, 1000);
		}
	}

	async subscribe(topic: string) {
		const connection = this.conn;
		await connection.on('connect', function () {
			console.log("MQTT Subscribe to Topic "+topic);
		  //mqtt subscripe to topics
		  connection.subscribe(topic)
		})

		// Handle MQTT messages
		await connection.on('message', async (topic:any , message:any ) => {
			message = JSON.parse(message);
			console.log(`Received message on topic ${topic}: ${message}`);
			// Handle the MQTT message as needed

			if(topic == 'update-product') {
				await (new ProductService()).updateProduct(message.id, message)
			}
		});

	}
}
