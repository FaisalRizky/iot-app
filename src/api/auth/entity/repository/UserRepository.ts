import db from '../../../../database/db'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_PASS || "IniPass"
export class UserRepository {
   
    async isUserExist(input: any) {
        // Check if the user already exists
        const existingUser = await db('users').where('username', input.username).first();
        if (existingUser) {
            return true
        } return false
    }

    async isUserEmailExist(input: any) {
        // Check if the user already exists
        const existingUser = await db('users').where('email', input.email).first();
        if (existingUser) {
            return true
        } return false
    }

    async register(input: any) {
        let isUserExist = await this.isUserExist(input);
        if(isUserExist) {
            return { 
                status: false,
                error: 'Username already exists'
            }
        } 

        let isUserEmailExist = await this.isUserEmailExist(input);
        if(isUserEmailExist) {
            return { 
                status: false,
                error: 'email already exists' 
            }
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(input.password, 10);

        // Insert the new user into the database
        const newUser = {
            username: input.username,
            password: hashedPassword,
            email: input.email
        };
        await db('users').insert(newUser);
        const user = await db('users').select('*').where('username', input.username).first();

        const token = jwt.sign({ userId: user.id, username: input.username }, secretKey, { expiresIn: '1h' });
        return {
            status: true,
            token: token
        }
    }

    async login(input: any) {

        // Find the user by username
        const user = await db('users').where('username', input.username).first();
        if (!user) {
            return { 
                status: false,
                error: 'Invalid username or password' 
            }
        }

        // Compare password
        const result = await bcrypt.compare(input.password, user.password);
        if (!result) {
            return { 
                status: false,
                error: 'Invalid username or password' 
            }
        }

        const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

        return {
            status: true,
            token: token
        }
    }
}
