// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.rate',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rate/limits',
  operationId: 'get_rate_limits_v1_rate_limits_get',
};

export const tool: Tool = {
  name: 'get_limits_client_rate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the rate limits and current usage for the user associated with the provided API key.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'RateLimitsOutput',\n  properties: {\n    limits: {\n      type: 'object',\n      title: 'RateLimitLimits',\n      description: 'The configured rate limits based on the user\\'s subscription tier.',\n      properties: {\n        maximum_requests_per_day: {\n          type: 'integer',\n          title: 'Maximum Requests Per Day',\n          description: 'The maximum number of requests allowed per day.'\n        },\n        maximum_requests_per_hour: {\n          type: 'integer',\n          title: 'Maximum Requests Per Hour',\n          description: 'The maximum number of requests allowed per hour.'\n        },\n        maximum_requests_per_minute: {\n          type: 'integer',\n          title: 'Maximum Requests Per Minute',\n          description: 'The maximum number of requests allowed per minute.'\n        },\n        tokens_per_agent: {\n          type: 'integer',\n          title: 'Tokens Per Agent',\n          description: 'The maximum number of tokens allowed per agent.'\n        }\n      },\n      required: [        'maximum_requests_per_day',\n        'maximum_requests_per_hour',\n        'maximum_requests_per_minute',\n        'tokens_per_agent'\n      ]\n    },\n    rate_limits: {\n      type: 'object',\n      title: 'RateLimitsInfo',\n      description: 'Current rate limit usage information for different time windows.',\n      properties: {\n        day: {\n          type: 'object',\n          title: 'RateLimitWindow',\n          description: 'Rate limit information for the last day.',\n          properties: {\n            count: {\n              type: 'integer',\n              title: 'Count',\n              description: 'The number of requests made in this time window.'\n            },\n            exceeded: {\n              type: 'boolean',\n              title: 'Exceeded',\n              description: 'Whether the rate limit has been exceeded for this time window.'\n            },\n            limit: {\n              type: 'integer',\n              title: 'Limit',\n              description: 'The maximum number of requests allowed in this time window.'\n            },\n            remaining: {\n              type: 'integer',\n              title: 'Remaining',\n              description: 'The number of requests remaining before hitting the limit.'\n            },\n            reset_time: {\n              type: 'string',\n              title: 'Reset Time',\n              description: 'ISO timestamp when the rate limit will reset.'\n            }\n          },\n          required: [            'count',\n            'exceeded',\n            'limit',\n            'remaining',\n            'reset_time'\n          ]\n        },\n        hour: {\n          type: 'object',\n          title: 'RateLimitWindow',\n          description: 'Rate limit information for the last hour.',\n          properties: {\n            count: {\n              type: 'integer',\n              title: 'Count',\n              description: 'The number of requests made in this time window.'\n            },\n            exceeded: {\n              type: 'boolean',\n              title: 'Exceeded',\n              description: 'Whether the rate limit has been exceeded for this time window.'\n            },\n            limit: {\n              type: 'integer',\n              title: 'Limit',\n              description: 'The maximum number of requests allowed in this time window.'\n            },\n            remaining: {\n              type: 'integer',\n              title: 'Remaining',\n              description: 'The number of requests remaining before hitting the limit.'\n            },\n            reset_time: {\n              type: 'string',\n              title: 'Reset Time',\n              description: 'ISO timestamp when the rate limit will reset.'\n            }\n          },\n          required: [            'count',\n            'exceeded',\n            'limit',\n            'remaining',\n            'reset_time'\n          ]\n        },\n        minute: {\n          type: 'object',\n          title: 'RateLimitWindow',\n          description: 'Rate limit information for the last minute.',\n          properties: {\n            count: {\n              type: 'integer',\n              title: 'Count',\n              description: 'The number of requests made in this time window.'\n            },\n            exceeded: {\n              type: 'boolean',\n              title: 'Exceeded',\n              description: 'Whether the rate limit has been exceeded for this time window.'\n            },\n            limit: {\n              type: 'integer',\n              title: 'Limit',\n              description: 'The maximum number of requests allowed in this time window.'\n            },\n            remaining: {\n              type: 'integer',\n              title: 'Remaining',\n              description: 'The number of requests remaining before hitting the limit.'\n            },\n            reset_time: {\n              type: 'string',\n              title: 'Reset Time',\n              description: 'ISO timestamp when the rate limit will reset.'\n            }\n          },\n          required: [            'count',\n            'exceeded',\n            'limit',\n            'remaining',\n            'reset_time'\n          ]\n        }\n      },\n      required: [        'day',\n        'hour',\n        'minute'\n      ]\n    },\n    tier: {\n      type: 'string',\n      title: 'Tier',\n      description: 'The user\\'s current subscription tier (free or premium).'\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp',\n      description: 'ISO timestamp when the rate limits information was retrieved.'\n    },\n    success: {\n      type: 'boolean',\n      title: 'Success',\n      description: 'Indicates whether the rate limits request was successful.'\n    }\n  },\n  required: [    'limits',\n    'rate_limits',\n    'tier',\n    'timestamp'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.client.rate.getLimits()));
};

export default { metadata, tool, handler };
