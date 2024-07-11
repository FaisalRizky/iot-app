import { ProductGetAction } from "./action/ProductGetAction";
import { ProductGetDetailAction } from "./action/ProductGetDetailAction";
import { ProductUpdateAction } from "./action/ProductUpdateAction";
import { ProductCreateAction } from "./action/ProductCreateAction";
import { ProductDeleteAction } from "./action/ProductDeleteAction";

export class ProductService {

	private getProductsAction: ProductGetAction
	private getProductDetailAction: ProductGetDetailAction
	private createProductAction: ProductCreateAction
	private deleteProductsction: ProductDeleteAction
	private updateProductAction: ProductUpdateAction

	constructor() {
		this.getProductsAction = new ProductGetAction
		this.getProductDetailAction = new ProductGetDetailAction
		this.createProductAction = new ProductCreateAction
		this.deleteProductsction = new ProductDeleteAction
		this.updateProductAction = new ProductUpdateAction
	}

	async getProducts(input: any) {
		return await this.getProductsAction.handle(input)
	}

    async getProductDetail(id: string) {
		return await this.getProductDetailAction.handle(id)
	}

    async createProduct(input: any, user: any) {
		return await this.createProductAction.handle(input, user)
	}

    async deleteProduct(id: string) {
		return await this.deleteProductsction.handle(id)
	}

    async updateProduct(id: string, input: any) {
		return await this.updateProductAction.handle(id, input)
	}
}
