// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Execute multiple advanced research sessions concurrently with independent
   * configurations for high-throughput research workflows.
   */
  createCompletion(
    body: BatchCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<BatchCreateCompletionResponse> {
    return this._client.post('/v1/advanced-research/batch/completions', { body, ...options });
  }
}

export type BatchCreateCompletionResponse =
  Array<BatchCreateCompletionResponse.BatchCreateCompletionResponseItem>;

export namespace BatchCreateCompletionResponse {
  export interface BatchCreateCompletionResponseItem {
    /**
     * The id of the advanced research session
     */
    id: string | null;

    /**
     * The number of characters per source used for the advanced research session
     */
    characters_per_source: number | null;

    /**
     * The description of the advanced research session
     */
    description: string | null;

    /**
     * The name of the advanced research session
     */
    name: string | null;

    /**
     * The outputs of the advanced research session
     */
    outputs: unknown;

    /**
     * The number of sources used for the advanced research session
     */
    sources: number | null;

    /**
     * The timestamp of the advanced research session
     */
    timestamp: string | null;

    /**
     * The usage of the advanced research session
     */
    usage: { [key: string]: unknown } | null;
  }
}

export interface BatchCreateCompletionParams {
  /**
   * The input schemas for the advanced research
   */
  input_schemas: Array<BatchCreateCompletionParams.InputSchema> | null;
}

export namespace BatchCreateCompletionParams {
  export interface InputSchema {
    /**
     * The configuration for the advanced research
     */
    config: InputSchema.Config | null;

    /**
     * The task to be completed
     */
    task: string | null;

    /**
     * The image to be used for the advanced research
     */
    img?: string | null;
  }

  export namespace InputSchema {
    /**
     * The configuration for the advanced research
     */
    export interface Config {
      /**
       * Description of the advanced research session
       */
      description?: string | null;

      /**
       * Name of the director agent
       */
      director_agent_name?: string | null;

      /**
       * Maximum loops for the director agent
       */
      director_max_loops?: number | null;

      /**
       * Maximum tokens for the director agent's output
       */
      director_max_tokens?: number | null;

      /**
       * Model name for the director agent
       */
      director_model_name?: string | null;

      /**
       * Maximum characters to return from the Exa search tool
       */
      exa_search_max_characters?: number | null;

      /**
       * Number of results to return from the Exa search tool
       */
      exa_search_num_results?: number | null;

      /**
       * Number of research loops to run
       */
      max_loops?: number | null;

      /**
       * Name of the advanced research session
       */
      name?: string | null;

      /**
       * Model name for worker agents
       */
      worker_model_name?: string | null;
    }
  }
}

export declare namespace Batch {
  export {
    type BatchCreateCompletionResponse as BatchCreateCompletionResponse,
    type BatchCreateCompletionParams as BatchCreateCompletionParams,
  };
}
