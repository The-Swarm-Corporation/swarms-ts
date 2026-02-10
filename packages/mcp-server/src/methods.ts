import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.getRoot',
    fullyQualifiedName: 'getRoot',
    httpMethod: 'get',
    httpPath: '/',
  },
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.agent.list',
    fullyQualifiedName: 'agent.list',
    httpMethod: 'get',
    httpPath: '/v1/agents/list',
  },
  {
    clientCallName: 'client.agent.run',
    fullyQualifiedName: 'agent.run',
    httpMethod: 'post',
    httpPath: '/v1/agent/completions',
  },
  {
    clientCallName: 'client.agent.batch.run',
    fullyQualifiedName: 'agent.batch.run',
    httpMethod: 'post',
    httpPath: '/v1/agent/batch/completions',
  },
  {
    clientCallName: 'client.models.listAvailable',
    fullyQualifiedName: 'models.listAvailable',
    httpMethod: 'get',
    httpPath: '/v1/models/available',
  },
  {
    clientCallName: 'client.swarms.checkAvailable',
    fullyQualifiedName: 'swarms.checkAvailable',
    httpMethod: 'get',
    httpPath: '/v1/swarms/available',
  },
  {
    clientCallName: 'client.swarms.getLogs',
    fullyQualifiedName: 'swarms.getLogs',
    httpMethod: 'get',
    httpPath: '/v1/swarm/logs',
  },
  {
    clientCallName: 'client.swarms.run',
    fullyQualifiedName: 'swarms.run',
    httpMethod: 'post',
    httpPath: '/v1/swarm/completions',
  },
  {
    clientCallName: 'client.swarms.batch.run',
    fullyQualifiedName: 'swarms.batch.run',
    httpMethod: 'post',
    httpPath: '/v1/swarm/batch/completions',
  },
  {
    clientCallName: 'client.reasoningAgents.createCompletion',
    fullyQualifiedName: 'reasoningAgents.createCompletion',
    httpMethod: 'post',
    httpPath: '/v1/reasoning-agent/completions',
  },
  {
    clientCallName: 'client.reasoningAgents.listTypes',
    fullyQualifiedName: 'reasoningAgents.listTypes',
    httpMethod: 'get',
    httpPath: '/v1/reasoning-agent/types',
  },
  {
    clientCallName: 'client.client.rate.getLimits',
    fullyQualifiedName: 'client.rate.getLimits',
    httpMethod: 'get',
    httpPath: '/v1/rate/limits',
  },
  {
    clientCallName: 'client.client.autoSwarmBuilder.createCompletion',
    fullyQualifiedName: 'client.autoSwarmBuilder.createCompletion',
    httpMethod: 'post',
    httpPath: '/v1/auto-swarm-builder/completions',
  },
  {
    clientCallName: 'client.client.autoSwarmBuilder.listExecutionTypes',
    fullyQualifiedName: 'client.autoSwarmBuilder.listExecutionTypes',
    httpMethod: 'get',
    httpPath: '/v1/auto-swarm-builder/execution-types',
  },
  {
    clientCallName: 'client.client.advancedResearch.createCompletion',
    fullyQualifiedName: 'client.advancedResearch.createCompletion',
    httpMethod: 'post',
    httpPath: '/v1/advanced-research/completions',
  },
  {
    clientCallName: 'client.client.advancedResearch.batch.createCompletion',
    fullyQualifiedName: 'client.advancedResearch.batch.createCompletion',
    httpMethod: 'post',
    httpPath: '/v1/advanced-research/batch/completions',
  },
  {
    clientCallName: 'client.client.tools.listAvailable',
    fullyQualifiedName: 'client.tools.listAvailable',
    httpMethod: 'get',
    httpPath: '/v1/tools/available',
  },
  {
    clientCallName: 'client.client.marketplace.createAgent',
    fullyQualifiedName: 'client.marketplace.createAgent',
    httpMethod: 'post',
    httpPath: '/v1/marketplace/agents',
  },
  {
    clientCallName: 'client.client.batchedGridWorkflow.completeWorkflow',
    fullyQualifiedName: 'client.batchedGridWorkflow.completeWorkflow',
    httpMethod: 'post',
    httpPath: '/v1/batched-grid-workflow/completions',
  },
  {
    clientCallName: 'client.client.graphWorkflow.executeWorkflow',
    fullyQualifiedName: 'client.graphWorkflow.executeWorkflow',
    httpMethod: 'post',
    httpPath: '/v1/graph-workflow/completions',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
