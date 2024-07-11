import {Request, Response, Application, NextFunction} from 'express';
// Importing @sentry/tracing patches the global hub for tracing to work.
import v1 from './v1';

/**
 * Class Routes
 */
export class Routes {
    /**
     *
     * @param app
     */
    public routes(app: Application): void {

		    // enable CORS without external module
		    app.use(function (req, res, next) {
			    res.header("Access-Control-Allow-Origin", "*");
			    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			    next();
		    });

	    /**
	     * API Health Check
	     * ===============================================================================================================
	     */
	    app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send('Service All Good');
            });
	    

	    /**
	     * 🔥 API Documentations
	     * ===============================================================================================================
	     */
	      app.route('/api-docs')
		        .get((req: Request, res: Response) => {
			          res.sendFile(__dirname + '/docs/index.html');
		    });
	      app.route('/api-doc.json')
		        .get((req: Request, res: Response) => {
			          res.sendFile(__dirname + '/docs/api-doc.json');
		    });

        /**
         * 🔥 API Version
         * =============================================================================================================
         * for version change, please add it in another folder, for example V1
         */
        app.use('/v1', v1);

        // Optional fallthrough error handler
        app.use(function onError(err: any, req: Request, res: Response, next: NextFunction) {
            // and optionally displayed to the user for support.
            return res.send(err).status(err.code)
        });
    }
}