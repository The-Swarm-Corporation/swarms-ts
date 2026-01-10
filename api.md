# SwarmsClient

Types:

- <code><a href="./src/resources/top-level.ts">GetRootResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">getRoot</a>() -> unknown</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Agent

Types:

- <code><a href="./src/resources/agent/agent.ts">AgentCompletion</a></code>
- <code><a href="./src/resources/agent/agent.ts">AgentSpec</a></code>
- <code><a href="./src/resources/agent/agent.ts">McpConnection</a></code>
- <code><a href="./src/resources/agent/agent.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agent/agent.ts">AgentRunResponse</a></code>

Methods:

- <code title="get /v1/agents/list">client.agent.<a href="./src/resources/agent/agent.ts">list</a>() -> AgentListResponse</code>
- <code title="post /v1/agent/completions">client.agent.<a href="./src/resources/agent/agent.ts">run</a>({ ...params }) -> AgentRunResponse</code>

## Batch

Types:

- <code><a href="./src/resources/agent/batch.ts">BatchRunResponse</a></code>

Methods:

- <code title="post /v1/agent/batch/completions">client.agent.batch.<a href="./src/resources/agent/batch.ts">run</a>([ ...body ]) -> BatchRunResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListAvailableResponse</a></code>

Methods:

- <code title="get /v1/models/available">client.models.<a href="./src/resources/models.ts">listAvailable</a>() -> ModelListAvailableResponse</code>

# Swarms

Types:

- <code><a href="./src/resources/swarms/swarms.ts">SwarmSpec</a></code>
- <code><a href="./src/resources/swarms/swarms.ts">SwarmCheckAvailableResponse</a></code>
- <code><a href="./src/resources/swarms/swarms.ts">SwarmGetLogsResponse</a></code>
- <code><a href="./src/resources/swarms/swarms.ts">SwarmRunResponse</a></code>

Methods:

- <code title="get /v1/swarms/available">client.swarms.<a href="./src/resources/swarms/swarms.ts">checkAvailable</a>() -> SwarmCheckAvailableResponse</code>
- <code title="get /v1/swarm/logs">client.swarms.<a href="./src/resources/swarms/swarms.ts">getLogs</a>() -> SwarmGetLogsResponse</code>
- <code title="post /v1/swarm/completions">client.swarms.<a href="./src/resources/swarms/swarms.ts">run</a>({ ...params }) -> SwarmRunResponse</code>

## Batch

Types:

- <code><a href="./src/resources/swarms/batch.ts">BatchRunResponse</a></code>

Methods:

- <code title="post /v1/swarm/batch/completions">client.swarms.batch.<a href="./src/resources/swarms/batch.ts">run</a>([ ...body ]) -> BatchRunResponse</code>

# ReasoningAgents

Types:

- <code><a href="./src/resources/reasoning-agents.ts">ReasoningAgentCreateCompletionResponse</a></code>
- <code><a href="./src/resources/reasoning-agents.ts">ReasoningAgentListTypesResponse</a></code>

Methods:

- <code title="post /v1/reasoning-agent/completions">client.reasoningAgents.<a href="./src/resources/reasoning-agents.ts">createCompletion</a>({ ...params }) -> ReasoningAgentCreateCompletionResponse</code>
- <code title="get /v1/reasoning-agent/types">client.reasoningAgents.<a href="./src/resources/reasoning-agents.ts">listTypes</a>() -> ReasoningAgentListTypesResponse</code>

# Client

## Rate

Types:

- <code><a href="./src/resources/client/rate.ts">RateLimitWindow</a></code>
- <code><a href="./src/resources/client/rate.ts">RateGetLimitsResponse</a></code>

Methods:

- <code title="get /v1/rate/limits">client.client.rate.<a href="./src/resources/client/rate.ts">getLimits</a>() -> RateGetLimitsResponse</code>

## AutoSwarmBuilder

Types:

- <code><a href="./src/resources/client/auto-swarm-builder.ts">AutoSwarmBuilderCreateCompletionResponse</a></code>
- <code><a href="./src/resources/client/auto-swarm-builder.ts">AutoSwarmBuilderListExecutionTypesResponse</a></code>

Methods:

- <code title="post /v1/auto-swarm-builder/completions">client.client.autoSwarmBuilder.<a href="./src/resources/client/auto-swarm-builder.ts">createCompletion</a>({ ...params }) -> AutoSwarmBuilderCreateCompletionResponse</code>
- <code title="get /v1/auto-swarm-builder/execution-types">client.client.autoSwarmBuilder.<a href="./src/resources/client/auto-swarm-builder.ts">listExecutionTypes</a>() -> AutoSwarmBuilderListExecutionTypesResponse</code>

## AdvancedResearch

Types:

- <code><a href="./src/resources/client/advanced-research/advanced-research.ts">AdvancedResearchCreateCompletionResponse</a></code>

Methods:

- <code title="post /v1/advanced-research/completions">client.client.advancedResearch.<a href="./src/resources/client/advanced-research/advanced-research.ts">createCompletion</a>({ ...params }) -> AdvancedResearchCreateCompletionResponse</code>

### Batch

Types:

- <code><a href="./src/resources/client/advanced-research/batch.ts">BatchCreateCompletionResponse</a></code>

Methods:

- <code title="post /v1/advanced-research/batch/completions">client.client.advancedResearch.batch.<a href="./src/resources/client/advanced-research/batch.ts">createCompletion</a>({ ...params }) -> BatchCreateCompletionResponse</code>

## Tools

Types:

- <code><a href="./src/resources/client/tools.ts">ToolListAvailableResponse</a></code>

Methods:

- <code title="get /v1/tools/available">client.client.tools.<a href="./src/resources/client/tools.ts">listAvailable</a>() -> ToolListAvailableResponse</code>

## Marketplace

## BatchedGridWorkflow

Types:

- <code><a href="./src/resources/client/batched-grid-workflow.ts">BatchedGridWorkflowCompleteWorkflowResponse</a></code>

Methods:

- <code title="post /v1/batched-grid-workflow/completions">client.client.batchedGridWorkflow.<a href="./src/resources/client/batched-grid-workflow.ts">completeWorkflow</a>({ ...params }) -> BatchedGridWorkflowCompleteWorkflowResponse</code>
