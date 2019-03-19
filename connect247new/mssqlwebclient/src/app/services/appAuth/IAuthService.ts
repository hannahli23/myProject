import { User } from '../../models'

export interface IAuthService {
    checkForRole(role: string): boolean;
    checkForToken(): boolean;
    loggedIn(): boolean;
    logIn(username: string, password: string): Promise<User>
    logout()

}