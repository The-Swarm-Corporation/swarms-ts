// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'reasoning_agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/reasoning-agent/types',
  operationId: 'get_reasoning_agent_types_v1_reasoning_agent_types_get',
};

export const tool: Tool = {
  name: 'list_types_reasoning_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the types of reasoning agents available.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/reasoning_agent_list_types_response',\n  $defs: {\n    reasoning_agent_list_types_response: {\n      type: 'object',\n      title: 'Response Get Reasoning Agent Types V1 Reasoning Agent Types Get',\n      additionalProperties: true\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.reasoningAgents.listTypes()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
