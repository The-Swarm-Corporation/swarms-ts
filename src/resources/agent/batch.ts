// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from './agent';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Run a batch of agents with the specified tasks using a thread pool.
   *
   * Args: agent_completions: List of agent completion tasks to process x_api_key:
   * API key for authentication
   *
   * Returns: List[Dict[str, Any]]: List of results from completed agent tasks
   *
   * Raises: HTTPException: If there's an error processing the batch
   */
  run(params: BatchRunParams, options?: RequestOptions): APIPromise<BatchRunResponse> {
    const { body, 'x-api-key': xAPIKey } = params;
    return this._client.post('/v1/agent/batch/completions', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }
}

export type BatchRunResponse = { [key: string]: unknown };

export interface BatchRunParams {
  /**
   * Body param:
   */
  body: Array<AgentAPI.AgentCompletion>;

  /**
   * Header param:
   */
  'x-api-key': string;
}

export declare namespace Batch {
  export { type BatchRunResponse as BatchRunResponse, type BatchRunParams as BatchRunParams };
}
