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
import { CustomAttributeValue } from './customAttributeValue';
import { SystemAttributeValue } from './systemAttributeValue';

export class UnitAttribute {
    'customAttributeValue': CustomAttributeValue | null;
    'systemAttributeValue': SystemAttributeValue | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customAttributeValue",
            "baseName": "customAttributeValue",
            "type": "CustomAttributeValue"
        },
        {
            "name": "systemAttributeValue",
            "baseName": "systemAttributeValue",
            "type": "SystemAttributeValue"
        }    ];

    static getAttributeTypeMap() {
        return UnitAttribute.attributeTypeMap;
    }
}

