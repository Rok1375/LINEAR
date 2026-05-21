# Dashboard UI Design Brief v2

Title: Dashboard UI Design Brief v2
Category: website-design
Use case: Dashboard
Version: v2
Tags: website-design, dashboard, saas, data-ui, responsive, future-ready

## Prompt

Design a focused operational dashboard for `{product_name}` that helps `{user_role}` monitor `{primary_metric}` and complete `{top_tasks}` efficiently. Prioritize repeat use, scanability, decision support, and trustworthy data interpretation over decorative layout.

Use `{data_sources}`, `{alert_conditions}`, `{refresh_frequency}`, `{permission_levels}`, and `{decision_context}` to define the information architecture. Specify navigation, dashboard regions, cards, tables, filters, empty/loading/error states, responsive behavior, accessibility considerations, and data-quality cues.

## Input variables

- `product_name`: Name of the app or product.
- `user_role`: Main user role.
- `primary_metric`: Most important metric the dashboard tracks.
- `top_tasks`: 3 to 5 tasks the user needs to perform.
- `data_sources`: Main data objects or entities shown.
- `alert_conditions`: States that require user attention.
- `refresh_frequency`: Real-time, hourly, daily, manual, or unknown.
- `permission_levels`: Roles, visibility limits, or approval rights.
- `decision_context`: Decisions the user must make from the dashboard.

## Future data requirements

- Track task completion, filter usage, alert acknowledgement, refresh latency, empty-state frequency, and repeated dashboard visits.
- Store data lineage, freshness, confidence, and permission metadata so future dashboards can explain why numbers changed.
- Capture role-specific usage patterns to refine layouts for operators, managers, admins, and viewers.

## Precision constraints

- Do not overload the first screen with every metric; emphasize the few signals tied to decisions.
- Include explicit empty, loading, stale-data, partial-data, and permission-denied states.
- Distinguish primary actions from secondary actions and destructive actions.
- Use accessible chart and table patterns with labels, keyboard navigation, and non-color-only alert indicators.

## Edge cases

- If data is delayed or incomplete, include freshness labels and a degraded-state explanation.
- If users manage multiple workspaces or teams, define scope switching and persistent context.
- If alert volume is high, prioritize severity, ownership, and next action instead of a flat alert list.

## Fallback behavior

- If metrics are unclear, propose one primary metric, two supporting metrics, and explain the assumption.
- If data sources are unknown, design with placeholder entities and mark integration assumptions.
- If permissions are unspecified, default to a viewer/editor/admin model and avoid exposing destructive actions by default.

## Expected output

A dashboard design plan with layout regions, component inventory, data states, interaction states, responsive behavior, accessibility notes, data-quality handling, and implementation recommendations.

## Example input

`product_name`: CreatorOps
`user_role`: content operations manager
`primary_metric`: weekly content throughput
`top_tasks`: review drafts, assign owners, approve publishing, identify blocked items
`data_sources`: creators, campaigns, tasks, publishing calendar
`alert_conditions`: overdue reviews, missing owner, failed publish
`refresh_frequency`: hourly
`permission_levels`: managers can approve, coordinators can assign, viewers can only read
`decision_context`: decide which campaigns need intervention today

## Example output

A task-first operations dashboard with a metric strip, campaign health table, blocked-work queue, workload panel, and calendar preview. The design includes stale-data badges, permission-aware approve buttons, severity-ranked alerts, mobile task tabs, and accessible table interactions.

## Version notes

v2 expands the dashboard prompt with data freshness, permissions, operational edge cases, measurable usage signals, and fallback defaults for incomplete analytics context.
