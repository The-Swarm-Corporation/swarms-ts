// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Get all available models.
   */
  listAvailable(options?: RequestOptions): APIPromise<ModelListAvailableResponse> {
    return this._client.get('/v1/models/available', options);
  }
}

export interface ModelListAvailableResponse {
  models?: unknown;

  success?: boolean | null;
}

export declare namespace Models {
  export { type ModelListAvailableResponse as ModelListAvailableResponse };
}
