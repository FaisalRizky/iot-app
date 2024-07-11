import db from '../../../../database/db' 

export class ProductRepository {
   
    async getProducts(input: any) {
        // Extract query parameters
        const { name, price, sort } = input.query
        // Build the base query
        let query = db('products');

        // Apply filters based on query parameters
        if (name) {
            query = query.where('name', 'like', `%${name}%`);
        }
        if (price) {
            query = query.where('price', '=', parseFloat(price));
        }

        // Apply sorting based on the 'sort' query parameter
        if (sort) {
            const [column, order] = sort.split(':');
            query = query.orderBy(column, order === 'desc' ? 'desc' : 'asc');
        }

        // Execute the query and retrieve the product records
        const products = await query;

        return { 
            status: true,
            data: products
        }
    }

    async createProduct(input: any, user: any) {
        input = Object.assign(input, {
            user_owner_id: user.userId
        })
        let isProductExist = await this.isProductNameExist(input);
        if(isProductExist) {
            return { 
                status: false,
                error: 'Product name already exists' 
            }
        } 
        await db('products').insert(input);
        const products = await db('products').select('*').where('name', input.name).first();
        return { 
            status: true,
            data: products
        }
    }

    async getDetailProduct(id: string) {
        let isProductExist = await this.isProductIdExist(id);
        if(!isProductExist) {
            return { 
                status: false,
                error: 'Product Didnt exists' 
            }
        } 
        const products = await db('products').select('*').where('id', id).first();
        return { 
            status: true,
            data: products
        }
    }

    async deleteProduct(id: string) {
        let isProductExist = await this.isProductIdExist(id);
        if(!isProductExist) {
            return { 
                status: false,
                error: 'Product Didnt exists' 
            }
        }
        const products = await db('products').select('*').where('id', id).first();
        await db('products').where('id', id).del();
        return { 
            status: true,
            data: products
        }
    }
    async updateProduct(id: string, input: any) {
        let isProductExist = await this.isProductIdExist(id);
        if(!isProductExist) {
            return { 
                status: false,
                error: 'Product Didnt exists' 
            }
        } 

        await db('products').where({ id }).update(input);
        const products = await db('products').select('*').where('id', id).first();
        return { 
            status: true,
            data: products
        }
    }

    async isProductNameExist(input: any) {
        // Check if the user already exists
        const existingProduct = await db('products').where('name', input.name).first();
        if (existingProduct) {
            return true
        } return false
    }

    async isProductIdExist(id: string) {
        // Check if the user already exists
        const existingProduct = await db('products').where('id', id).first();
        if (existingProduct) {
            return true
        } return false
    }
}
