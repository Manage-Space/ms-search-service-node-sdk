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

export class ProductCategoryAdd200ResponseAllOfDataInner {
    'categoryName'?: string | null;
    /**
    * Generated from the category name if not provided
    */
    'categoryDescription'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryName",
            "baseName": "categoryName",
            "type": "string"
        },
        {
            "name": "categoryDescription",
            "baseName": "categoryDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProductCategoryAdd200ResponseAllOfDataInner.attributeTypeMap;
    }
}

