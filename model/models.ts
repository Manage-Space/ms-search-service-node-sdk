import localVarRequest from 'request';

export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './changeSite200Response';
export * from './changeSite200ResponseAllOfDataInner';
export * from './commonResponse';
export * from './contactAdd200Response';
export * from './contactAdd200ResponseAllOfDataInner';
export * from './feeAdd200Response';
export * from './feeAdd200ResponseAllOfDataInner';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './moveIn200Response';
export * from './moveIn200ResponseAllOfDataInner';
export * from './moveOut200Response';
export * from './moveOut200ResponseAllOfDataInner';
export * from './pricingGroupAdd200Response';
export * from './pricingGroupAdd200ResponseAllOfDataInner';
export * from './productAdd200Response';
export * from './productAdd200ResponseAllOfDataInner';
export * from './productCategoryAdd200Response';
export * from './productCategoryAdd200ResponseAllOfDataInner';
export * from './report200Response';
export * from './report200ResponseAllOfDataInner';
export * from './reservationAdd200Response';
export * from './reservationAdd200ResponseAllOfDataInner';
export * from './settingsAppearance200Response';
export * from './settingsAppearance200ResponseAllOfDataInner';
export * from './settingsLanguage200Response';
export * from './settingsLanguage200ResponseAllOfDataInner';
export * from './settingsOrganization200Response';
export * from './settingsOrganization200ResponseAllOfDataInner';
export * from './showFloor200Response';
export * from './showFloor200ResponseAllOfDataInner';
export * from './smartSearch200Response';
export * from './statusFilters200Response';
export * from './statusFilters200ResponseAllOfDataInner';
export * from './subscriptionProductAdd200Response';
export * from './subscriptionProductAdd200ResponseAllOfDataInner';
export * from './subscriptionProductCategoryAdd200Response';
export * from './subscriptionProductCategoryAdd200ResponseAllOfDataInner';
export * from './taxRateAdd200Response';
export * from './taxRateAdd200ResponseAllOfDataInner';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './workflowDefinitionAdd200Response';
export * from './workflowDefinitionAdd200ResponseAllOfDataInner';
export * from './workflowFormAdd200Response';
export * from './workflowFormAdd200ResponseAllOfDataInner';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { ChangeSite200Response } from './changeSite200Response';
import { ChangeSite200ResponseAllOfDataInner } from './changeSite200ResponseAllOfDataInner';
import { CommonResponse } from './commonResponse';
import { ContactAdd200Response } from './contactAdd200Response';
import { ContactAdd200ResponseAllOfDataInner } from './contactAdd200ResponseAllOfDataInner';
import { FeeAdd200Response } from './feeAdd200Response';
import { FeeAdd200ResponseAllOfDataInner } from './feeAdd200ResponseAllOfDataInner';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { MoveIn200Response } from './moveIn200Response';
import { MoveIn200ResponseAllOfDataInner } from './moveIn200ResponseAllOfDataInner';
import { MoveOut200Response } from './moveOut200Response';
import { MoveOut200ResponseAllOfDataInner } from './moveOut200ResponseAllOfDataInner';
import { PricingGroupAdd200Response } from './pricingGroupAdd200Response';
import { PricingGroupAdd200ResponseAllOfDataInner } from './pricingGroupAdd200ResponseAllOfDataInner';
import { ProductAdd200Response } from './productAdd200Response';
import { ProductAdd200ResponseAllOfDataInner } from './productAdd200ResponseAllOfDataInner';
import { ProductCategoryAdd200Response } from './productCategoryAdd200Response';
import { ProductCategoryAdd200ResponseAllOfDataInner } from './productCategoryAdd200ResponseAllOfDataInner';
import { Report200Response } from './report200Response';
import { Report200ResponseAllOfDataInner } from './report200ResponseAllOfDataInner';
import { ReservationAdd200Response } from './reservationAdd200Response';
import { ReservationAdd200ResponseAllOfDataInner } from './reservationAdd200ResponseAllOfDataInner';
import { SettingsAppearance200Response } from './settingsAppearance200Response';
import { SettingsAppearance200ResponseAllOfDataInner } from './settingsAppearance200ResponseAllOfDataInner';
import { SettingsLanguage200Response } from './settingsLanguage200Response';
import { SettingsLanguage200ResponseAllOfDataInner } from './settingsLanguage200ResponseAllOfDataInner';
import { SettingsOrganization200Response } from './settingsOrganization200Response';
import { SettingsOrganization200ResponseAllOfDataInner } from './settingsOrganization200ResponseAllOfDataInner';
import { ShowFloor200Response } from './showFloor200Response';
import { ShowFloor200ResponseAllOfDataInner } from './showFloor200ResponseAllOfDataInner';
import { SmartSearch200Response } from './smartSearch200Response';
import { StatusFilters200Response } from './statusFilters200Response';
import { StatusFilters200ResponseAllOfDataInner } from './statusFilters200ResponseAllOfDataInner';
import { SubscriptionProductAdd200Response } from './subscriptionProductAdd200Response';
import { SubscriptionProductAdd200ResponseAllOfDataInner } from './subscriptionProductAdd200ResponseAllOfDataInner';
import { SubscriptionProductCategoryAdd200Response } from './subscriptionProductCategoryAdd200Response';
import { SubscriptionProductCategoryAdd200ResponseAllOfDataInner } from './subscriptionProductCategoryAdd200ResponseAllOfDataInner';
import { TaxRateAdd200Response } from './taxRateAdd200Response';
import { TaxRateAdd200ResponseAllOfDataInner } from './taxRateAdd200ResponseAllOfDataInner';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { WorkflowDefinitionAdd200Response } from './workflowDefinitionAdd200Response';
import { WorkflowDefinitionAdd200ResponseAllOfDataInner } from './workflowDefinitionAdd200ResponseAllOfDataInner';
import { WorkflowFormAdd200Response } from './workflowFormAdd200Response';
import { WorkflowFormAdd200ResponseAllOfDataInner } from './workflowFormAdd200ResponseAllOfDataInner';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "FeeAdd200ResponseAllOfDataInner.RateTypeEnum": FeeAdd200ResponseAllOfDataInner.RateTypeEnum,
        "SettingsAppearance200ResponseAllOfDataInner.ThemeEnum": SettingsAppearance200ResponseAllOfDataInner.ThemeEnum,
        "SettingsOrganization200ResponseAllOfDataInner.BillingCycleTypeEnum": SettingsOrganization200ResponseAllOfDataInner.BillingCycleTypeEnum,
        "SettingsOrganization200ResponseAllOfDataInner.TimezoneEnum": SettingsOrganization200ResponseAllOfDataInner.TimezoneEnum,
}

