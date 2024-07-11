/**
 * class DisplayableException
 */
 export class DisplayableException extends Error {
    /**
     *
     * @private
     */
    private status: boolean;
    /**
     *
     * @private
     */
    private display: boolean;
    /**
     *
     * @private
     */
    private report: boolean;
    /**
     *
     * @private
     */
    private created_at: number;

    /**
     *
     * @param content
     * @param name
     */
    constructor(content: string | undefined, name: string) {
        super(content);
        this.status = false
        this.name = name
        this.display = true
        this.report = true
        this.created_at = Date.now()
    }

}