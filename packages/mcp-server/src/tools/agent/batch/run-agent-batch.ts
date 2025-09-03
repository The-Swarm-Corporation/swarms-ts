// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Run a batch of agents with the specified tasks using a thread pool.',
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
                additionalProperties: true,
              },
              {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: true,
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
          task: {
            type: 'string',
            title: 'Task',
            description: 'The task to be completed by the agent.',
          },
          tools_enabled: {
            type: 'array',
            title: 'Tools Enabled',
            description: 'A list of tools that the agent should use to complete its task.',
            items: {
              type: 'string',
            },
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
          dynamic_temperature_enabled: {
            type: 'boolean',
            title: 'Dynamic Temperature Enabled',
            description:
              'A flag indicating whether the agent should dynamically adjust its temperature based on the task.',
          },
          llm_args: {
            type: 'object',
            title: 'Llm Args',
            description:
              'Additional arguments to pass to the LLM such as top_p, frequency_penalty, presence_penalty, etc.',
            additionalProperties: true,
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
          mcp_config: {
            type: 'object',
            title: 'MCPConnection',
            description: 'The MCP connection to use for the agent.',
            properties: {
              authorization_token: {
                type: 'string',
                title: 'Authorization Token',
                description: 'Authentication token for accessing the MCP server',
              },
              headers: {
                type: 'object',
                title: 'Headers',
                description: 'Headers to send to the MCP server',
                additionalProperties: true,
              },
              timeout: {
                type: 'integer',
                title: 'Timeout',
                description: 'Timeout for the MCP server',
              },
              tool_configurations: {
                type: 'object',
                title: 'Tool Configurations',
                description: 'Dictionary containing configuration settings for MCP tools',
                additionalProperties: true,
              },
              transport: {
                type: 'string',
                title: 'Transport',
                description: 'The transport protocol to use for the MCP server',
              },
              type: {
                type: 'string',
                title: 'Type',
                description: "The type of connection, defaults to 'mcp'",
              },
              url: {
                type: 'string',
                title: 'Url',
                description: 'The URL endpoint for the MCP server',
              },
            },
          },
          mcp_configs: {
            type: 'object',
            title: 'MultipleMCPConnections',
            description:
              'The MCP connections to use for the agent. This is a list of MCP connections. Includes multiple MCP connections.',
            properties: {
              connections: {
                type: 'array',
                title: 'Connections',
                description: 'List of MCP connections',
                items: {
                  type: 'object',
                  title: 'MCPConnection',
                  properties: {
                    authorization_token: {
                      type: 'string',
                      title: 'Authorization Token',
                      description: 'Authentication token for accessing the MCP server',
                    },
                    headers: {
                      type: 'object',
                      title: 'Headers',
                      description: 'Headers to send to the MCP server',
                      additionalProperties: true,
                    },
                    timeout: {
                      type: 'integer',
                      title: 'Timeout',
                      description: 'Timeout for the MCP server',
                    },
                    tool_configurations: {
                      type: 'object',
                      title: 'Tool Configurations',
                      description: 'Dictionary containing configuration settings for MCP tools',
                      additionalProperties: true,
                    },
                    transport: {
                      type: 'string',
                      title: 'Transport',
                      description: 'The transport protocol to use for the MCP server',
                    },
                    type: {
                      type: 'string',
                      title: 'Type',
                      description: "The type of connection, defaults to 'mcp'",
                    },
                    url: {
                      type: 'string',
                      title: 'Url',
                      description: 'The URL endpoint for the MCP server',
                    },
                  },
                },
              },
            },
            required: ['connections'],
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
          reasoning_effort: {
            type: 'string',
            title: 'Reasoning Effort',
            description: 'The effort to put into reasoning.',
          },
          reasoning_enabled: {
            type: 'boolean',
            title: 'Reasoning Enabled',
            description: 'A parameter enabling an agent to use reasoning.',
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
          thinking_tokens: {
            type: 'integer',
            title: 'Thinking Tokens',
            description: 'The number of tokens to use for thinking.',
          },
          tool_call_summary: {
            type: 'boolean',
            title: 'Tool Call Summary',
            description: 'A parameter enabling an agent to summarize tool calls.',
          },
          tools_list_dictionary: {
            type: 'array',
            title: 'Tools List Dictionary',
            description: 'A dictionary of tools that the agent can use to complete its task.',
            items: {
              type: 'object',
              additionalProperties: true,
            },
          },
        },
        required: ['agent_name'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: SwarmsClient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agent.batch.run(body));
};

export default { metadata, tool, handler };
