// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.marketplace',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/marketplace/agents',
  operationId: 'get_marketplace_agents_v1_marketplace_agents_get',
};

export const tool: Tool = {
  name: 'list_agents_client_marketplace',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve free agents from the marketplace.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/marketplace_list_agents_response',\n  $defs: {\n    marketplace_list_agents_response: {\n      type: 'object',\n      title: 'MarketplacePromptsResponse',\n      description: 'Response schema for marketplace prompts endpoint.',\n      properties: {\n        prompts: {\n          type: 'array',\n          title: 'Prompts',\n          description: 'List of marketplace prompts',\n          items: {\n            type: 'object',\n            title: 'MarketplacePrompt',\n            description: 'Schema for marketplace prompts from the swarms_cloud_prompts table.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id',\n                description: 'Unique identifier for the prompt'\n              },\n              created_at: {\n                type: 'string',\n                title: 'Created At',\n                description: 'Timestamp when the prompt was created'\n              },\n              user_id: {\n                type: 'string',\n                title: 'User Id',\n                description: 'ID of the user who created the prompt'\n              },\n              category: {\n                anyOf: [                  {\n                    type: 'string'\n                  },\n                  {\n                    type: 'array',\n                    items: {\n                      type: 'string'\n                    }\n                  }\n                ],\n                title: 'Category',\n                description: 'Category name(s) - can be string or list'\n              },\n              description: {\n                type: 'string',\n                title: 'Description',\n                description: 'Description of the prompt'\n              },\n              links: {\n                anyOf: [                  {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      additionalProperties: true\n                    }\n                  },\n                  {\n                    type: 'array',\n                    items: {\n                      type: 'string'\n                    }\n                  }\n                ],\n                title: 'Links',\n                description: 'Associated links - can be list of dicts or strings'\n              },\n              name: {\n                type: 'string',\n                title: 'Name',\n                description: 'Name of the prompt'\n              },\n              prompt: {\n                type: 'string',\n                title: 'Prompt',\n                description: 'The actual prompt text'\n              },\n              status: {\n                type: 'string',\n                title: 'Status',\n                description: 'Status of the prompt'\n              },\n              tags: {\n                type: 'string',\n                title: 'Tags',\n                description: 'Tags associated with the prompt'\n              },\n              use_cases: {\n                anyOf: [                  {\n                    type: 'object',\n                    additionalProperties: true\n                  },\n                  {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      additionalProperties: true\n                    }\n                  }\n                ],\n                title: 'Use Cases',\n                description: 'Use cases - can be dict or list of dicts'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'user_id'\n            ]\n          }\n        },\n        total_count: {\n          type: 'integer',\n          title: 'Total Count',\n          description: 'Total number of prompts available'\n        },\n        status: {\n          type: 'string',\n          title: 'Status',\n          description: 'The status of the marketplace prompts response.'\n        },\n        timestamp: {\n          type: 'string',\n          title: 'Timestamp',\n          description: 'The timestamp of the marketplace prompts response.'\n        }\n      },\n      required: [        'prompts',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.client.marketplace.listAgents(body)));
};

export default { metadata, tool, handler };
