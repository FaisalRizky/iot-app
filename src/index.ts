import * as express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import { Routes } from './api/routes';
import { join } from 'path'
import { MqttWorker } from './lib/mqtt/MqttWorker';
require('dotenv').config({ path: join(__dirname, '..','.env') });

var bodyParser = require('body-parser')
/**
 * Class App
 */
 class App {
  public app: Application;
  public routePrv: Routes = new Routes();
	private mqttWorker: Promise<void>;

	/**
	 * Constructor App
	 */
  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mqttWorker = (new MqttWorker()).handle();
  }

  private config(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

}

export default new App().app;