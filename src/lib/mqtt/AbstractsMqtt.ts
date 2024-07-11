import * as mqtt from "mqtt";

/**
 * Class AbstractMqtt
 */
export class AbstractMqtt {

    public mqtt: any;
    public conn: any;

    /**
     * Constructor AbstractMqtt
     */
    constructor() {
        this.mqtt = mqtt;
        this.conn = null;
    }

    /**
     *
     * @returns {Promise<null>}
     */
    async connect() {
        try {
            var options = {
                port: process.env.MQTT_PORT,
                host: process.env.MQTT_HOST
            }
            this.conn = await this.mqtt.connect(options);
			console.info('MQTT is online . . . ')
            return this.conn;
        } catch (e) {

            const __self = this;
            setTimeout(()=> {
                console.log('MQTT Disconnected . . . .');
            }, 1000);

            console.log(e);
        }
    }

    /**
     *
     * @returns {boolean}
     */
    closeConnection() {
        const connection = this.conn;
        setTimeout(() => {
            return connection.end()
        }, 1000);

        return true;
    }

}
