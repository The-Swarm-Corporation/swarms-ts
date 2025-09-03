// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SwarmsClient from 'swarms-ts';

const client = new SwarmsClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.swarms.batch.run({ body: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.swarms.batch.run({
      body: [
        {
          agents: [
            {
              agent_name: 'agent_name',
              auto_generate_prompt: true,
              description: 'description',
              dynamic_temperature_enabled: true,
              llm_args: { foo: 'bar' },
              max_loops: 0,
              max_tokens: 0,
              mcp_config: {
                authorization_token: 'authorization_token',
                headers: { foo: 'string' },
                timeout: 0,
                tool_configurations: { foo: 'bar' },
                transport: 'transport',
                type: 'type',
                url: 'url',
              },
              mcp_configs: {
                connections: [
                  {
                    authorization_token: 'authorization_token',
                    headers: { foo: 'string' },
                    timeout: 0,
                    tool_configurations: { foo: 'bar' },
                    transport: 'transport',
                    type: 'type',
                    url: 'url',
                  },
                ],
              },
              mcp_url: 'mcp_url',
              model_name: 'model_name',
              reasoning_effort: 'reasoning_effort',
              reasoning_enabled: true,
              role: 'role',
              streaming_on: true,
              system_prompt: 'system_prompt',
              temperature: 0,
              thinking_tokens: 0,
              tool_call_summary: true,
              tools_list_dictionary: [{ foo: 'bar' }],
            },
          ],
          description: 'description',
          heavy_swarm_loops_per_agent: 0,
          heavy_swarm_question_agent_model_name: 'heavy_swarm_question_agent_model_name',
          heavy_swarm_worker_model_name: 'heavy_swarm_worker_model_name',
          img: 'img',
          max_loops: 0,
          messages: [{ foo: 'bar' }],
          name: 'name',
          rearrange_flow: 'rearrange_flow',
          rules: 'rules',
          service_tier: 'service_tier',
          stream: true,
          swarm_type: 'AgentRearrange',
          task: 'task',
          tasks: ['string'],
        },
      ],
    });
  });
});
