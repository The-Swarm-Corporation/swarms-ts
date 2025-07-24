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
  httpPath: '/v1/swarm/logs',
  operationId: 'get_logs_v1_swarm_logs_get',
};

export const tool: Tool = {
  name: 'get_logs_swarms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all API request logs for all API keys associated with the user identified by the provided API key, excluding any logs that contain a client_ip field in their data.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'SwarmLogsOutput',\n  properties: {\n    count: {\n      type: 'integer',\n      title: 'Count'\n    },\n    logs: {\n      type: 'object',\n      title: 'Logs'\n    },\n    status: {\n      type: 'string',\n      title: 'Status'\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp'\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.swarms.getLogs()));
};

export default { metadata, tool, handler };
