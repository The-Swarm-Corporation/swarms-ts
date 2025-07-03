// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Get all available models.
   */
  listAvailable(
    params: ModelListAvailableParams,
    options?: RequestOptions,
  ): APIPromise<ModelListAvailableResponse> {
    const { 'x-api-key': xAPIKey } = params;
    return this._client.get('/v1/models/available', {
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }
}

export type ModelListAvailableResponse = { [key: string]: unknown };

export interface ModelListAvailableParams {
  'x-api-key': string;
}

export declare namespace Models {
  export {
    type ModelListAvailableResponse as ModelListAvailableResponse,
    type ModelListAvailableParams as ModelListAvailableParams,
  };
}
