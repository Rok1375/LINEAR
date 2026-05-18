# Dashboard UI Design Brief

Title: Dashboard UI Design Brief
Category: website-design
Use case: Dashboard
Version: v1
Tags: website-design, dashboard, saas, data-ui, responsive

## Prompt

Design a focused dashboard for `{product_name}` that helps `{user_role}` monitor `{primary_metric}` and complete `{top_tasks}` efficiently. Prioritize scanability, hierarchy, and repeat use over decorative layout.

Define the navigation model, primary dashboard regions, data cards, tables or lists, filters, empty states, loading states, and responsive behavior. Include notes on which actions should be prominent and which should be secondary. Use restrained visual styling appropriate for an operational product.

## Input variables

- `product_name`: Name of the app or product.
- `user_role`: Main user role.
- `primary_metric`: Most important thing the dashboard tracks.
- `top_tasks`: 3 to 5 tasks the user needs to perform.
- `data_sources`: Main data objects or entities shown.
- `alert_conditions`: States that require user attention.

## Expected output

A dashboard design plan with layout regions, component inventory, interaction states, responsive behavior, and implementation notes.

## Example input

`product_name`: CreatorOps  
`user_role`: content operations manager  
`primary_metric`: weekly content throughput  
`top_tasks`: review drafts, assign owners, approve publishing, identify blocked items  
`data_sources`: creators, campaigns, tasks, publishing calendar  
`alert_conditions`: overdue reviews, missing owner, failed publish

## Example output

A left-nav operations dashboard with a compact metrics row, campaign health table, blocked-items queue, calendar preview, and review workload panel. Alerts are color-coded but restrained, and mobile collapses into task-first tabs.
