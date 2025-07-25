// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'swarms-ts-mcp/filtering';
import { Metadata, asTextContentResult } from 'swarms-ts-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SwarmsClient from 'swarms-ts';

export const metadata: Metadata = {
  resource: 'agent.batch',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/agent/batch/completions',
  operationId: 'run_agent_batch_v1_agent_batch_completions_post',
};

export const tool: Tool = {
  name: 'run_agent_batch',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRun a batch of agents with the specified tasks using a thread pool.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AgentBatchCompletionResponse',\n  properties: {\n    batch_id: {\n      type: 'string',\n      title: 'Batch Id',\n      description: 'The unique identifier for the agent batch completion.'\n    },\n    execution_time: {\n      type: 'number',\n      title: 'Execution Time',\n      description: 'The execution time of the agent batch completion.'\n    },\n    results: {\n      type: 'object',\n      title: 'Results',\n      description: 'The outputs generated by the agent.'\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp',\n      description: 'The timestamp when the agent batch completion was created.'\n    },\n    total_requests: {\n      type: 'integer',\n      title: 'Total Requests',\n      description: 'The total number of requests in the batch.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        title: 'Agent Completions',
        items: {
          $ref: '#/$defs/agent_completion',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['body'],
    $defs: {
      agent_completion: {
        type: 'object',
        title: 'AgentCompletion',
        properties: {
          agent_config: {
            $ref: '#/$defs/agent_spec',
          },
          history: {
            anyOf: [
              {
                type: 'object',
              },
              {
                type: 'array',
                items: {
                  type: 'object',
                },
              },
            ],
            title: 'History',
            description:
              "The history of the agent's previous tasks and responses. Can be either a dictionary or a list of message objects.",
          },
          img: {
            type: 'string',
            title: 'Img',
            description:
              "An optional image URL that may be associated with the agent's task or representation.",
          },
          imgs: {
            type: 'array',
            title: 'Imgs',
            description:
              "A list of image URLs that may be associated with the agent's task or representation.",
            items: {
              type: 'string',
            },
          },
          stream: {
            type: 'boolean',
            title: 'Stream',
            description: 'A flag indicating whether the agent should stream its output.',
          },
          task: {
            type: 'string',
            title: 'Task',
            description: 'The task to be completed by the agent.',
          },
        },
      },
      agent_spec: {
        type: 'object',
        title: 'AgentSpec',
        properties: {
          agent_name: {
            type: 'string',
            title: 'Agent Name',
            description:
              'The unique name assigned to the agent, which identifies its role and functionality within the swarm.',
          },
          auto_generate_prompt: {
            type: 'boolean',
            title: 'Auto Generate Prompt',
            description:
              'A flag indicating whether the agent should automatically create prompts based on the task requirements.',
          },
          description: {
            type: 'string',
            title: 'Description',
            description:
              "A detailed explanation of the agent's purpose, capabilities, and any specific tasks it is designed to perform.",
          },
          max_loops: {
            type: 'integer',
            title: 'Max Loops',
            description:
              'The maximum number of times the agent is allowed to repeat its task, enabling iterative processing if necessary.',
          },
          max_tokens: {
            type: 'integer',
            title: 'Max Tokens',
            description:
              'The maximum number of tokens that the agent is allowed to generate in its responses, limiting output length.',
          },
          mcp_url: {
            type: 'string',
            title: 'Mcp Url',
            description: 'The URL of the MCP server that the agent can use to complete its task.',
          },
          model_name: {
            type: 'string',
            title: 'Model Name',
            description:
              'The name of the AI model that the agent will utilize for processing tasks and generating outputs. For example: gpt-4o, gpt-4o-mini, openai/o3-mini',
          },
          role: {
            type: 'string',
            title: 'Role',
            description:
              'The designated role of the agent within the swarm, which influences its behavior and interaction with other agents.',
          },
          streaming_on: {
            type: 'boolean',
            title: 'Streaming On',
            description: 'A flag indicating whether the agent should stream its output.',
          },
          system_prompt: {
            type: 'string',
            title: 'System Prompt',
            description:
              'The initial instruction or context provided to the agent, guiding its behavior and responses during execution.',
          },
          temperature: {
            type: 'number',
            title: 'Temperature',
            description:
              "A parameter that controls the randomness of the agent's output; lower values result in more deterministic responses.",
          },
          tools_list_dictionary: {
            type: 'array',
            title: 'Tools List Dictionary',
            description: 'A dictionary of tools that the agent can use to complete its task.',
            items: {
              type: 'object',
            },
          },
        },
        required: ['agent_name'],
      },
    },
  },
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agent.batch.run(body)));
};

export default { metadata, tool, handler };
