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

export class SmartResponseUnit {
    /**
    * Unit ID
    */
    'unitId': string;
    /**
    * Unit name
    */
    'unitName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "string"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SmartResponseUnit.attributeTypeMap;
    }
}

