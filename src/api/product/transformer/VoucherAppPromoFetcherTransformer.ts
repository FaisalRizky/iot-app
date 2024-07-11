import { Transformer } from './../../../lib/transformer/Transformer';
import { STATUS_MAP } from '../entity/model/VoucherStatusInterface';

/**
 * Class VoucherAppPromoFetcherTransformer
 */
export class VoucherAppPromoFetcherTransformer extends Transformer {
     /**
	 * 
	 * @returns 
	 */
	getData(): any {
        if(!this.data) {
            return {}
        }
		const { data, pagination } = this.data
        return this.setDataPaginated(data, pagination)
    }
	  
	/**
	 * 
	 * @param data 
	 * @returns 
	 */
	setFormat(data: any): any {
		const dataVoucher: any = data
        const lang : any = data.lang ?? "EN"
		const name_en = dataVoucher.info ? dataVoucher.info.name_en : dataVoucher.name_en
		const name_id = dataVoucher.info ? dataVoucher.info.name_id : dataVoucher.name_id
		return {
			id: dataVoucher.id,
			code: dataVoucher.lyt_promo_code ?? dataVoucher.code,
			name: lang.toUpperCase() == "EN" ? name_en : name_id,
			status: dataVoucher.status_voucher,
			start_date: dataVoucher.promo ? dataVoucher.promo.start_date : dataVoucher.start_date,
			end_date: dataVoucher.promo ? dataVoucher.promo.end_date : dataVoucher.end_date,
			created_at: dataVoucher.created_at,
	    }
    }
}