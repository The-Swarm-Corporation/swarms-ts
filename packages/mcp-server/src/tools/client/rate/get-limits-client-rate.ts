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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the rate limits and current usage for the user associated with the provided API key.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response Get Rate Limits V1 Rate Limits Get',\n  additionalProperties: true\n}\n```",
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
