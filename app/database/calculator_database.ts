import {CompanyData, PriceYear} from "@/app/types";
import {AlexanderServicesData} from "@/app/database/data-model";

export const selectListData: PriceYear[] = ["2023","2024","2025"]

export const companyData: CompanyData = {
        ID: 1,
        companyName: "AlexanderSpace",
        companyOwner: "Alexander",
        serviceData: AlexanderServicesData
    }

