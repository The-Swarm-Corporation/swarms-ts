// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'client.advanced_research',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/advanced-research/completions',
  operationId: 'run_advanced_research_v1_advanced_research_completions_post',
};

export const tool: Tool = {
  name: 'create_completion_client_advanced_research',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExecute comprehensive research sessions with multi-source data collection, analysis, and synthesis capabilities.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/advanced_research_create_completion_response',\n  $defs: {\n    advanced_research_create_completion_response: {\n      type: 'object',\n      title: 'AdvancedResearchOutputSchema',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'The id of the advanced research session'\n        },\n        characters_per_source: {\n          type: 'integer',\n          title: 'Characters Per Source',\n          description: 'The number of characters per source used for the advanced research session'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: 'The description of the advanced research session'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'The name of the advanced research session'\n        },\n        outputs: {\n          type: 'object',\n          title: 'Outputs',\n          description: 'The outputs of the advanced research session',\n          additionalProperties: true\n        },\n        sources: {\n          type: 'integer',\n          title: 'Sources',\n          description: 'The number of sources used for the advanced research session'\n        },\n        timestamp: {\n          type: 'string',\n          title: 'Timestamp',\n          description: 'The timestamp of the advanced research session'\n        },\n        usage: {\n          type: 'object',\n          title: 'Usage',\n          description: 'The usage of the advanced research session',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'characters_per_source',\n        'description',\n        'name',\n        'outputs',\n        'sources',\n        'timestamp',\n        'usage'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      config: {
        type: 'object',
        title: 'AdvancedResearchConfig',
        description: 'The configuration for the advanced research',
        properties: {
          description: {
            type: 'string',
            title: 'Description',
            description: 'Description of the advanced research session',
          },
          director_agent_name: {
            type: 'string',
            title: 'Director Agent Name',
            description: 'Name of the director agent',
          },
          director_max_loops: {
            type: 'integer',
            title: 'Director Max Loops',
            description: 'Maximum loops for the director agent',
          },
          director_max_tokens: {
            type: 'integer',
            title: 'Director Max Tokens',
            description: "Maximum tokens for the director agent's output",
          },
          director_model_name: {
            type: 'string',
            title: 'Director Model Name',
            description: 'Model name for the director agent',
          },
          exa_search_max_characters: {
            type: 'integer',
            title: 'Exa Search Max Characters',
            description: 'Maximum characters to return from the Exa search tool',
          },
          exa_search_num_results: {
            type: 'integer',
            title: 'Exa Search Num Results',
            description: 'Number of results to return from the Exa search tool',
          },
          max_loops: {
            type: 'integer',
            title: 'Max Loops',
            description: 'Number of research loops to run',
          },
          name: {
            type: 'string',
            title: 'Name',
            description: 'Name of the advanced research session',
          },
          worker_model_name: {
            type: 'string',
            title: 'Worker Model Name',
            description: 'Model name for worker agents',
          },
        },
      },
      task: {
        type: 'string',
        title: 'Task',
        description: 'The task to be completed',
      },
      img: {
        type: 'string',
        title: 'Img',
        description: 'The image to be used for the advanced research',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['config', 'task'],
  },
  annotations: {},
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.client.advancedResearch.createCompletion(body)),
    );
  } catch (error) {
    if (error instanceof SwarmsClient.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
