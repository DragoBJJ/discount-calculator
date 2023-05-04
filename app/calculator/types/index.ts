
    export type Service = {
        name: string
        price: number
    }

   export type CompanyData = {
    ID: number,
        companyName: string
        companyOwner: string
        serviceData: Service[]
    }[]