import {DisplayableException} from "../../execption/DisplayableException";

/**
 * class FireblockHttpRequestDeclineException
 */
export class ValidateRequestException extends DisplayableException {
    /**
     *
     * @private
     */
    public error_message: string;

    /**
     *
     * @private
     */
    public code: number;
    /**
     *
     * @private
     */
    public data: any;
    /**
     *
     * @private
     */
    private error_code: any;

    /**
     *
     * @param data
     * @param message
     * @param error_code
     * @param status_code
     */
    constructor(data: any, message: string = "The requested parameter is invalid", error_code: any = "422", status_code: number = 422) {
        super(message, 'Request Validation');
        this.error_message = message
        this.error_code = error_code
        this.code = status_code;
        this.data = data;
    }
}