let typeMap: {[index: string]: any} = {
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "ChangeSite200Response": ChangeSite200Response,
    "ChangeSite200ResponseAllOfDataInner": ChangeSite200ResponseAllOfDataInner,
    "CommonResponse": CommonResponse,
    "ContactAdd200Response": ContactAdd200Response,
    "ContactAdd200ResponseAllOfDataInner": ContactAdd200ResponseAllOfDataInner,
    "FeeAdd200Response": FeeAdd200Response,
    "FeeAdd200ResponseAllOfDataInner": FeeAdd200ResponseAllOfDataInner,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "MoveIn200Response": MoveIn200Response,
    "MoveIn200ResponseAllOfDataInner": MoveIn200ResponseAllOfDataInner,
    "MoveOut200Response": MoveOut200Response,
    "MoveOut200ResponseAllOfDataInner": MoveOut200ResponseAllOfDataInner,
    "PricingGroupAdd200Response": PricingGroupAdd200Response,
    "PricingGroupAdd200ResponseAllOfDataInner": PricingGroupAdd200ResponseAllOfDataInner,
    "ProductAdd200Response": ProductAdd200Response,
    "ProductAdd200ResponseAllOfDataInner": ProductAdd200ResponseAllOfDataInner,
    "ProductCategoryAdd200Response": ProductCategoryAdd200Response,
    "ProductCategoryAdd200ResponseAllOfDataInner": ProductCategoryAdd200ResponseAllOfDataInner,
    "Report200Response": Report200Response,
    "Report200ResponseAllOfDataInner": Report200ResponseAllOfDataInner,
    "ReservationAdd200Response": ReservationAdd200Response,
    "ReservationAdd200ResponseAllOfDataInner": ReservationAdd200ResponseAllOfDataInner,
    "SettingsAppearance200Response": SettingsAppearance200Response,
    "SettingsAppearance200ResponseAllOfDataInner": SettingsAppearance200ResponseAllOfDataInner,
    "SettingsLanguage200Response": SettingsLanguage200Response,
    "SettingsLanguage200ResponseAllOfDataInner": SettingsLanguage200ResponseAllOfDataInner,
    "SettingsOrganization200Response": SettingsOrganization200Response,
    "SettingsOrganization200ResponseAllOfDataInner": SettingsOrganization200ResponseAllOfDataInner,
    "ShowFloor200Response": ShowFloor200Response,
    "ShowFloor200ResponseAllOfDataInner": ShowFloor200ResponseAllOfDataInner,
    "SmartSearch200Response": SmartSearch200Response,
    "StatusFilters200Response": StatusFilters200Response,
    "StatusFilters200ResponseAllOfDataInner": StatusFilters200ResponseAllOfDataInner,
    "SubscriptionProductAdd200Response": SubscriptionProductAdd200Response,
    "SubscriptionProductAdd200ResponseAllOfDataInner": SubscriptionProductAdd200ResponseAllOfDataInner,
    "SubscriptionProductCategoryAdd200Response": SubscriptionProductCategoryAdd200Response,
    "SubscriptionProductCategoryAdd200ResponseAllOfDataInner": SubscriptionProductCategoryAdd200ResponseAllOfDataInner,
    "TaxRateAdd200Response": TaxRateAdd200Response,
    "TaxRateAdd200ResponseAllOfDataInner": TaxRateAdd200ResponseAllOfDataInner,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "WorkflowDefinitionAdd200Response": WorkflowDefinitionAdd200Response,
    "WorkflowDefinitionAdd200ResponseAllOfDataInner": WorkflowDefinitionAdd200ResponseAllOfDataInner,
    "WorkflowFormAdd200Response": WorkflowFormAdd200Response,
    "WorkflowFormAdd200ResponseAllOfDataInner": WorkflowFormAdd200ResponseAllOfDataInner,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
