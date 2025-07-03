// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'swarms-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Swarms from 'swarms';

export const metadata: Metadata = {
  resource: 'models',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/models/available',
  operationId: 'get_available_models_v1_models_available_get',
};

export const tool: Tool = {
  name: 'list_available_models',
  description: 'Get all available models.',
  inputSchema: {
    type: 'object',
    properties: {
      'x-api-key': {
        type: 'string',
        title: 'X-Api-Key',
      },
    },
  },
};

export const handler = async (client: Swarms, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.models.listAvailable(body));
};

export default { metadata, tool, handler };
