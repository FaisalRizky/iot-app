
import {Comparison} from "./Comparison";
import {ValidateRequestException} from "./ValidateRequestException";

/**
 * Class RequestValidation
 */
export class RequestValidation{

    static string: string = 'string'
    static numeric: string = 'numeric'
    static required: string = 'required'
    static email: string = 'email'
    static float: string = 'float'

    /**
     *
     * @param schema
     * @param data
     */
    static validator(schema: any, data: any) {
        /**
         *
         * @type {string[]}
         */
        let rules = Object.getOwnPropertyNames(schema);
        /**
         *
         * @type {number}
         */
        let len = rules.length
        /**
         *
         * @type {Array}
         */
        let errors = [];
        for (let i = 0; i < len; i++) {
            try {
                RequestValidation.execute(data[rules[i]], schema[rules[i]], rules[i])
            } catch (error: any) {
                console.log(error)
                errors.push({
                    field: rules[i],
                    value: data[rules[i]],
                    message: error.message
                })
            }
        }
        if (errors.length > 0) {
            throw new ValidateRequestException(errors)
        }
        return data;
    }

    /**
     *
     * @param value
     * @param rules
     * @param field
     */
    static execute(value: any, rules: any, field: string) {
        if (!Array.isArray(rules)) {
            throw Error("invalid schema")
        }
        rules.forEach((e) => {
            const type = this.getValidationType(e)
            switch (type) {
                case RequestValidation.required:
                    Comparison.isUndefined(value)
                    break;
                case RequestValidation.numeric:
                    if(value) {
                        Comparison.isNumeric(value)
                    }
                    break;
                case RequestValidation.string:
                    if(value) {
                        Comparison.isString(value)
                    }
                    break;
                case RequestValidation.email:
                    if(value) {
                        Comparison.email(value)
                    }
                    break;
                case RequestValidation.float:
                    if(value) {
                        Comparison.isFloat(value)
                    }
                    break;
            }
        })
    }

    /**
     * 
     * @param input 
     */
    static getValidationType(input: string): string {
        const result = input.split(':').map(function(item) {
            return item.trim().toLocaleLowerCase()
        })  
        return result.length > 0 ? result[0] : input.trim().toLocaleLowerCase()
    }

}
