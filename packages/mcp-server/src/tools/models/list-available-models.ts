// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'swarms-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SwarmsClient from 'swarms';

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
    properties: {},
  },
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.models.listAvailable());
};

export default { metadata, tool, handler };
