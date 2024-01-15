/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ProductAdd200ResponseAllOfDataInner {
    'itemName'?: string | null;
    /**
    * Generated from the item name if not provided
    */
    'itemDescription'?: string | null;
    'category'?: string | null;
    /**
    * An amount in the smallest denomination (e.g. cents/pence)
    */
    'price'?: number | null;
    'stockQuantity'?: number | null;
    'reorderLevel'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemName",
            "baseName": "itemName",
            "type": "string"
        },
        {
            "name": "itemDescription",
            "baseName": "itemDescription",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "stockQuantity",
            "baseName": "stockQuantity",
            "type": "number"
        },
        {
            "name": "reorderLevel",
            "baseName": "reorderLevel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ProductAdd200ResponseAllOfDataInner.attributeTypeMap;
    }
}

