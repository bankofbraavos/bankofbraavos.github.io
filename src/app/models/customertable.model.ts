import { ICustomer, ICustomerTable } from "./customer.model";

export class CustomerTable {

    constructor() {

    }

    static getCustomerTableData(customerData: ICustomer[]): ICustomerTable[] {
        const customerTableData: ICustomerTable[] = [];
        customerData.forEach((customer) => {
            const cust = {
                id: customer.id,
                name: customer.name,
                email: customer.email
            }
            customerTableData.push(cust);
        })
        return customerTableData;
    }


    static getFilteredCustomerTableData(customerTableData: ICustomerTable[], filterByColumn: string, filterByValue: string): ICustomerTable[] {
        const customerTableFilteredData: ICustomerTable[] = [];
        customerTableData.forEach((customer: any) => {
            if (customer[filterByColumn] == filterByValue) {
                customerTableFilteredData.push(customer);
            }
        })
        return customerTableFilteredData;
    }
}