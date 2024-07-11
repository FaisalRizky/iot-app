import { Transformer } from './../../../lib/transformer/Transformer';
import { STATUS_MAP } from '../entity/model/VoucherStatusInterface';
import { AmountRewardType } from '../../milestone/entity/model/contract/PromoRewardTypeInterface';
import moment from 'moment';
/**
 * Class VoucherAppPromoDetailTransformer
 */
export class VoucherAppPromoDetailTransformer extends Transformer {
    /**
	 * 
	 * @returns
	 */
	getData(): any {
        if(!this.data) {
            return {}
        }
        return this.setFormat(this.data)
    }

	/**
	 * 
	 * @param data 
	 * @returns 
	 */
	setFormat(data: any): any {
		const dataVoucher: any = data.voucherDetail
		const dataEvent: any = data.event
        const lang : any = data.lang ?? "EN"
		return {
			id: dataVoucher.id,
			code: dataVoucher.code,
			name: lang.toUpperCase() == "EN" ? dataVoucher.name_en : dataVoucher.name_id,
			desc: lang.toUpperCase() == "EN" ? dataVoucher.desc_en : dataVoucher.desc_id,
			image: dataVoucher.image,
			status: STATUS_MAP.get(dataVoucher.status),
			amount_reward: dataVoucher.amount_reward,
			serial: dataVoucher.serial,
			ref_id: dataVoucher.ref_id,
			amount_type_reward: dataVoucher.rules_amount_reward_type,
			rules_max_amount_reward: dataVoucher.rules_amount_reward_type != AmountRewardType.FIXED ? dataVoucher.rules_max_amount_reward : null,
			ticker: dataVoucher.ticker,
			max_reward_ticker: dataVoucher.max_ticker_reward ?? "IDR",
			start_date: dataVoucher.start_date,
			end_date: dataVoucher.end_date,
			created_at: dataVoucher.created_at,
			updated_at: moment(dataVoucher.updated_at).unix(),
			event: dataEvent.event
        }
    }
}