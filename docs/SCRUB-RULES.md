# Scrub rules

This site is public. My employer's internal information is not.

Every piece of copy, every component, every commit message, every file committed to this repo gets checked against these rules before it ships.

## Always-forbidden

The following MUST NEVER appear anywhere in this repo or any deployed asset:

### Organization and team specifics
- Internal team names, org names, group names
- Service names owned by me or my team
- Package names, repo names from internal source control
- Bindle-style permission bundles, pipeline names, pipeline URLs
- Internal wiki paths, internal doc links
- Resolver group names, oncall rotation names
- Internal ticket IDs, CR numbers

### Infrastructure specifics
- Region codes beyond the standard public ones - do not name anything classified or restricted
- Partition names that are not commercial
- Any phrase that describes the classification level of a system I work on
- Internal account IDs
- Cross-partition, cross-realm, cross-domain terminology that reveals non-public infrastructure

### Customer and client references
- Named internal customers or dependent services
- Use cases tied to specific teams or products
- Migration names, program names, initiative codenames

### People
- Coworker names, manager names, skip-level names
- Aliases, usernames, email addresses that are not mine
- Phonetool-specific patterns ("my manager", "my skip" with identifying detail)

### Metrics and numbers
- Real internal metrics (TPS, QPS, latency, error rates) with identifying context
- Specific cost numbers for internal services
- Scale numbers that could identify a specific service

## Always-safe

These can appear:

- "Software engineer at Amazon" (my employment is public on LinkedIn)
- "Seattle" as my location
- Broad tech names: Java, TypeScript, Python, DynamoDB, Lambda, Step Functions, React
- Generic problem domain phrases: "distributed systems", "backend services", "data pipelines"
- Side project details (the repos are public anyway)
- Grad school history and research
- Publicly shared conference talks or blog posts

## How to describe work without leaking

When I want to say "I work on <internal service>", rephrase to the shape of the problem:

- Something like "cross-region data sync" → "data replication at scale"
- Something like "payment orchestration" → "workflow systems"
- Something like "payments gateway" → "backend services"
- Any internal service acronym → just don't name it. Describe the class of problem.

If a case study would require naming specifics to make sense, the case study belongs on a side project instead.

## Pre-ship checklist

Before every commit that adds copy or content:

1. Grep the diff for: Amazon internal team acronyms, region codes that aren't commercial, partition names, internal service names.
2. Search the diff for coworker aliases.
3. Confirm every number or metric is either from a public side project or a generalization.
4. Read the diff out loud as if a curious hiring manager at a competitor were reading it. Would I learn anything internal?

## If in doubt

Leave it out. There is always a safer way to say the same thing.
