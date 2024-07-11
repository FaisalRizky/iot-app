'use strict';

/**
 *
 * @type {string[]}
 */
 export const FILE_ALLOWED = [
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/bmp',
    'image/jpg',
    'image/gif'
];

/**
 * @type {number}
 */
export const MAX_FILE_SIZE = 3150000;

/**
 * Comparison
 */
export class Comparison {
    /**
     *
     * @private
     */
    private static split: any;

    /**
     *
     * @param value
     */
    static isUndefined(value: string | null) {
        if (typeof value == "undefined" || (value === "" && value == "") || value == null) {
            throw Error('must be filled in, not allowed (empty, null, undefined or NaN)')
        }
    }

    /**
     *
     * @param value
     * @returns {*}
     */
    static isNumeric(value: any) {
        const numericFormat = /^[0-9]+$/;
        if (!numericFormat.test(value)) {
            throw Error(`only ascii number (0-9) are allowed`);
        }
    }

    /**
     *
     * @param value
     * @returns {*}
     */
    static isString(value: any) {
        if (typeof value !== "string") {
            throw Error(`type data must string`)
        }
    }

    /**
     *
     * @param value
     * @returns {*}
     */
    static isFloat(value: unknown) {
        if (typeof value === "number") {
            if ((Number(value) === value && value % 1 !== 0)) {
                return true;
            }
            if (Number.isInteger(value) === true) return true;
        }
        throw Error(`type data must integer/float/decimal`)
    }

	static email(value: string) {
		const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!value.match(mailFormat)) {
			throw new Error('file invalid, must base64')
		}
		return true;
	}
}
