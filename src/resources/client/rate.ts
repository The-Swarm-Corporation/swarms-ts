// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Rate extends APIResource {
  /**
   * Get the rate limits and current usage for the user associated with the provided
   * API key.
   */
  getLimits(options?: RequestOptions): APIPromise<RateGetLimitsResponse> {
    return this._client.get('/v1/rate/limits', options);
  }
}

export type RateGetLimitsResponse = { [key: string]: unknown };

export declare namespace Rate {
  export { type RateGetLimitsResponse as RateGetLimitsResponse };
}
