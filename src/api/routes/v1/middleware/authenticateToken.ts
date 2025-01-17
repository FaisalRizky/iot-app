import * as jwt from 'jsonwebtoken'
// JWT authentication middleware
const secretKey = process.env.JWT_PASS || "IniPass"
export const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, secretKey, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }
  
      req.user = user;
      next();
    });
}