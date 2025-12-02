// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.tools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tools/available',
  operationId: 'get_available_tools_v1_tools_available_get',
};

export const tool: Tool = {
  name: 'list_available_client_tools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve comprehensive information about all available tools and capabilities supported by the Swarms API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/tool_list_available_response',\n  $defs: {\n    tool_list_available_response: {\n      type: 'object',\n      title: 'AvailableToolsOutput',\n      properties: {\n        status: {\n          type: 'string',\n          title: 'Status',\n          description: 'The status of the available tools.'\n        },\n        tools: {\n          type: 'array',\n          title: 'Tools',\n          description: 'The list of available tools.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.client.tools.listAvailable()));
  } catch (error) {
    if (error instanceof SwarmsClient.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
