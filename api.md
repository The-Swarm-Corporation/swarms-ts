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
- <code><a href="./src/resources/agent/agent.ts">AgentRunResponse</a></code>

Methods:

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

- <code><a href="./src/resources/client/rate.ts">RateGetLimitsResponse</a></code>

Methods:

- <code title="get /v1/rate/limits">client.client.rate.<a href="./src/resources/client/rate.ts">getLimits</a>() -> RateGetLimitsResponse</code>
