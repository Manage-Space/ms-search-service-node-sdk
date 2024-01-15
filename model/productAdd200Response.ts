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
import { ProductAdd200ResponseAllOfDataInner } from './productAdd200ResponseAllOfDataInner';

export class ProductAdd200Response {
    'data': Array<ProductAdd200ResponseAllOfDataInner>;
    'success': boolean;
    'error': object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ProductAdd200ResponseAllOfDataInner>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ProductAdd200Response.attributeTypeMap;
    }
}

