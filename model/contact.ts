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
import { ContactAddress } from './contactAddress';

export class Contact {
    /**
    * Contact Id
    */
    'contactId': string;
    /**
    * Organization Id
    */
    'orgId': string;
    /**
    * Contact email
    */
    'email'?: string;
    /**
    * First name
    */
    'firstName': string;
    /**
    * Middle name
    */
    'middleInitial'?: string;
    /**
    * Last name
    */
    'lastName': string;
    'imageUrl': string;
    /**
    * Phone number
    */
    'phoneNumber'?: string;
    /**
    * Mobile number
    */
    'mobileNumber': string;
    /**
    * Fax number
    */
    'faxNumber'?: string;
    'address': ContactAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "middleInitial",
            "baseName": "middleInitial",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "imageUrl",
            "baseName": "imageUrl",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "faxNumber",
            "baseName": "faxNumber",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "ContactAddress"
        }    ];

    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}

