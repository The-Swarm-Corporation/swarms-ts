// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Marketplace extends APIResource {
  /**
   * Retrieve free agents from the marketplace.
   */
  createAgent(
    body: MarketplaceCreateAgentParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceCreateAgentResponse> {
    return this._client.post('/v1/marketplace/agents', { body, ...options });
  }
}

/**
 * Response schema for marketplace prompts endpoint.
 */
export interface MarketplaceCreateAgentResponse {
  /**
   * List of marketplace prompts
   */
  prompts: Array<MarketplaceCreateAgentResponse.Prompt>;

  /**
   * Total number of prompts available
   */
  total_count: number;

  /**
   * The status of the marketplace prompts response.
   */
  status?: string | null;

  /**
   * The timestamp of the marketplace prompts response.
   */
  timestamp?: string | null;
}

export namespace MarketplaceCreateAgentResponse {
  /**
   * Schema for marketplace prompts from the swarms_cloud_prompts table.
   */
  export interface Prompt {
    /**
     * Unique identifier for the prompt
     */
    id: string;

    /**
     * Timestamp when the prompt was created
     */
    created_at: string;

    /**
     * ID of the user who created the prompt
     */
    user_id: string;

    /**
     * Category name(s) - can be string or list
     */
    category?: string | Array<string> | null;

    /**
     * Description of the prompt
     */
    description?: string | null;

    /**
     * Associated links - can be list of dicts or strings
     */
    links?: Array<{ [key: string]: unknown }> | Array<string> | null;

    /**
     * Name of the prompt
     */
    name?: string | null;

    /**
     * The actual prompt text
     */
    prompt?: string | null;

    /**
     * Status of the prompt
     */
    status?: string | null;

    /**
     * Tags associated with the prompt
     */
    tags?: string | null;

    /**
     * Use cases - can be dict or list of dicts
     */
    use_cases?: { [key: string]: unknown } | Array<{ [key: string]: unknown }> | null;
  }
}

export interface MarketplaceCreateAgentParams {
  /**
   * Number of items to return
   */
  number_of_items?: number | null;
}

export declare namespace Marketplace {
  export {
    type MarketplaceCreateAgentResponse as MarketplaceCreateAgentResponse,
    type MarketplaceCreateAgentParams as MarketplaceCreateAgentParams,
  };
}
