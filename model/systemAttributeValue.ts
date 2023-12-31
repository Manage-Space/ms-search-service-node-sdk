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
import { AttributeKey } from './attributeKey';

export class SystemAttributeValue {
    'value': string;
    'id': string;
    'systemAttributeKey': AttributeKey;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "systemAttributeKey",
            "baseName": "systemAttributeKey",
            "type": "AttributeKey"
        }    ];

    static getAttributeTypeMap() {
        return SystemAttributeValue.attributeTypeMap;
    }
}

