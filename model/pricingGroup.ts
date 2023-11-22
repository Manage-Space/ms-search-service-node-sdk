/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PricingGroup {
    'id': string;
    'groupName': string;
    'dailyPrice': number;
    'discount': number;
    'promo': number;
    'yearlyPrice': number;
    'monthlyPrice': number;
    'priceRaise': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string"
        },
        {
            "name": "dailyPrice",
            "baseName": "dailyPrice",
            "type": "number"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "number"
        },
        {
            "name": "promo",
            "baseName": "promo",
            "type": "number"
        },
        {
            "name": "yearlyPrice",
            "baseName": "yearlyPrice",
            "type": "number"
        },
        {
            "name": "monthlyPrice",
            "baseName": "monthlyPrice",
            "type": "number"
        },
        {
            "name": "priceRaise",
            "baseName": "priceRaise",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PricingGroup.attributeTypeMap;
    }
}
