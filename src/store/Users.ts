import { makeAutoObservable } from "mobx"

export type UserType = {
    id: number
    login: string
    role: 'ADMIN' | 'CLIENT' | 'MANAGER' | 'SERVICE'
    username: string | null
}

export interface IUserStore {
    _isAuth: boolean
    _user: UserType | {}
    _isFetching: boolean
    setIsAuth: (auth:boolean)=>void
    setIsFetching: (fetching: boolean)=>void
    setUser: (userInfo : UserType) => void
}

export default class UserStore implements IUserStore {

    _isAuth: boolean
    _user: UserType | {}
    _isFetching: boolean

    constructor(){
        this._isAuth = true
        this._isFetching = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(auth : boolean){
        this._isAuth = auth
    }

    setIsFetching(fetching: boolean){
        this._isFetching = fetching
    }

    setUser(userInfo : UserType){
        this._user = userInfo
    }

    public get isAuth(){
        return this._isAuth
    }

    public get isFetching(){
        return this._isFetching
    }

    public get user(){
        return this._user
    }
}