// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get_root',
    endpoint: '/',
    httpMethod: 'get',
    summary: 'Root',
    description: 'Root',
    stainlessPath: '(resource) $client > (method) get_root',
    qualified: 'client.getRoot',
    response: 'object',
    markdown:
      "## get_root\n\n`client.getRoot(): object`\n\n**get** `/`\n\nRoot\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.getRoot();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: '$client get_root',
        example: "swarms get-root \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'GetRoot',
        example:
          'ClientGetRootParams parameters = new();\n\nvar response = await client.GetRoot(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.GetRoot',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.GetRoot(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/ \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'getRoot',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.ClientGetRootParams;\nimport com.swarms.api.models.ClientGetRootResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        ClientGetRootResponse response = client.getRoot();\n    }\n}',
      },
      python: {
        method: 'get_root',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.get_root()\nprint(response)',
      },
      typescript: {
        method: 'client.getRoot',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.getRoot();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health',
    description: 'Health',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: '{ status?: string; }',
    markdown:
      "## check\n\n`client.health.check(): { status?: string; }`\n\n**get** `/health`\n\nHealth\n\n### Returns\n\n- `{ status?: string; }`\n\n  - `status?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'health check',
        example: "swarms health check \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Health.Check',
        example:
          'HealthCheckParams parameters = new();\n\nvar response = await client.Health.Check(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Health.Check',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Health.Check(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/health \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'health().check',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.health.HealthCheckParams;\nimport com.swarms.api.models.health.HealthCheckResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        HealthCheckResponse response = client.health().check();\n    }\n}',
      },
      python: {
        method: 'health.check',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.health.check()\nprint(response.status)',
      },
      typescript: {
        method: 'client.health.check',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.health.check();\n\nconsole.log(response.status);",
      },
    },
  },
  {
    name: 'run',
    endpoint: '/v1/agent/completions',
    httpMethod: 'post',
    summary: 'Run Agent',
    description: 'Run an agent with the specified task. Supports streaming when stream=True.',
    stainlessPath: '(resource) agent > (method) run',
    qualified: 'client.agent.run',
    params: [
      'agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; };',
      'history?: object | object[];',
      'img?: string;',
      'imgs?: string[];',
      'task?: string;',
      'tools_enabled?: string[];',
    ],
    response:
      '{ description?: string; job_id?: string; name?: string; outputs?: object; success?: boolean; temperature?: number; timestamp?: string; usage?: object; }',
    markdown:
      "## run\n\n`client.agent.run(agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }, history?: object | object[], img?: string, imgs?: string[], task?: string, tools_enabled?: string[]): { description?: string; job_id?: string; name?: string; outputs?: object; success?: boolean; temperature?: number; timestamp?: string; usage?: object; }`\n\n**post** `/v1/agent/completions`\n\nRun an agent with the specified task. Supports streaming when stream=True.\n\n### Parameters\n\n- `agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }`\n  The configuration of the agent to be completed.\n  - `agent_name: string`\n    The unique name assigned to the agent, which identifies its role and functionality within the swarm.\n  - `auto_generate_prompt?: boolean`\n    A flag indicating whether the agent should automatically create prompts based on the task requirements.\n  - `description?: string`\n    A detailed explanation of the agent's purpose, capabilities, and any specific tasks it is designed to perform.\n  - `dynamic_temperature_enabled?: boolean`\n    A flag indicating whether the agent should dynamically adjust its temperature based on the task.\n  - `llm_args?: object`\n    Additional arguments to pass to the LLM such as top_p, frequency_penalty, presence_penalty, etc.\n  - `max_loops?: number`\n    The maximum number of times the agent is allowed to repeat its task, enabling iterative processing if necessary.\n  - `max_tokens?: number`\n    The maximum number of tokens that the agent is allowed to generate in its responses, limiting output length.\n  - `mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }`\n    The MCP connection to use for the agent.\n  - `mcp_configs?: { connections: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }[]; }`\n    The MCP connections to use for the agent. This is a list of MCP connections. Includes multiple MCP connections.\n  - `mcp_url?: string`\n    The URL of the MCP server that the agent can use to complete its task.\n  - `model_name?: string`\n    The name of the AI model that the agent will utilize for processing tasks and generating outputs. For example: gpt-4o, gpt-4o-mini, openai/o3-mini\n  - `reasoning_effort?: string`\n    The effort to put into reasoning.\n  - `reasoning_enabled?: boolean`\n    A parameter enabling an agent to use reasoning.\n  - `role?: string`\n    The designated role of the agent within the swarm, which influences its behavior and interaction with other agents.\n  - `streaming_on?: boolean`\n    A flag indicating whether the agent should stream its output.\n  - `system_prompt?: string`\n    The initial instruction or context provided to the agent, guiding its behavior and responses during execution.\n  - `temperature?: number`\n    A parameter that controls the randomness of the agent's output; lower values result in more deterministic responses.\n  - `thinking_tokens?: number`\n    The number of tokens to use for thinking.\n  - `tool_call_summary?: boolean`\n    A parameter enabling an agent to summarize tool calls.\n  - `tools_list_dictionary?: object[]`\n    A dictionary of tools that the agent can use to complete its task.\n\n- `history?: object | object[]`\n  The history of the agent's previous tasks and responses. Can be either a dictionary or a list of message objects.\n\n- `img?: string`\n  An optional image URL that may be associated with the agent's task or representation.\n\n- `imgs?: string[]`\n  A list of image URLs that may be associated with the agent's task or representation.\n\n- `task?: string`\n  The task to be completed by the agent.\n\n- `tools_enabled?: string[]`\n  A list of tools that the agent should use to complete its task.\n\n### Returns\n\n- `{ description?: string; job_id?: string; name?: string; outputs?: object; success?: boolean; temperature?: number; timestamp?: string; usage?: object; }`\n\n  - `description?: string`\n  - `job_id?: string`\n  - `name?: string`\n  - `outputs?: object`\n  - `success?: boolean`\n  - `temperature?: number`\n  - `timestamp?: string`\n  - `usage?: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.agent.run();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'agent run',
        example: "swarms agent run \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Agent.Run',
        example:
          'AgentRunParams parameters = new();\n\nvar response = await client.Agent.Run(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Agent.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.Run(context.TODO(), swarms.AgentRunParams{\n\t\tAgentCompletion: swarms.AgentCompletionParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.JobID)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/agent/completions \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'agent().run',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.agent.AgentCompletion;\nimport com.swarms.api.models.agent.AgentRunParams;\nimport com.swarms.api.models.agent.AgentRunResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        AgentCompletion params = AgentCompletion.builder().build();\n        AgentRunResponse response = client.agent().run(params);\n    }\n}',
      },
      python: {
        method: 'agent.run',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.run()\nprint(response.job_id)',
      },
      typescript: {
        method: 'client.agent.run',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.run();\n\nconsole.log(response.job_id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/agents/list',
    httpMethod: 'get',
    summary: 'List Agents',
    description:
      'Get all unique agent configurations that the user has created or used, without task details. Allows users to reuse agent configs with new tasks.',
    stainlessPath: '(resource) agent > (method) list',
    qualified: 'client.agent.list',
    response: 'object',
    markdown:
      "## list\n\n`client.agent.list(): object`\n\n**get** `/v1/agents/list`\n\nGet all unique agent configurations that the user has created or used, without task details. Allows users to reuse agent configs with new tasks.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst agents = await client.agent.list();\n\nconsole.log(agents);\n```",
    perLanguage: {
      cli: {
        method: 'agent list',
        example: "swarms agent list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Agent.List',
        example:
          'AgentListParams parameters = new();\n\nvar agents = await client.Agent.List(parameters);\n\nConsole.WriteLine(agents);',
      },
      go: {
        method: 'client.Agent.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagents, err := client.Agent.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agents)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/v1/agents/list \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'agent().list',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.agent.AgentListParams;\nimport com.swarms.api.models.agent.AgentListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        AgentListResponse agents = client.agent().list();\n    }\n}',
      },
      python: {
        method: 'agent.list',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nagents = client.agent.list()\nprint(agents)',
      },
      typescript: {
        method: 'client.agent.list',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst agents = await client.agent.list();\n\nconsole.log(agents);",
      },
    },
  },
  {
    name: 'run',
    endpoint: '/v1/agent/batch/completions',
    httpMethod: 'post',
    summary: 'Run Agent Batch',
    description: 'Run a batch of agents with the specified tasks using a thread pool.',
    stainlessPath: '(resource) agent.batch > (method) run',
    qualified: 'client.agent.batch.run',
    params: [
      'body: { agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }; history?: object | object[]; img?: string; imgs?: string[]; task?: string; tools_enabled?: string[]; }[];',
    ],
    response:
      '{ batch_id?: string; execution_time?: number; results?: object; timestamp?: string; total_requests?: number; }',
    markdown:
      "## run\n\n`client.agent.batch.run(body: { agent_config?: agent_spec; history?: object | object[]; img?: string; imgs?: string[]; task?: string; tools_enabled?: string[]; }[]): { batch_id?: string; execution_time?: number; results?: object; timestamp?: string; total_requests?: number; }`\n\n**post** `/v1/agent/batch/completions`\n\nRun a batch of agents with the specified tasks using a thread pool.\n\n### Parameters\n\n- `body: { agent_config?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }; history?: object | object[]; img?: string; imgs?: string[]; task?: string; tools_enabled?: string[]; }[]`\n\n### Returns\n\n- `{ batch_id?: string; execution_time?: number; results?: object; timestamp?: string; total_requests?: number; }`\n\n  - `batch_id?: string`\n  - `execution_time?: number`\n  - `results?: object`\n  - `timestamp?: string`\n  - `total_requests?: number`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.agent.batch.run({ body: [{}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'batch run',
        example: "swarms agent:batch run \\\n  --api-key 'My API Key' \\\n  --body '{}'",
      },
      csharp: {
        method: 'Agent.Batch.Run',
        example:
          'BatchRunParams parameters = new()\n{\n    Body =\n    [\n        new()\n        {\n            AgentConfig = new()\n            {\n                AgentName = "agent_name",\n                AutoGeneratePrompt = true,\n                Description = "description",\n                DynamicTemperatureEnabled = true,\n                LlmArgs = new Dictionary<string, JsonElement>()\n                {\n                    { "foo", JsonSerializer.SerializeToElement("bar") }\n                },\n                MaxLoops = 0,\n                MaxTokens = 0,\n                McpConfig = new()\n                {\n                    AuthorizationToken = "authorization_token",\n                    Headers = new Dictionary<string, string>()\n                    {\n                        { "foo", "string" }\n                    },\n                    Timeout = 0,\n                    ToolConfigurations = new Dictionary<string, JsonElement>()\n                    {\n                        { "foo", JsonSerializer.SerializeToElement("bar") }\n                    },\n                    Transport = "transport",\n                    Type = "type",\n                    Url = "url",\n                },\n                McpConfigs = new(\n\n                    [\n                        new()\n                        {\n                            AuthorizationToken = "authorization_token",\n                            Headers = new Dictionary<string, string>()\n                            {\n                                { "foo", "string" }\n                            },\n                            Timeout = 0,\n                            ToolConfigurations = new Dictionary<string, JsonElement>(\n\n                            )\n                            {\n                                { "foo", JsonSerializer.SerializeToElement("bar") },\n                            },\n                            Transport = "transport",\n                            Type = "type",\n                            Url = "url",\n                        },\n                    ]\n                ),\n                McpUrl = "mcp_url",\n                ModelName = "model_name",\n                ReasoningEffort = "reasoning_effort",\n                ReasoningEnabled = true,\n                Role = "role",\n                StreamingOn = true,\n                SystemPrompt = "system_prompt",\n                Temperature = 0,\n                ThinkingTokens = 0,\n                ToolCallSummary = true,\n                ToolsListDictionary =\n                [\n                    new Dictionary<string, JsonElement>()\n                    {\n                        { "foo", JsonSerializer.SerializeToElement("bar") }\n                    },\n                ],\n            },\n            History = new(\n                new Dictionary<string, JsonElement>()\n                {\n                    { "foo", JsonSerializer.SerializeToElement("bar") }\n                }\n            ),\n            Img = "img",\n            Imgs =\n            [\n                "string"\n            ],\n            Task = "task",\n            ToolsEnabled =\n            [\n                "string"\n            ],\n        },\n    ],\n};\n\nvar response = await client.Agent.Batch.Run(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Agent.Batch.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agent.Batch.Run(context.TODO(), swarms.AgentBatchRunParams{\n\t\tBody: []swarms.AgentCompletionParam{{}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BatchID)\n}\n',
      },
      http: {
        example:
          'curl https://api.swarms.world/v1/agent/batch/completions \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SWARMS_API_KEY" \\\n    -d \'[\n          {\n            "agent_config": {\n              "agent_name": "agent_name",\n              "auto_generate_prompt": true,\n              "description": "description",\n              "dynamic_temperature_enabled": true,\n              "llm_args": {\n                "foo": "bar"\n              },\n              "max_loops": 0,\n              "max_tokens": 0,\n              "mcp_config": {\n                "authorization_token": "authorization_token",\n                "headers": {\n                  "foo": "string"\n                },\n                "timeout": 0,\n                "tool_configurations": {\n                  "foo": "bar"\n                },\n                "transport": "transport",\n                "type": "type",\n                "url": "url"\n              },\n              "mcp_configs": {\n                "connections": [\n                  {\n                    "authorization_token": "authorization_token",\n                    "headers": {\n                      "foo": "string"\n                    },\n                    "timeout": 0,\n                    "tool_configurations": {\n                      "foo": "bar"\n                    },\n                    "transport": "transport",\n                    "type": "type",\n                    "url": "url"\n                  }\n                ]\n              },\n              "mcp_url": "mcp_url",\n              "model_name": "model_name",\n              "reasoning_effort": "reasoning_effort",\n              "reasoning_enabled": true,\n              "role": "role",\n              "streaming_on": true,\n              "system_prompt": "system_prompt",\n              "temperature": 0,\n              "thinking_tokens": 0,\n              "tool_call_summary": true,\n              "tools_list_dictionary": [\n                {\n                  "foo": "bar"\n                }\n              ]\n            },\n            "history": {\n              "foo": "bar"\n            },\n            "img": "img",\n            "imgs": [\n              "string"\n            ],\n            "task": "task",\n            "tools_enabled": [\n              "string"\n            ]\n          }\n        ]\'',
      },
      java: {
        method: 'agent().batch().run',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.agent.AgentCompletion;\nimport com.swarms.api.models.agent.batch.BatchRunParams;\nimport com.swarms.api.models.agent.batch.BatchRunResponse;\nimport java.util.List;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        List<AgentCompletion> params = List.of(AgentCompletion.builder().build());\n        BatchRunResponse response = client.agent().batch().run(params);\n    }\n}',
      },
      python: {
        method: 'agent.batch.run',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agent.batch.run(\n    body=[{}],\n)\nprint(response.batch_id)',
      },
      typescript: {
        method: 'client.agent.batch.run',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agent.batch.run({ body: [{}] });\n\nconsole.log(response.batch_id);",
      },
    },
  },
  {
    name: 'list_available',
    endpoint: '/v1/models/available',
    httpMethod: 'get',
    summary: 'Get Available Models',
    description: 'Get all available models.',
    stainlessPath: '(resource) models > (method) list_available',
    qualified: 'client.models.listAvailable',
    response: '{ models?: object; success?: boolean; }',
    markdown:
      "## list_available\n\n`client.models.listAvailable(): { models?: object; success?: boolean; }`\n\n**get** `/v1/models/available`\n\nGet all available models.\n\n### Returns\n\n- `{ models?: object; success?: boolean; }`\n\n  - `models?: object`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.models.listAvailable();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'models list_available',
        example: "swarms models list-available \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Models.ListAvailable',
        example:
          'ModelListAvailableParams parameters = new();\n\nvar response = await client.Models.ListAvailable(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Models.ListAvailable',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Models.ListAvailable(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Models)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/v1/models/available \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'models().listAvailable',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.models.ModelListAvailableParams;\nimport com.swarms.api.models.models.ModelListAvailableResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        ModelListAvailableResponse response = client.models().listAvailable();\n    }\n}',
      },
      python: {
        method: 'models.list_available',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.models.list_available()\nprint(response.models)',
      },
      typescript: {
        method: 'client.models.listAvailable',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.models.listAvailable();\n\nconsole.log(response.models);",
      },
    },
  },
  {
    name: 'check_available',
    endpoint: '/v1/swarms/available',
    httpMethod: 'get',
    summary: 'Check Swarm Types',
    description: 'Check the available swarm types.',
    stainlessPath: '(resource) swarms > (method) check_available',
    qualified: 'client.swarms.checkAvailable',
    response: '{ success?: boolean; swarm_types?: string[]; }',
    markdown:
      "## check_available\n\n`client.swarms.checkAvailable(): { success?: boolean; swarm_types?: string[]; }`\n\n**get** `/v1/swarms/available`\n\nCheck the available swarm types.\n\n### Returns\n\n- `{ success?: boolean; swarm_types?: string[]; }`\n\n  - `success?: boolean`\n  - `swarm_types?: string[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.checkAvailable();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'swarms check_available',
        example: "swarms swarms check-available \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Swarms.CheckAvailable',
        example:
          'SwarmCheckAvailableParams parameters = new();\n\nvar response = await client.Swarms.CheckAvailable(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Swarms.CheckAvailable',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Swarms.CheckAvailable(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Success)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/v1/swarms/available \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'swarms().checkAvailable',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.swarms.SwarmCheckAvailableParams;\nimport com.swarms.api.models.swarms.SwarmCheckAvailableResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        SwarmCheckAvailableResponse response = client.swarms().checkAvailable();\n    }\n}',
      },
      python: {
        method: 'swarms.check_available',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.swarms.check_available()\nprint(response.success)',
      },
      typescript: {
        method: 'client.swarms.checkAvailable',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.swarms.checkAvailable();\n\nconsole.log(response.success);",
      },
    },
  },
  {
    name: 'run',
    endpoint: '/v1/swarm/completions',
    httpMethod: 'post',
    summary: 'Run Swarm',
    description: 'Run a swarm with the specified task. Supports streaming when stream=True.',
    stainlessPath: '(resource) swarms > (method) run',
    qualified: 'client.swarms.run',
    params: [
      'agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[];',
      'description?: string;',
      'heavy_swarm_loops_per_agent?: number;',
      'heavy_swarm_question_agent_model_name?: string;',
      'heavy_swarm_worker_model_name?: string;',
      'img?: string;',
      'max_loops?: number;',
      'messages?: object[] | object;',
      'name?: string;',
      'rearrange_flow?: string;',
      'rules?: string;',
      'service_tier?: string;',
      'stream?: boolean;',
      'swarm_type?: string;',
      'task?: string;',
      'tasks?: string[];',
    ],
    response:
      '{ description: string; execution_time: number; job_id: string; number_of_agents: number; output: object; service_tier: string; status: string; swarm_name: string; swarm_type: string; usage: object; }',
    markdown:
      "## run\n\n`client.swarms.run(agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[], description?: string, heavy_swarm_loops_per_agent?: number, heavy_swarm_question_agent_model_name?: string, heavy_swarm_worker_model_name?: string, img?: string, max_loops?: number, messages?: object[] | object, name?: string, rearrange_flow?: string, rules?: string, service_tier?: string, stream?: boolean, swarm_type?: string, task?: string, tasks?: string[]): { description: string; execution_time: number; job_id: string; number_of_agents: number; output: object; service_tier: string; status: string; swarm_name: string; swarm_type: string; usage: object; }`\n\n**post** `/v1/swarm/completions`\n\nRun a swarm with the specified task. Supports streaming when stream=True.\n\n### Parameters\n\n- `agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]`\n  A list of agents or specifications that define the agents participating in the swarm.\n\n- `description?: string`\n  A comprehensive description of the swarm's objectives, capabilities, and intended outcomes.\n\n- `heavy_swarm_loops_per_agent?: number`\n  The number of loops to run per agent in the heavy swarm.\n\n- `heavy_swarm_question_agent_model_name?: string`\n  The model name to use for the question agent in the heavy swarm.\n\n- `heavy_swarm_worker_model_name?: string`\n  The model name to use for the worker agent in the heavy swarm.\n\n- `img?: string`\n  An optional image URL that may be associated with the swarm's task or representation.\n\n- `max_loops?: number`\n  The maximum number of execution loops allowed for the swarm, enabling repeated processing if needed.\n\n- `messages?: object[] | object`\n  A list of messages that the swarm should complete.\n\n- `name?: string`\n  The name of the swarm, which serves as an identifier for the group of agents and their collective task.\n\n- `rearrange_flow?: string`\n  Instructions on how to rearrange the flow of tasks among agents, if applicable.\n\n- `rules?: string`\n  Guidelines or constraints that govern the behavior and interactions of the agents within the swarm.\n\n- `service_tier?: string`\n  The service tier to use for processing. Options: 'standard' (default) or 'flex' for lower cost but slower processing.\n\n- `stream?: boolean`\n  A flag indicating whether the swarm should stream its output.\n\n- `swarm_type?: string`\n  The classification of the swarm, indicating its operational style and methodology.\n\n- `task?: string`\n  The specific task or objective that the swarm is designed to accomplish.\n\n- `tasks?: string[]`\n  A list of tasks that the swarm should complete.\n\n### Returns\n\n- `{ description: string; execution_time: number; job_id: string; number_of_agents: number; output: object; service_tier: string; status: string; swarm_name: string; swarm_type: string; usage: object; }`\n\n  - `description: string`\n  - `execution_time: number`\n  - `job_id: string`\n  - `number_of_agents: number`\n  - `output: object`\n  - `service_tier: string`\n  - `status: string`\n  - `swarm_name: string`\n  - `swarm_type: string`\n  - `usage: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.run();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'swarms run',
        example: "swarms swarms run \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Swarms.Run',
        example:
          'SwarmRunParams parameters = new();\n\nvar response = await client.Swarms.Run(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Swarms.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Swarms.Run(context.TODO(), swarms.SwarmRunParams{\n\t\tSwarmSpec: swarms.SwarmSpecParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.JobID)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/swarm/completions \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'swarms().run',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.swarms.SwarmRunParams;\nimport com.swarms.api.models.swarms.SwarmRunResponse;\nimport com.swarms.api.models.swarms.SwarmSpec;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        SwarmSpec params = SwarmSpec.builder().build();\n        SwarmRunResponse response = client.swarms().run(params);\n    }\n}',
      },
      python: {
        method: 'swarms.run',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.swarms.run()\nprint(response.job_id)',
      },
      typescript: {
        method: 'client.swarms.run',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.swarms.run();\n\nconsole.log(response.job_id);",
      },
    },
  },
  {
    name: 'get_logs',
    endpoint: '/v1/swarm/logs',
    httpMethod: 'get',
    summary: 'Get Logs',
    description:
      'Get all API request logs for all API keys associated with the user identified by the provided API key, excluding any logs that contain a client_ip field in their data.',
    stainlessPath: '(resource) swarms > (method) get_logs',
    qualified: 'client.swarms.getLogs',
    response: '{ count?: number; logs?: object; status?: string; timestamp?: string; }',
    markdown:
      "## get_logs\n\n`client.swarms.getLogs(): { count?: number; logs?: object; status?: string; timestamp?: string; }`\n\n**get** `/v1/swarm/logs`\n\nGet all API request logs for all API keys associated with the user identified by the provided API key, excluding any logs that contain a client_ip field in their data.\n\n### Returns\n\n- `{ count?: number; logs?: object; status?: string; timestamp?: string; }`\n\n  - `count?: number`\n  - `logs?: object`\n  - `status?: string`\n  - `timestamp?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.getLogs();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'swarms get_logs',
        example: "swarms swarms get-logs \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Swarms.GetLogs',
        example:
          'SwarmGetLogsParams parameters = new();\n\nvar response = await client.Swarms.GetLogs(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Swarms.GetLogs',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Swarms.GetLogs(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Count)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/v1/swarm/logs \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'swarms().getLogs',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.swarms.SwarmGetLogsParams;\nimport com.swarms.api.models.swarms.SwarmGetLogsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        SwarmGetLogsResponse response = client.swarms().getLogs();\n    }\n}',
      },
      python: {
        method: 'swarms.get_logs',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.swarms.get_logs()\nprint(response.count)',
      },
      typescript: {
        method: 'client.swarms.getLogs',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.swarms.getLogs();\n\nconsole.log(response.count);",
      },
    },
  },
  {
    name: 'run',
    endpoint: '/v1/swarm/batch/completions',
    httpMethod: 'post',
    summary: 'Run Batch Completions',
    description: 'Run a batch of swarms with the specified tasks using a thread pool.',
    stainlessPath: '(resource) swarms.batch > (method) run',
    qualified: 'client.swarms.batch.run',
    params: [
      'body: { agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]; description?: string; heavy_swarm_loops_per_agent?: number; heavy_swarm_question_agent_model_name?: string; heavy_swarm_worker_model_name?: string; img?: string; max_loops?: number; messages?: object[] | object; name?: string; rearrange_flow?: string; rules?: string; service_tier?: string; stream?: boolean; swarm_type?: string; task?: string; tasks?: string[]; }[];',
    ],
    response: 'object[]',
    markdown:
      "## run\n\n`client.swarms.batch.run(body: { agents?: agent_spec[]; description?: string; heavy_swarm_loops_per_agent?: number; heavy_swarm_question_agent_model_name?: string; heavy_swarm_worker_model_name?: string; img?: string; max_loops?: number; messages?: object[] | object; name?: string; rearrange_flow?: string; rules?: string; service_tier?: string; stream?: boolean; swarm_type?: string; task?: string; tasks?: string[]; }[]): object[]`\n\n**post** `/v1/swarm/batch/completions`\n\nRun a batch of swarms with the specified tasks using a thread pool.\n\n### Parameters\n\n- `body: { agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]; description?: string; heavy_swarm_loops_per_agent?: number; heavy_swarm_question_agent_model_name?: string; heavy_swarm_worker_model_name?: string; img?: string; max_loops?: number; messages?: object[] | object; name?: string; rearrange_flow?: string; rules?: string; service_tier?: string; stream?: boolean; swarm_type?: string; task?: string; tasks?: string[]; }[]`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.swarms.batch.run({ body: [{}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'batch run',
        example: "swarms swarms:batch run \\\n  --api-key 'My API Key' \\\n  --body '{}'",
      },
      csharp: {
        method: 'Swarms.Batch.Run',
        example:
          'BatchRunParams parameters = new()\n{\n    Body =\n    [\n        new()\n        {\n            Agents =\n            [\n                new()\n                {\n                    AgentName = "agent_name",\n                    AutoGeneratePrompt = true,\n                    Description = "description",\n                    DynamicTemperatureEnabled = true,\n                    LlmArgs = new Dictionary<string, JsonElement>()\n                    {\n                        { "foo", JsonSerializer.SerializeToElement("bar") }\n                    },\n                    MaxLoops = 0,\n                    MaxTokens = 0,\n                    McpConfig = new()\n                    {\n                        AuthorizationToken = "authorization_token",\n                        Headers = new Dictionary<string, string>()\n                        {\n                            { "foo", "string" }\n                        },\n                        Timeout = 0,\n                        ToolConfigurations = new Dictionary<string, JsonElement>(\n\n                        )\n                        {\n                            { "foo", JsonSerializer.SerializeToElement("bar") }\n                        },\n                        Transport = "transport",\n                        Type = "type",\n                        Url = "url",\n                    },\n                    McpConfigs = new(\n\n                        [\n                            new()\n                            {\n                                AuthorizationToken = "authorization_token",\n                                Headers = new Dictionary<string, string>()\n                                {\n                                    { "foo", "string" }\n                                },\n                                Timeout = 0,\n                                ToolConfigurations = new Dictionary<string, JsonElement>(\n\n                                )\n                                {\n                                    { "foo", JsonSerializer.SerializeToElement("bar") },\n                                },\n                                Transport = "transport",\n                                Type = "type",\n                                Url = "url",\n                            },\n                        ]\n                    ),\n                    McpUrl = "mcp_url",\n                    ModelName = "model_name",\n                    ReasoningEffort = "reasoning_effort",\n                    ReasoningEnabled = true,\n                    Role = "role",\n                    StreamingOn = true,\n                    SystemPrompt = "system_prompt",\n                    Temperature = 0,\n                    ThinkingTokens = 0,\n                    ToolCallSummary = true,\n                    ToolsListDictionary =\n                    [\n                        new Dictionary<string, JsonElement>()\n                        {\n                            { "foo", JsonSerializer.SerializeToElement("bar") }\n                        },\n                    ],\n                },\n            ],\n            Description = "description",\n            HeavySwarmLoopsPerAgent = 0,\n            HeavySwarmQuestionAgentModelName = "heavy_swarm_question_agent_model_name",\n            HeavySwarmWorkerModelName = "heavy_swarm_worker_model_name",\n            Img = "img",\n            MaxLoops = 0,\n            Messages = new(\n\n                [\n                    new Dictionary<string, JsonElement>()\n                    {\n                        { "foo", JsonSerializer.SerializeToElement("bar") }\n                    },\n                ]\n            ),\n            Name = "name",\n            RearrangeFlow = "rearrange_flow",\n            Rules = "rules",\n            ServiceTier = "service_tier",\n            Stream = true,\n            SwarmType = SwarmType.AgentRearrange,\n            Task = "task",\n            Tasks =\n            [\n                "string"\n            ],\n        },\n    ],\n};\n\nvar response = await client.Swarms.Batch.Run(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Swarms.Batch.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Swarms.Batch.Run(context.TODO(), swarms.SwarmBatchRunParams{\n\t\tBody: []swarms.SwarmSpecParam{{}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.swarms.world/v1/swarm/batch/completions \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SWARMS_API_KEY" \\\n    -d \'[\n          {\n            "agents": [\n              {\n                "agent_name": "agent_name",\n                "auto_generate_prompt": true,\n                "description": "description",\n                "dynamic_temperature_enabled": true,\n                "llm_args": {\n                  "foo": "bar"\n                },\n                "max_loops": 0,\n                "max_tokens": 0,\n                "mcp_config": {\n                  "authorization_token": "authorization_token",\n                  "headers": {\n                    "foo": "string"\n                  },\n                  "timeout": 0,\n                  "tool_configurations": {\n                    "foo": "bar"\n                  },\n                  "transport": "transport",\n                  "type": "type",\n                  "url": "url"\n                },\n                "mcp_configs": {\n                  "connections": [\n                    {\n                      "authorization_token": "authorization_token",\n                      "headers": {\n                        "foo": "string"\n                      },\n                      "timeout": 0,\n                      "tool_configurations": {\n                        "foo": "bar"\n                      },\n                      "transport": "transport",\n                      "type": "type",\n                      "url": "url"\n                    }\n                  ]\n                },\n                "mcp_url": "mcp_url",\n                "model_name": "model_name",\n                "reasoning_effort": "reasoning_effort",\n                "reasoning_enabled": true,\n                "role": "role",\n                "streaming_on": true,\n                "system_prompt": "system_prompt",\n                "temperature": 0,\n                "thinking_tokens": 0,\n                "tool_call_summary": true,\n                "tools_list_dictionary": [\n                  {\n                    "foo": "bar"\n                  }\n                ]\n              }\n            ],\n            "description": "description",\n            "heavy_swarm_loops_per_agent": 0,\n            "heavy_swarm_question_agent_model_name": "heavy_swarm_question_agent_model_name",\n            "heavy_swarm_worker_model_name": "heavy_swarm_worker_model_name",\n            "img": "img",\n            "max_loops": 0,\n            "messages": [\n              {\n                "foo": "bar"\n              }\n            ],\n            "name": "name",\n            "rearrange_flow": "rearrange_flow",\n            "rules": "rules",\n            "service_tier": "service_tier",\n            "stream": true,\n            "swarm_type": "AgentRearrange",\n            "task": "task",\n            "tasks": [\n              "string"\n            ]\n          }\n        ]\'',
      },
      java: {
        method: 'swarms().batch().run',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.swarms.SwarmSpec;\nimport com.swarms.api.models.swarms.batch.BatchRunParams;\nimport com.swarms.api.models.swarms.batch.BatchRunResponse;\nimport java.util.List;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        List<SwarmSpec> params = List.of(SwarmSpec.builder().build());\n        List<BatchRunResponse> response = client.swarms().batch().run(params);\n    }\n}',
      },
      python: {
        method: 'swarms.batch.run',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.swarms.batch.run(\n    body=[{}],\n)\nprint(response)',
      },
      typescript: {
        method: 'client.swarms.batch.run',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.swarms.batch.run({ body: [{}] });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_completion',
    endpoint: '/v1/reasoning-agent/completions',
    httpMethod: 'post',
    summary: 'Run Reasoning Agent Completions',
    description: 'Run a reasoning agent with the specified task.',
    stainlessPath: '(resource) reasoning_agents > (method) create_completion',
    qualified: 'client.reasoningAgents.createCompletion',
    params: [
      'agent_name?: string;',
      'description?: string;',
      'max_loops?: number;',
      'memory_capacity?: number;',
      'model_name?: string;',
      'num_knowledge_items?: number;',
      'num_samples?: number;',
      'output_type?: string;',
      'swarm_type?: string;',
      'system_prompt?: string;',
      'task?: string;',
    ],
    response: 'object',
    markdown:
      "## create_completion\n\n`client.reasoningAgents.createCompletion(agent_name?: string, description?: string, max_loops?: number, memory_capacity?: number, model_name?: string, num_knowledge_items?: number, num_samples?: number, output_type?: string, swarm_type?: string, system_prompt?: string, task?: string): object`\n\n**post** `/v1/reasoning-agent/completions`\n\nRun a reasoning agent with the specified task.\n\n### Parameters\n\n- `agent_name?: string`\n  The unique name assigned to the reasoning agent.\n\n- `description?: string`\n  A detailed explanation of the reasoning agent's purpose and capabilities.\n\n- `max_loops?: number`\n  The maximum number of times the reasoning agent is allowed to repeat its task.\n\n- `memory_capacity?: number`\n  The memory capacity for the reasoning agent.\n\n- `model_name?: string`\n  The name of the AI model that the reasoning agent will utilize.\n\n- `num_knowledge_items?: number`\n  The number of knowledge items to use for the reasoning agent.\n\n- `num_samples?: number`\n  The number of samples to generate for the reasoning agent.\n\n- `output_type?: string`\n  The type of output format for the reasoning agent.\n\n- `swarm_type?: string`\n  The type of reasoning swarm to use (e.g., reasoning duo, self-consistency, IRE).\n\n- `system_prompt?: string`\n  The initial instruction or context provided to the reasoning agent.\n\n- `task?: string`\n  The task to be completed by the reasoning agent.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.reasoningAgents.createCompletion();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'reasoning_agents create_completion',
        example: "swarms reasoning-agents create-completion \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'ReasoningAgents.CreateCompletion',
        example:
          'ReasoningAgentCreateCompletionParams parameters = new();\n\nvar response = await client.ReasoningAgents.CreateCompletion(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.ReasoningAgents.NewCompletion',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.ReasoningAgents.NewCompletion(context.TODO(), swarms.ReasoningAgentNewCompletionParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/reasoning-agent/completions \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'reasoningAgents().createCompletion',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.reasoningagents.ReasoningAgentCreateCompletionParams;\nimport com.swarms.api.models.reasoningagents.ReasoningAgentCreateCompletionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        ReasoningAgentCreateCompletionResponse response = client.reasoningAgents().createCompletion();\n    }\n}',
      },
      python: {
        method: 'reasoning_agents.create_completion',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reasoning_agents.create_completion()\nprint(response)',
      },
      typescript: {
        method: 'client.reasoningAgents.createCompletion',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reasoningAgents.createCompletion();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_types',
    endpoint: '/v1/reasoning-agent/types',
    httpMethod: 'get',
    summary: 'Get Reasoning Agent Types',
    description: 'Get the types of reasoning agents available.',
    stainlessPath: '(resource) reasoning_agents > (method) list_types',
    qualified: 'client.reasoningAgents.listTypes',
    response: 'object',
    markdown:
      "## list_types\n\n`client.reasoningAgents.listTypes(): object`\n\n**get** `/v1/reasoning-agent/types`\n\nGet the types of reasoning agents available.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.reasoningAgents.listTypes();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'reasoning_agents list_types',
        example: "swarms reasoning-agents list-types \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'ReasoningAgents.ListTypes',
        example:
          'ReasoningAgentListTypesParams parameters = new();\n\nvar response = await client.ReasoningAgents.ListTypes(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.ReasoningAgents.ListTypes',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.ReasoningAgents.ListTypes(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.swarms.world/v1/reasoning-agent/types \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'reasoningAgents().listTypes',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.reasoningagents.ReasoningAgentListTypesParams;\nimport com.swarms.api.models.reasoningagents.ReasoningAgentListTypesResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        ReasoningAgentListTypesResponse response = client.reasoningAgents().listTypes();\n    }\n}',
      },
      python: {
        method: 'reasoning_agents.list_types',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reasoning_agents.list_types()\nprint(response)',
      },
      typescript: {
        method: 'client.reasoningAgents.listTypes',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reasoningAgents.listTypes();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_limits',
    endpoint: '/v1/rate/limits',
    httpMethod: 'get',
    summary: 'Get Rate Limits',
    description: 'Get the rate limits and current usage for the user associated with the provided API key.',
    stainlessPath: '(resource) client.rate > (method) get_limits',
    qualified: 'client.client.rate.getLimits',
    response:
      '{ limits: { maximum_requests_per_day: number; maximum_requests_per_hour: number; maximum_requests_per_minute: number; tokens_per_agent: number; }; rate_limits: { day: object; hour: object; minute: object; }; tier: string; timestamp: string; success?: boolean; }',
    markdown:
      "## get_limits\n\n`client.client.rate.getLimits(): { limits: object; rate_limits: object; tier: string; timestamp: string; success?: boolean; }`\n\n**get** `/v1/rate/limits`\n\nGet the rate limits and current usage for the user associated with the provided API key.\n\n### Returns\n\n- `{ limits: { maximum_requests_per_day: number; maximum_requests_per_hour: number; maximum_requests_per_minute: number; tokens_per_agent: number; }; rate_limits: { day: object; hour: object; minute: object; }; tier: string; timestamp: string; success?: boolean; }`\n\n  - `limits: { maximum_requests_per_day: number; maximum_requests_per_hour: number; maximum_requests_per_minute: number; tokens_per_agent: number; }`\n  - `rate_limits: { day: { count: number; exceeded: boolean; limit: number; remaining: number; reset_time: string; }; hour: { count: number; exceeded: boolean; limit: number; remaining: number; reset_time: string; }; minute: { count: number; exceeded: boolean; limit: number; remaining: number; reset_time: string; }; }`\n  - `tier: string`\n  - `timestamp: string`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.rate.getLimits();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'rate get_limits',
        example: "swarms client:rate get-limits \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.Rate.GetLimits',
        example:
          'RateGetLimitsParams parameters = new();\n\nvar response = await client.Client.Rate.GetLimits(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.Rate.GetLimits',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.Rate.GetLimits(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Limits)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/v1/rate/limits \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'client().rate().getLimits',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.rate.RateGetLimitsParams;\nimport com.swarms.api.models.client.rate.RateGetLimitsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        RateGetLimitsResponse response = client.client().rate().getLimits();\n    }\n}',
      },
      python: {
        method: 'client.rate.get_limits',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.rate.get_limits()\nprint(response.limits)',
      },
      typescript: {
        method: 'client.client.rate.getLimits',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.rate.getLimits();\n\nconsole.log(response.limits);",
      },
    },
  },
  {
    name: 'create_completion',
    endpoint: '/v1/auto-swarm-builder/completions',
    httpMethod: 'post',
    summary: 'Auto-Generate Agent Swarm',
    description:
      'Generate and orchestrate agent swarms autonomously using AI-powered swarm composition and task decomposition.',
    stainlessPath: '(resource) client.auto_swarm_builder > (method) create_completion',
    qualified: 'client.client.autoSwarmBuilder.createCompletion',
    params: [
      'description?: string;',
      "execution_type?: 'return-agents' | 'return-swarm-router-config' | 'return-agents-objects';",
      'max_loops?: number;',
      'max_tokens?: number;',
      'model_name?: string;',
      'name?: string;',
      'task?: string;',
    ],
    response:
      '{ success: boolean; job_id?: string; outputs?: object; timestamp?: string; type?: string; usage?: object; }',
    markdown:
      "## create_completion\n\n`client.client.autoSwarmBuilder.createCompletion(description?: string, execution_type?: 'return-agents' | 'return-swarm-router-config' | 'return-agents-objects', max_loops?: number, max_tokens?: number, model_name?: string, name?: string, task?: string): { success: boolean; job_id?: string; outputs?: object; timestamp?: string; type?: string; usage?: object; }`\n\n**post** `/v1/auto-swarm-builder/completions`\n\nGenerate and orchestrate agent swarms autonomously using AI-powered swarm composition and task decomposition.\n\n### Parameters\n\n- `description?: string`\n  A description of the swarm.\n\n- `execution_type?: 'return-agents' | 'return-swarm-router-config' | 'return-agents-objects'`\n  The type of execution to perform.\n\n- `max_loops?: number`\n  Maximum number of loops to run.\n\n- `max_tokens?: number`\n  The maximum number of tokens to use for the swarm.\n\n- `model_name?: string`\n  The model name to use for the swarm.\n\n- `name?: string`\n  The name of the swarm.\n\n- `task?: string`\n  The task for the swarm, if any.\n\n### Returns\n\n- `{ success: boolean; job_id?: string; outputs?: object; timestamp?: string; type?: string; usage?: object; }`\n  Schema for the Auto Swarm Builder API response.\n\nAttributes:\n    success (bool): Whether the swarm was built successfully.\n    job_id (Optional[str]): The job ID of the swarm.\n    outputs (Optional[dict]): The outputs of the auto swarms builder.\n    type (Optional[str]): The type of the swarm execution.\n    timestamp (Optional[str]): The timestamp of the swarm execution.\n    usage (Optional[dict]): The usage statistics of the swarm execution.\n\n  - `success: boolean`\n  - `job_id?: string`\n  - `outputs?: object`\n  - `timestamp?: string`\n  - `type?: string`\n  - `usage?: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.autoSwarmBuilder.createCompletion();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'auto_swarm_builder create_completion',
        example: "swarms client:auto-swarm-builder create-completion \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.AutoSwarmBuilder.CreateCompletion',
        example:
          'AutoSwarmBuilderCreateCompletionParams parameters = new();\n\nvar response = await client.Client.AutoSwarmBuilder.CreateCompletion(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.AutoSwarmBuilder.NewCompletion',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.AutoSwarmBuilder.NewCompletion(context.TODO(), swarms.ClientAutoSwarmBuilderNewCompletionParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.JobID)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/auto-swarm-builder/completions \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'client().autoSwarmBuilder().createCompletion',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.autoswarmbuilder.AutoSwarmBuilderCreateCompletionParams;\nimport com.swarms.api.models.client.autoswarmbuilder.AutoSwarmBuilderCreateCompletionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        AutoSwarmBuilderCreateCompletionResponse response = client.client().autoSwarmBuilder().createCompletion();\n    }\n}',
      },
      python: {
        method: 'client.auto_swarm_builder.create_completion',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.auto_swarm_builder.create_completion()\nprint(response.job_id)',
      },
      typescript: {
        method: 'client.client.autoSwarmBuilder.createCompletion',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.autoSwarmBuilder.createCompletion();\n\nconsole.log(response.job_id);",
      },
    },
  },
  {
    name: 'list_execution_types',
    endpoint: '/v1/auto-swarm-builder/execution-types',
    httpMethod: 'get',
    summary: 'Get Auto Swarm Builder Execution Types',
    description:
      'Retrieve all available execution types and return formats for the Auto Swarm Builder endpoint.',
    stainlessPath: '(resource) client.auto_swarm_builder > (method) list_execution_types',
    qualified: 'client.client.autoSwarmBuilder.listExecutionTypes',
    response: 'string[]',
    markdown:
      "## list_execution_types\n\n`client.client.autoSwarmBuilder.listExecutionTypes(): string[]`\n\n**get** `/v1/auto-swarm-builder/execution-types`\n\nRetrieve all available execution types and return formats for the Auto Swarm Builder endpoint.\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.autoSwarmBuilder.listExecutionTypes();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'auto_swarm_builder list_execution_types',
        example: "swarms client:auto-swarm-builder list-execution-types \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.AutoSwarmBuilder.ListExecutionTypes',
        example:
          'AutoSwarmBuilderListExecutionTypesParams parameters = new();\n\nvar response = await client.Client.AutoSwarmBuilder.ListExecutionTypes(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.AutoSwarmBuilder.ListExecutionTypes',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.AutoSwarmBuilder.ListExecutionTypes(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.swarms.world/v1/auto-swarm-builder/execution-types \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'client().autoSwarmBuilder().listExecutionTypes',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.autoswarmbuilder.AutoSwarmBuilderListExecutionTypesParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        List<String> response = client.client().autoSwarmBuilder().listExecutionTypes();\n    }\n}',
      },
      python: {
        method: 'client.auto_swarm_builder.list_execution_types',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.auto_swarm_builder.list_execution_types()\nprint(response)',
      },
      typescript: {
        method: 'client.client.autoSwarmBuilder.listExecutionTypes',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.autoSwarmBuilder.listExecutionTypes();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_completion',
    endpoint: '/v1/advanced-research/completions',
    httpMethod: 'post',
    summary: 'Execute Advanced Research Session',
    description:
      'Execute comprehensive research sessions with multi-source data collection, analysis, and synthesis capabilities.',
    stainlessPath: '(resource) client.advanced_research > (method) create_completion',
    qualified: 'client.client.advancedResearch.createCompletion',
    params: [
      'config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; };',
      'task: string;',
      'img?: string;',
    ],
    response:
      '{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }',
    markdown:
      "## create_completion\n\n`client.client.advancedResearch.createCompletion(config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }, task: string, img?: string): { id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }`\n\n**post** `/v1/advanced-research/completions`\n\nExecute comprehensive research sessions with multi-source data collection, analysis, and synthesis capabilities.\n\n### Parameters\n\n- `config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }`\n  The configuration for the advanced research\n  - `description?: string`\n    Description of the advanced research session\n  - `director_agent_name?: string`\n    Name of the director agent\n  - `director_max_loops?: number`\n    Maximum loops for the director agent\n  - `director_max_tokens?: number`\n    Maximum tokens for the director agent's output\n  - `director_model_name?: string`\n    Model name for the director agent\n  - `exa_search_max_characters?: number`\n    Maximum characters to return from the Exa search tool\n  - `exa_search_num_results?: number`\n    Number of results to return from the Exa search tool\n  - `max_loops?: number`\n    Number of research loops to run\n  - `name?: string`\n    Name of the advanced research session\n  - `worker_model_name?: string`\n    Model name for worker agents\n\n- `task: string`\n  The task to be completed\n\n- `img?: string`\n  The image to be used for the advanced research\n\n### Returns\n\n- `{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }`\n\n  - `id: string`\n  - `characters_per_source: number`\n  - `description: string`\n  - `name: string`\n  - `outputs: object`\n  - `sources: number`\n  - `timestamp: string`\n  - `usage: object`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.advancedResearch.createCompletion({\n  config: {},\n  task: 'task',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'advanced_research create_completion',
        example:
          "swarms client:advanced-research create-completion \\\n  --api-key 'My API Key' \\\n  --config '{}' \\\n  --task task",
      },
      csharp: {
        method: 'Client.AdvancedResearch.CreateCompletion',
        example:
          'AdvancedResearchCreateCompletionParams parameters = new()\n{\n    Config = new()\n    {\n        Description = "description",\n        DirectorAgentName = "director_agent_name",\n        DirectorMaxLoops = 0,\n        DirectorMaxTokens = 0,\n        DirectorModelName = "director_model_name",\n        ExaSearchMaxCharacters = 0,\n        ExaSearchNumResults = 0,\n        MaxLoops = 0,\n        Name = "name",\n        WorkerModelName = "worker_model_name",\n    },\n    Task = "task",\n};\n\nvar response = await client.Client.AdvancedResearch.CreateCompletion(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.AdvancedResearch.NewCompletion',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.AdvancedResearch.NewCompletion(context.TODO(), swarms.ClientAdvancedResearchNewCompletionParams{\n\t\tConfig: swarms.ClientAdvancedResearchNewCompletionParamsConfig{},\n\t\tTask:   swarms.String("task"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.swarms.world/v1/advanced-research/completions \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SWARMS_API_KEY" \\\n    -d \'{\n          "config": {},\n          "task": "task"\n        }\'',
      },
      java: {
        method: 'client().advancedResearch().createCompletion',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.advancedresearch.AdvancedResearchCreateCompletionParams;\nimport com.swarms.api.models.client.advancedresearch.AdvancedResearchCreateCompletionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        AdvancedResearchCreateCompletionParams params = AdvancedResearchCreateCompletionParams.builder()\n            .config(AdvancedResearchCreateCompletionParams.Config.builder().build())\n            .task("task")\n            .build();\n        AdvancedResearchCreateCompletionResponse response = client.client().advancedResearch().createCompletion(params);\n    }\n}',
      },
      python: {
        method: 'client.advanced_research.create_completion',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.advanced_research.create_completion(\n    config={},\n    task="task",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.client.advancedResearch.createCompletion',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.advancedResearch.createCompletion({\n  config: {},\n  task: 'task',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'create_completion',
    endpoint: '/v1/advanced-research/batch/completions',
    httpMethod: 'post',
    summary: 'Execute Batch of Research Sessions',
    description:
      'Execute multiple advanced research sessions concurrently with independent configurations for high-throughput research workflows.',
    stainlessPath: '(resource) client.advanced_research.batch > (method) create_completion',
    qualified: 'client.client.advancedResearch.batch.createCompletion',
    params: [
      'input_schemas: { config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }; task: string; img?: string; }[];',
    ],
    response:
      '{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }[]',
    markdown:
      "## create_completion\n\n`client.client.advancedResearch.batch.createCompletion(input_schemas: { config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }; task: string; img?: string; }[]): { id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }[]`\n\n**post** `/v1/advanced-research/batch/completions`\n\nExecute multiple advanced research sessions concurrently with independent configurations for high-throughput research workflows.\n\n### Parameters\n\n- `input_schemas: { config: { description?: string; director_agent_name?: string; director_max_loops?: number; director_max_tokens?: number; director_model_name?: string; exa_search_max_characters?: number; exa_search_num_results?: number; max_loops?: number; name?: string; worker_model_name?: string; }; task: string; img?: string; }[]`\n  The input schemas for the advanced research\n\n### Returns\n\n- `{ id: string; characters_per_source: number; description: string; name: string; outputs: object; sources: number; timestamp: string; usage: object; }[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.advancedResearch.batch.createCompletion({ input_schemas: [{\n  config: {},\n  task: 'task',\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'batch create_completion',
        example:
          "swarms client:advanced-research:batch create-completion \\\n  --api-key 'My API Key' \\\n  --input-schema '{config: {}, task: task}'",
      },
      csharp: {
        method: 'Client.AdvancedResearch.Batch.CreateCompletion',
        example:
          'BatchCreateCompletionParams parameters = new()\n{\n    InputSchemas =\n    [\n        new()\n        {\n            Config = new()\n            {\n                Description = "description",\n                DirectorAgentName = "director_agent_name",\n                DirectorMaxLoops = 0,\n                DirectorMaxTokens = 0,\n                DirectorModelName = "director_model_name",\n                ExaSearchMaxCharacters = 0,\n                ExaSearchNumResults = 0,\n                MaxLoops = 0,\n                Name = "name",\n                WorkerModelName = "worker_model_name",\n            },\n            Task = "task",\n            Img = "img",\n        },\n    ],\n};\n\nvar response = await client.Client.AdvancedResearch.Batch.CreateCompletion(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.AdvancedResearch.Batch.NewCompletion',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.AdvancedResearch.Batch.NewCompletion(context.TODO(), swarms.ClientAdvancedResearchBatchNewCompletionParams{\n\t\tInputSchemas: []swarms.ClientAdvancedResearchBatchNewCompletionParamsInputSchema{{\n\t\t\tConfig: swarms.ClientAdvancedResearchBatchNewCompletionParamsInputSchemaConfig{},\n\t\t\tTask:   swarms.String("task"),\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.swarms.world/v1/advanced-research/batch/completions \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SWARMS_API_KEY" \\\n    -d \'{\n          "input_schemas": [\n            {\n              "config": {},\n              "task": "task"\n            }\n          ]\n        }\'',
      },
      java: {
        method: 'client().advancedResearch().batch().createCompletion',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.advancedresearch.batch.BatchCreateCompletionParams;\nimport com.swarms.api.models.client.advancedresearch.batch.BatchCreateCompletionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        BatchCreateCompletionParams params = BatchCreateCompletionParams.builder()\n            .addInputSchema(BatchCreateCompletionParams.InputSchema.builder()\n                .config(BatchCreateCompletionParams.InputSchema.Config.builder().build())\n                .task("task")\n                .build())\n            .build();\n        List<BatchCreateCompletionResponse> response = client.client().advancedResearch().batch().createCompletion(params);\n    }\n}',
      },
      python: {
        method: 'client.advanced_research.batch.create_completion',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.advanced_research.batch.create_completion(\n    input_schemas=[{\n        "config": {},\n        "task": "task",\n    }],\n)\nprint(response)',
      },
      typescript: {
        method: 'client.client.advancedResearch.batch.createCompletion',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.advancedResearch.batch.createCompletion({\n  input_schemas: [\n    {\n      config: {},\n      task: 'task',\n    },\n  ],\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_available',
    endpoint: '/v1/tools/available',
    httpMethod: 'get',
    summary: 'Get Available API Tools',
    description:
      'Retrieve comprehensive information about all available tools and capabilities supported by the Swarms API.',
    stainlessPath: '(resource) client.tools > (method) list_available',
    qualified: 'client.client.tools.listAvailable',
    response: '{ status?: string; tools?: string[]; }',
    markdown:
      "## list_available\n\n`client.client.tools.listAvailable(): { status?: string; tools?: string[]; }`\n\n**get** `/v1/tools/available`\n\nRetrieve comprehensive information about all available tools and capabilities supported by the Swarms API.\n\n### Returns\n\n- `{ status?: string; tools?: string[]; }`\n\n  - `status?: string`\n  - `tools?: string[]`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.tools.listAvailable();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'tools list_available',
        example: "swarms client:tools list-available \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.Tools.ListAvailable',
        example:
          'ToolListAvailableParams parameters = new();\n\nvar response = await client.Client.Tools.ListAvailable(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.Tools.ListAvailable',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.Tools.ListAvailable(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      http: {
        example: 'curl https://api.swarms.world/v1/tools/available \\\n    -H "x-api-key: $SWARMS_API_KEY"',
      },
      java: {
        method: 'client().tools().listAvailable',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.tools.ToolListAvailableParams;\nimport com.swarms.api.models.client.tools.ToolListAvailableResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        ToolListAvailableResponse response = client.client().tools().listAvailable();\n    }\n}',
      },
      python: {
        method: 'client.tools.list_available',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.tools.list_available()\nprint(response.status)',
      },
      typescript: {
        method: 'client.client.tools.listAvailable',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.tools.listAvailable();\n\nconsole.log(response.status);",
      },
    },
  },
  {
    name: 'create_agent',
    endpoint: '/v1/marketplace/agents',
    httpMethod: 'post',
    summary: 'Get Marketplace Agents',
    description: 'Retrieve free agents from the marketplace.',
    stainlessPath: '(resource) client.marketplace > (method) create_agent',
    qualified: 'client.client.marketplace.createAgent',
    params: ['number_of_items?: number;'],
    response:
      '{ prompts: { id: string; created_at: string; user_id: string; category?: string | string[]; description?: string; links?: object[] | string[]; name?: string; prompt?: string; status?: string; tags?: string; use_cases?: object | object[]; }[]; total_count: number; status?: string; timestamp?: string; }',
    markdown:
      "## create_agent\n\n`client.client.marketplace.createAgent(number_of_items?: number): { prompts: object[]; total_count: number; status?: string; timestamp?: string; }`\n\n**post** `/v1/marketplace/agents`\n\nRetrieve free agents from the marketplace.\n\n### Parameters\n\n- `number_of_items?: number`\n  Number of items to return\n\n### Returns\n\n- `{ prompts: { id: string; created_at: string; user_id: string; category?: string | string[]; description?: string; links?: object[] | string[]; name?: string; prompt?: string; status?: string; tags?: string; use_cases?: object | object[]; }[]; total_count: number; status?: string; timestamp?: string; }`\n  Response schema for marketplace prompts endpoint.\n\n  - `prompts: { id: string; created_at: string; user_id: string; category?: string | string[]; description?: string; links?: object[] | string[]; name?: string; prompt?: string; status?: string; tags?: string; use_cases?: object | object[]; }[]`\n  - `total_count: number`\n  - `status?: string`\n  - `timestamp?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.marketplace.createAgent();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'marketplace create_agent',
        example: "swarms client:marketplace create-agent \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.Marketplace.CreateAgent',
        example:
          'MarketplaceCreateAgentParams parameters = new();\n\nvar response = await client.Client.Marketplace.CreateAgent(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.Marketplace.NewAgent',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.Marketplace.NewAgent(context.TODO(), swarms.ClientMarketplaceNewAgentParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Prompts)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/marketplace/agents \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'client().marketplace().createAgent',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.marketplace.MarketplaceCreateAgentParams;\nimport com.swarms.api.models.client.marketplace.MarketplaceCreateAgentResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        MarketplaceCreateAgentResponse response = client.client().marketplace().createAgent();\n    }\n}',
      },
      python: {
        method: 'client.marketplace.create_agent',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.marketplace.create_agent()\nprint(response.prompts)',
      },
      typescript: {
        method: 'client.client.marketplace.createAgent',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.marketplace.createAgent();\n\nconsole.log(response.prompts);",
      },
    },
  },
  {
    name: 'complete_workflow',
    endpoint: '/v1/batched-grid-workflow/completions',
    httpMethod: 'post',
    summary: 'Complete Batched Grid Workflow',
    description:
      'Complete a batched grid workflow with the specified input data. Enables you to run a grid workflow with multiple agents and tasks in a single request.',
    stainlessPath: '(resource) client.batched_grid_workflow > (method) complete_workflow',
    qualified: 'client.client.batchedGridWorkflow.completeWorkflow',
    params: [
      'agent_completions?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[];',
      'description?: string;',
      'imgs?: string[];',
      'max_loops?: number;',
      'name?: string;',
      'tasks?: string[];',
    ],
    response:
      '{ description: string; job_id: string; name: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; }',
    markdown:
      "## complete_workflow\n\n`client.client.batchedGridWorkflow.completeWorkflow(agent_completions?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[], description?: string, imgs?: string[], max_loops?: number, name?: string, tasks?: string[]): { description: string; job_id: string; name: string; outputs: object; status: string; timestamp: string; usage: object; }`\n\n**post** `/v1/batched-grid-workflow/completions`\n\nComplete a batched grid workflow with the specified input data. Enables you to run a grid workflow with multiple agents and tasks in a single request.\n\n### Parameters\n\n- `agent_completions?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]`\n  The agent completions to be completed by the batched grid workflow.\n\n- `description?: string`\n  The description of the batched grid workflow.\n\n- `imgs?: string[]`\n  The images to be used by the batched grid workflow.\n\n- `max_loops?: number`\n  The maximum number of loops to be completed by the batched grid workflow.\n\n- `name?: string`\n  The name of the batched grid workflow.\n\n- `tasks?: string[]`\n  The tasks to be completed by the batched grid workflow.\n\n### Returns\n\n- `{ description: string; job_id: string; name: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; }`\n\n  - `description: string`\n  - `job_id: string`\n  - `name: string`\n  - `outputs: object`\n  - `status: string`\n  - `timestamp: string`\n  - `usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.batchedGridWorkflow.completeWorkflow();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'batched_grid_workflow complete_workflow',
        example: "swarms client:batched-grid-workflow complete-workflow \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.BatchedGridWorkflow.CompleteWorkflow',
        example:
          'BatchedGridWorkflowCompleteWorkflowParams parameters = new();\n\nvar response = await client.Client.BatchedGridWorkflow.CompleteWorkflow(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.BatchedGridWorkflow.CompleteWorkflow',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.BatchedGridWorkflow.CompleteWorkflow(context.TODO(), swarms.ClientBatchedGridWorkflowCompleteWorkflowParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.JobID)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/batched-grid-workflow/completions \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'client().batchedGridWorkflow().completeWorkflow',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.batchedgridworkflow.BatchedGridWorkflowCompleteWorkflowParams;\nimport com.swarms.api.models.client.batchedgridworkflow.BatchedGridWorkflowCompleteWorkflowResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        BatchedGridWorkflowCompleteWorkflowResponse response = client.client().batchedGridWorkflow().completeWorkflow();\n    }\n}',
      },
      python: {
        method: 'client.batched_grid_workflow.complete_workflow',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.batched_grid_workflow.complete_workflow()\nprint(response.job_id)',
      },
      typescript: {
        method: 'client.client.batchedGridWorkflow.completeWorkflow',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.batchedGridWorkflow.completeWorkflow();\n\nconsole.log(response.job_id);",
      },
    },
  },
  {
    name: 'execute_workflow',
    endpoint: '/v1/graph-workflow/completions',
    httpMethod: 'post',
    summary: 'Execute Graph Workflow',
    description:
      'Execute a graph workflow with directed agent nodes and edges. Enables complex multi-agent collaboration with parallel execution, automatic compilation, and comprehensive workflow orchestration.',
    stainlessPath: '(resource) client.graph_workflow > (method) execute_workflow',
    qualified: 'client.client.graphWorkflow.executeWorkflow',
    params: [
      'agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[];',
      'auto_compile?: boolean;',
      'description?: string;',
      'edges?: { source: string; target: string; metadata?: object; } | object[];',
      'end_points?: string[];',
      'entry_points?: string[];',
      'img?: string;',
      'max_loops?: number;',
      'name?: string;',
      'task?: string;',
      'verbose?: boolean;',
    ],
    response:
      '{ job_id: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; description?: string; name?: string; }',
    markdown:
      "## execute_workflow\n\n`client.client.graphWorkflow.executeWorkflow(agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: mcp_connection; mcp_configs?: object; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[], auto_compile?: boolean, description?: string, edges?: { source: string; target: string; metadata?: object; } | object[], end_points?: string[], entry_points?: string[], img?: string, max_loops?: number, name?: string, task?: string, verbose?: boolean): { job_id: string; outputs: object; status: string; timestamp: string; usage: object; description?: string; name?: string; }`\n\n**post** `/v1/graph-workflow/completions`\n\nExecute a graph workflow with directed agent nodes and edges. Enables complex multi-agent collaboration with parallel execution, automatic compilation, and comprehensive workflow orchestration.\n\n### Parameters\n\n- `agents?: { agent_name: string; auto_generate_prompt?: boolean; description?: string; dynamic_temperature_enabled?: boolean; llm_args?: object; max_loops?: number; max_tokens?: number; mcp_config?: { authorization_token?: string; headers?: object; timeout?: number; tool_configurations?: object; transport?: string; type?: string; url?: string; }; mcp_configs?: { connections: object[]; }; mcp_url?: string; model_name?: string; reasoning_effort?: string; reasoning_enabled?: boolean; role?: string; streaming_on?: boolean; system_prompt?: string; temperature?: number; thinking_tokens?: number; tool_call_summary?: boolean; tools_list_dictionary?: object[]; }[]`\n  List of agent specifications to be used as nodes in the workflow graph.\n\n- `auto_compile?: boolean`\n  Whether to automatically compile the workflow for optimization.\n\n- `description?: string`\n  The description of the graph workflow.\n\n- `edges?: { source: string; target: string; metadata?: object; } | object[]`\n  List of edges connecting nodes. Can be EdgeSpec objects or dictionaries with 'source' and 'target' keys.\n\n- `end_points?: string[]`\n  List of node IDs that serve as ending points for the workflow.\n\n- `entry_points?: string[]`\n  List of node IDs that serve as starting points for the workflow.\n\n- `img?: string`\n  Optional image path for vision-enabled agents.\n\n- `max_loops?: number`\n  The maximum number of execution loops for the workflow.\n\n- `name?: string`\n  The name of the graph workflow.\n\n- `task?: string`\n  The task to be executed by the workflow.\n\n- `verbose?: boolean`\n  Whether to enable detailed logging.\n\n### Returns\n\n- `{ job_id: string; outputs: object; status: string; timestamp: string; usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }; description?: string; name?: string; }`\n  Output schema for GraphWorkflow completion responses.\n\n  - `job_id: string`\n  - `outputs: object`\n  - `status: string`\n  - `timestamp: string`\n  - `usage: { cost_per_agent: number; input_tokens: number; output_tokens: number; token_cost: number; total_tokens: number; }`\n  - `description?: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient();\n\nconst response = await client.client.graphWorkflow.executeWorkflow();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'graph_workflow execute_workflow',
        example: "swarms client:graph-workflow execute-workflow \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Client.GraphWorkflow.ExecuteWorkflow',
        example:
          'GraphWorkflowExecuteWorkflowParams parameters = new();\n\nvar response = await client.Client.GraphWorkflow.ExecuteWorkflow(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Client.GraphWorkflow.ExecuteWorkflow',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Client.GraphWorkflow.ExecuteWorkflow(context.TODO(), swarms.ClientGraphWorkflowExecuteWorkflowParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.JobID)\n}\n',
      },
      http: {
        example:
          "curl https://api.swarms.world/v1/graph-workflow/completions \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $SWARMS_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'client().graphWorkflow().executeWorkflow',
        example:
          'package com.swarms.api.example;\n\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.client.graphworkflow.GraphWorkflowExecuteWorkflowParams;\nimport com.swarms.api.models.client.graphworkflow.GraphWorkflowExecuteWorkflowResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        SwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\n        GraphWorkflowExecuteWorkflowResponse response = client.client().graphWorkflow().executeWorkflow();\n    }\n}',
      },
      python: {
        method: 'client.graph_workflow.execute_workflow',
        example:
          'import os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.client.graph_workflow.execute_workflow()\nprint(response.job_id)',
      },
      typescript: {
        method: 'client.client.graphWorkflow.executeWorkflow',
        example:
          "import SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.client.graphWorkflow.executeWorkflow();\n\nconsole.log(response.job_id);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Swarms Client CLI\n\nThe official CLI for the [Swarms Client REST API](https://docs.swarms.ai).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stainless-sdks/swarms-cli/cmd/swarms@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nswarms [resource] <command> [flags...]\n~~~\n\n~~~sh\nswarms get-root \\\n  --api-key 'My API Key'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required | Default value |\n| -------------------- | -------- | ------------- |\n| `SWARMS_API_KEY`     | no       | `null`        |\n\n### Global flags\n\n- `--api-key` (can also be set with `SWARMS_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nswarms <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nswarms <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nswarms <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nswarms <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nswarms <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Swarms Client Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/swarms-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../swarms-go`.\n",
  },
  {
    language: 'csharp',
    content:
      '# Swarms Client C# API Library\n\nThe Swarms Client C# SDK provides convenient access to the [Swarms Client REST API](https://docs.swarms.ai) from applications written in   C#.\n\n## Installation\n\nInstall the package from [NuGet](https://www.nuget.org/packages/Swarms):\n\n```bash\ndotnet add package Swarms\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nSwarmsClientClient client = new();\n\nClientGetRootParams parameters = new();\n\nvar response = await client.GetRoot(parameters);\n\nConsole.WriteLine(response);\n```',
  },
  {
    language: 'go',
    content:
      '# Swarms Client Go API Library\n\n<a href="https://pkg.go.dev/github.com/The-Swarm-Corporation/swarms-client-go"><img src="https://pkg.go.dev/badge/github.com/The-Swarm-Corporation/swarms-client-go.svg" alt="Go Reference"></a>\n\nThe Swarms Client Go library provides convenient access to the [Swarms Client REST API](https://docs.swarms.ai)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Swarms Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=swarms-ts-mcp&config=eyJuYW1lIjoic3dhcm1zLXRzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N3YXJtcy5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22swarms-ts-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fswarms.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/The-Swarm-Corporation/swarms-client-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/The-Swarm-Corporation/swarms-client-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/The-Swarm-Corporation/swarms-client-go"\n\t"github.com/The-Swarm-Corporation/swarms-client-go/option"\n)\n\nfunc main() {\n\tclient := swarms.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("SWARMS_API_KEY")\n\t)\n\tresponse, err := client.GetRoot(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.GetRoot(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/The-Swarm-Corporation/swarms-client-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.GetRoot(context.TODO())\nif err != nil {\n\tvar apierr *swarms.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.GetRoot(\n\tctx,\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := swarms.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.GetRoot(context.TODO(), option.WithMaxRetries(5))\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.GetRoot(context.TODO(), option.WithResponseInto(&response))\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/The-Swarm-Corporation/swarms-client-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Swarms Client Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.swarms.api/swarms-client-java)](https://central.sonatype.com/artifact/com.swarms.api/swarms-client-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.swarms.api/swarms-client-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.swarms.api/swarms-client-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Swarms Client Java SDK provides convenient access to the [Swarms Client REST API](https://docs.swarms.ai)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Swarms Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=swarms-ts-mcp&config=eyJuYW1lIjoic3dhcm1zLXRzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N3YXJtcy5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22swarms-ts-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fswarms.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [docs.swarms.ai](https://docs.swarms.ai). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.swarms.api/swarms-client-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.swarms.api:swarms-client-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.swarms.api</groupId>\n  <artifactId>swarms-client-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.ClientGetRootParams;\nimport com.swarms.api.models.ClientGetRootResponse;\n\n// Configures using the `swarmsclient.swarmsApiKey` and `swarmsclient.baseUrl` system properties\n// Or configures using the `SWARMS_API_KEY` and `SWARMS_CLIENT_BASE_URL` environment variables\nSwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\nClientGetRootResponse response = client.getRoot();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\n\n// Configures using the `swarmsclient.swarmsApiKey` and `swarmsclient.baseUrl` system properties\n// Or configures using the `SWARMS_API_KEY` and `SWARMS_CLIENT_BASE_URL` environment variables\nSwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    // Configures using the `swarmsclient.swarmsApiKey` and `swarmsclient.baseUrl` system properties\n    // Or configures using the `SWARMS_API_KEY` and `SWARMS_CLIENT_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property             | Environment variable     | Required | Default value                |\n| --------- | --------------------------- | ------------------------ | -------- | ---------------------------- |\n| `apiKey`  | `swarmsclient.swarmsApiKey` | `SWARMS_API_KEY`         | false    | -                            |\n| `baseUrl` | `swarmsclient.baseUrl`      | `SWARMS_CLIENT_BASE_URL` | true     | `"https://api.swarms.world"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\n\nSwarmsClientClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Swarms Client API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.getRoot(...)` should be called with an instance of `ClientGetRootParams`, and it     will return an instance of `ClientGetRootResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport com.swarms.api.models.ClientGetRootParams;\nimport com.swarms.api.models.ClientGetRootResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `swarmsclient.swarmsApiKey` and `swarmsclient.baseUrl` system properties\n// Or configures using the `SWARMS_API_KEY` and `SWARMS_CLIENT_BASE_URL` environment variables\nSwarmsClientClient client = SwarmsClientOkHttpClient.fromEnv();\n\nCompletableFuture<ClientGetRootResponse> response = client.async().getRoot();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.swarms.api.client.SwarmsClientClientAsync;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClientAsync;\nimport com.swarms.api.models.ClientGetRootParams;\nimport com.swarms.api.models.ClientGetRootResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `swarmsclient.swarmsApiKey` and `swarmsclient.baseUrl` system properties\n// Or configures using the `SWARMS_API_KEY` and `SWARMS_CLIENT_BASE_URL` environment variables\nSwarmsClientClientAsync client = SwarmsClientOkHttpClientAsync.fromEnv();\n\nCompletableFuture<ClientGetRootResponse> response = client.getRoot();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.swarms.api.core.http.Headers;\nimport com.swarms.api.core.http.HttpResponseFor;\nimport com.swarms.api.models.ClientGetRootParams;\nimport com.swarms.api.models.ClientGetRootResponse;\n\nHttpResponseFor<ClientGetRootResponse> response = client.withRawResponse().getRoot();\n\nint statusCode = response.statusCode();\nHeaders headers = response.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.swarms.api.models.ClientGetRootResponse;\n\nClientGetRootResponse parsedResponse = response.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`SwarmsClientServiceException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/SwarmsClientServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`SwarmsClientIoException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/SwarmsClientIoException.kt): I/O networking errors.\n\n- [`SwarmsClientRetryableException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/SwarmsClientRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`SwarmsClientInvalidDataException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/SwarmsClientInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`SwarmsClientException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/SwarmsClientException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `SWARMS_CLIENT_LOG` environment variable to   `info`:\n\n```sh\nexport SWARMS_CLIENT_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport SWARMS_CLIENT_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `swarms-client-java-core` is published with a     [configuration file](swarms-client-java-core/src/main/resources/META-INF/proguard/swarms-client-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`SwarmsClientOkHttpClient`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClient.kt) or     [`SwarmsClientOkHttpClientAsync`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.swarms.api.models.ClientGetRootResponse;\n\nClientGetRootResponse response = client.getRoot(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport java.time.Duration;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\nimport java.time.Duration;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `swarms-client-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`SwarmsClientClient`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClient.kt), [`SwarmsClientClientAsync`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientAsync.kt),             [`SwarmsClientClientImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientImpl.kt), and [`SwarmsClientClientAsyncImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `swarms-client-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`SwarmsClientOkHttpClient`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClient.kt) and [`SwarmsClientOkHttpClientAsync`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClientAsync.kt), which             provide a way to construct [`SwarmsClientClientImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientImpl.kt) and             [`SwarmsClientClientAsyncImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientAsyncImpl.kt), respectively, using OkHttp\n- `swarms-client-java`\n  - Depends on and exposes the APIs of both `swarms-client-java-core` and `swarms-client-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`swarms-client-java` dependency](#installation) with `swarms-client-java-core`\n2. Copy `swarms-client-java-client-okhttp`\'s [`OkHttpClient`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`SwarmsClientClientImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientImpl.kt) or [`SwarmsClientClientAsyncImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientAsyncImpl.kt), similarly to        [`SwarmsClientOkHttpClient`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClient.kt) or [`SwarmsClientOkHttpClientAsync`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`swarms-client-java` dependency](#installation) with `swarms-client-java-core`\n2. Write a class that implements the [`HttpClient`](swarms-client-java-core/src/main/kotlin/com/swarms/api/core/http/HttpClient.kt) interface\n3. Construct [`SwarmsClientClientImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientImpl.kt) or [`SwarmsClientClientAsyncImpl`](swarms-client-java-core/src/main/kotlin/com/swarms/api/client/SwarmsClientClientAsyncImpl.kt), similarly to        [`SwarmsClientOkHttpClient`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClient.kt) or [`SwarmsClientOkHttpClientAsync`](swarms-client-java-client-okhttp/src/main/kotlin/com/swarms/api/client/okhttp/SwarmsClientOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.swarms.api.core.JsonValue;\nimport com.swarms.api.models.ClientGetRootParams;\n\nClientGetRootParams params = ClientGetRootParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](swarms-client-java-core/src/main/kotlin/com/swarms/api/core/Values.kt) object to its setter:\n\n```java\nimport com.swarms.api.models.ClientGetRootParams;\n\nClientGetRootParams params = ClientGetRootParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](swarms-client-java-core/src/main/kotlin/com/swarms/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.swarms.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](swarms-client-java-core/src/main/kotlin/com/swarms/api/core/Values.kt):\n\n```java\nimport com.swarms.api.core.JsonMissing;\nimport com.swarms.api.models.ClientGetRootParams;\nimport com.swarms.api.models.client.advancedresearch.AdvancedResearchCreateCompletionParams;\n\nClientGetRootParams params = AdvancedResearchCreateCompletionParams.builder()\n    .task("task")\n    .config(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.swarms.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.health().check(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.swarms.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.health().check(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`SwarmsClientInvalidDataException`](swarms-client-java-core/src/main/kotlin/com/swarms/api/errors/SwarmsClientInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.swarms.api.models.health.HealthCheckResponse;\n\nHealthCheckResponse response = client.health().check(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.swarms.api.models.ClientGetRootResponse;\n\nClientGetRootResponse response = client.getRoot(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.swarms.api.client.SwarmsClientClient;\nimport com.swarms.api.client.okhttp.SwarmsClientOkHttpClient;\n\nSwarmsClientClient client = SwarmsClientOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/The-Swarm-Corporation/swarms-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'python',
    content:
      '# Swarms Client Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/swarms-client.svg?label=pypi%20(stable))](https://pypi.org/project/swarms-client/)\n\nThe Swarms Client Python library provides convenient access to the Swarms Client REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Swarms Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=swarms-ts-mcp&config=eyJuYW1lIjoic3dhcm1zLXRzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N3YXJtcy5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22swarms-ts-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fswarms.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.swarms.ai](https://docs.swarms.ai). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install swarms-client\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\n\nresponse = client.get_root()\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `SWARMS_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncSwarmsClient` instead of `SwarmsClient` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom swarms_client import AsyncSwarmsClient\n\nclient = AsyncSwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  response = await client.get_root()\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install swarms-client[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom swarms_client import DefaultAioHttpClient\nfrom swarms_client import AsyncSwarmsClient\n\nasync def main() -> None:\n  async with AsyncSwarmsClient(\n    api_key=os.environ.get("SWARMS_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.get_root()\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient()\n\nresponse = client.agent.run(\n    agent_config={\n        "agent_name": "agent_name"\n    },\n)\nprint(response.agent_config)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `swarms_client.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `swarms_client.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `swarms_client.APIError`.\n\n```python\nimport swarms_client\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient()\n\ntry:\n    client.get_root()\nexcept swarms_client.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept swarms_client.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept swarms_client.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom swarms_client import SwarmsClient\n\n# Configure the default for all requests:\nclient = SwarmsClient(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).get_root()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom swarms_client import SwarmsClient\n\n# Configure the default for all requests:\nclient = SwarmsClient(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = SwarmsClient(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).get_root()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `SWARMS_CLIENT_LOG` to `info`.\n\n```shell\n$ export SWARMS_CLIENT_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom swarms_client import SwarmsClient\n\nclient = SwarmsClient()\nresponse = client.with_raw_response.get_root()\nprint(response.headers.get(\'X-My-Header\'))\n\nclient = response.parse()  # get the object that `get_root()` would have returned\nprint(client)\n```\n\nThese methods return an [`APIResponse`](https://github.com/The-Swarm-Corporation/swarms-client/tree/main/src/swarms_client/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/The-Swarm-Corporation/swarms-client/tree/main/src/swarms_client/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.with_streaming_response.get_root() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom swarms_client import SwarmsClient, DefaultHttpxClient\n\nclient = SwarmsClient(\n    # Or use the `SWARMS_CLIENT_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom swarms_client import SwarmsClient\n\nwith SwarmsClient() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/The-Swarm-Corporation/swarms-client/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport swarms_client\nprint(swarms_client.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Swarms Client TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/swarms-ts.svg?label=npm%20(stable))](https://npmjs.org/package/swarms-ts) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/swarms-ts)\n\nThis library provides convenient access to the Swarms Client REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.swarms.ai](https://docs.swarms.ai). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Swarms Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=swarms-ts-mcp&config=eyJuYW1lIjoic3dhcm1zLXRzLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N3YXJtcy5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWFwaS1rZXkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22swarms-ts-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fswarms.stlmcp.com%22%2C%22headers%22%3A%7B%22x-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install swarms-ts\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.getRoot();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  apiKey: process.env['SWARMS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response: unknown = await client.getRoot();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.getRoot().catch(async (err) => {\n  if (err instanceof SwarmsClient.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new SwarmsClient({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.getRoot({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new SwarmsClient({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.getRoot({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new SwarmsClient();\n\nconst response = await client.getRoot().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.getRoot().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `SWARMS_CLIENT_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport SwarmsClient from 'swarms-ts';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new SwarmsClient({\n  logger: logger.child({ name: 'SwarmsClient' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.getRoot({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport SwarmsClient from 'swarms-ts';\nimport fetch from 'my-fetch';\n\nconst client = new SwarmsClient({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport SwarmsClient from 'swarms-ts';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new SwarmsClient({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport SwarmsClient from 'swarms-ts';\n\nconst client = new SwarmsClient({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport SwarmsClient from 'npm:swarms-ts';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new SwarmsClient({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/The-Swarm-Corporation/swarms-ts/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
