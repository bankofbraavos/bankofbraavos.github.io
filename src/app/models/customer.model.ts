interface geo{
    lat:string,
    lng:string
}

interface address{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:{
        [key:string]: geo
    }
}


export interface ICustomer{
    id:string,
    name:string,
    username:string,
    email:string,
    address: {
     [key:string]:address
    }
}

export interface ICustomerTable{
    id: string,
    name: string,
    email: string
}