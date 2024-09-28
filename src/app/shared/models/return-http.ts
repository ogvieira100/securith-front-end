export class ReturnHttp<T> {
    success:boolean  = true;
    data?:T | null;
    errors:ReturnHttpError[] = [];
}

export enum Priority
{
    High = 1,
    Average = 2,
    Low = 3
}

export enum EventNotification
{
    Insert = 1,
    Update = 2,
    Delete = 3

}

export enum Layer
{
    App = 1,
    Domain = 2,
    Repository = 3,
    Others = 4
}

export enum TypeNotificationNoty
{
    Alert = 1,
    Error = 2,
    Sucess = 3,
    Information = 4,
    BreakSystem = 5
}

export enum NotyIntention
{

}

export class ReturnHttpError{

    priority?:Priority
    layer?:Layer 
    typeNotificationNoty?:TypeNotificationNoty
    message!:string 
    notyIntention?:NotyIntention
    propertsErrors:Array<string> = []


}