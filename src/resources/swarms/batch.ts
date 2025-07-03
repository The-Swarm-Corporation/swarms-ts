// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SwarmsAPI from './swarms';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Run a batch of swarms with the specified tasks using a thread pool.
   */
  run(params: BatchRunParams, options?: RequestOptions): APIPromise<BatchRunResponse> {
    const { body, 'x-api-key': xAPIKey } = params;
    return this._client.post('/v1/swarm/batch/completions', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }
}

export type BatchRunResponse = Array<{ [key: string]: unknown }>;

export interface BatchRunParams {
  /**
   * Body param:
   */
  body: Array<SwarmsAPI.SwarmSpec>;

  /**
   * Header param:
   */
  'x-api-key': string;
}

export declare namespace Batch {
  export { type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
