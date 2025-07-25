// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'swarms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/swarms/available',
  operationId: 'check_swarm_types_v1_swarms_available_get',
};

export const tool: Tool = {
  name: 'check_available_swarms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck the available swarm types.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SwarmTypesOutput',\n  properties: {\n    success: {\n      type: 'boolean',\n      title: 'Success'\n    },\n    swarm_types: {\n      type: 'object',\n      title: 'Swarm Types'\n    }\n  }\n}\n```",
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
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.swarms.checkAvailable()));
};

export default { metadata, tool, handler };
