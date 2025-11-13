// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.auto_swarm_builder',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/auto-swarm-builder/execution-types',
  operationId: 'get_auto_swarm_builder_return_types_v1_auto_swarm_builder_execution_types_get',
};

export const tool: Tool = {
  name: 'list_execution_types_client_auto_swarm_builder',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all available execution types and return formats for the Auto Swarm Builder endpoint.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/auto_swarm_builder_list_execution_types_response',\n  $defs: {\n    auto_swarm_builder_list_execution_types_response: {\n      type: 'array',\n      title: 'Response Get Auto Swarm Builder Return Types V1 Auto Swarm Builder Execution Types Get',\n      items: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.client.autoSwarmBuilder.listExecutionTypes()),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
