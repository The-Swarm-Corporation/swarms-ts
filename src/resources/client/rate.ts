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

export interface RateGetLimitsResponse {
  /**
   * The configured rate limits based on the user's subscription tier.
   */
  limits: RateGetLimitsResponse.Limits | null;

  /**
   * Current rate limit usage information for different time windows.
   */
  rate_limits: RateGetLimitsResponse.RateLimits | null;

  /**
   * The user's current subscription tier (free or premium).
   */
  tier: string | null;

  /**
   * ISO timestamp when the rate limits information was retrieved.
   */
  timestamp: string | null;

  /**
   * Indicates whether the rate limits request was successful.
   */
  success?: boolean | null;
}

export namespace RateGetLimitsResponse {
  /**
   * The configured rate limits based on the user's subscription tier.
   */
  export interface Limits {
    /**
     * The maximum number of requests allowed per day.
     */
    maximum_requests_per_day: number;

    /**
     * The maximum number of requests allowed per hour.
     */
    maximum_requests_per_hour: number;

    /**
     * The maximum number of requests allowed per minute.
     */
    maximum_requests_per_minute: number;

    /**
     * The maximum number of tokens allowed per agent.
     */
    tokens_per_agent: number;
  }

  /**
   * Current rate limit usage information for different time windows.
   */
  export interface RateLimits {
    /**
     * Rate limit information for the last day.
     */
    day: RateLimits.Day;

    /**
     * Rate limit information for the last hour.
     */
    hour: RateLimits.Hour;

    /**
     * Rate limit information for the last minute.
     */
    minute: RateLimits.Minute;
  }

  export namespace RateLimits {
    /**
     * Rate limit information for the last day.
     */
    export interface Day {
      /**
       * The number of requests made in this time window.
       */
      count: number;

      /**
       * Whether the rate limit has been exceeded for this time window.
       */
      exceeded: boolean;

      /**
       * The maximum number of requests allowed in this time window.
       */
      limit: number;

      /**
       * The number of requests remaining before hitting the limit.
       */
      remaining: number;

      /**
       * ISO timestamp when the rate limit will reset.
       */
      reset_time: string;
    }

    /**
     * Rate limit information for the last hour.
     */
    export interface Hour {
      /**
       * The number of requests made in this time window.
       */
      count: number;

      /**
       * Whether the rate limit has been exceeded for this time window.
       */
      exceeded: boolean;

      /**
       * The maximum number of requests allowed in this time window.
       */
      limit: number;

      /**
       * The number of requests remaining before hitting the limit.
       */
      remaining: number;

      /**
       * ISO timestamp when the rate limit will reset.
       */
      reset_time: string;
    }

    /**
     * Rate limit information for the last minute.
     */
    export interface Minute {
      /**
       * The number of requests made in this time window.
       */
      count: number;

      /**
       * Whether the rate limit has been exceeded for this time window.
       */
      exceeded: boolean;

      /**
       * The maximum number of requests allowed in this time window.
       */
      limit: number;

      /**
       * The number of requests remaining before hitting the limit.
       */
      remaining: number;

      /**
       * ISO timestamp when the rate limit will reset.
       */
      reset_time: string;
    }
  }
}

export declare namespace Rate {
  export { type RateGetLimitsResponse as RateGetLimitsResponse };
}
