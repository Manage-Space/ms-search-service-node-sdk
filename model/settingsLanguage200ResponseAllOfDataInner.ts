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

export class SettingsLanguage200ResponseAllOfDataInner {
    'language'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SettingsLanguage200ResponseAllOfDataInner.attributeTypeMap;
    }
}
