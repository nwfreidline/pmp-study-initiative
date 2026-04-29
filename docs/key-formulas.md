# PMP Key Formulas & Concepts

## Earned Value Management (EVM)

| Abbreviation | Name | Formula | Interpretation |
|---|---|---|---|
| PV | Planned Value | Budget for work scheduled | What you planned to spend |
| EV | Earned Value | Budget for work completed | Value of work done |
| AC | Actual Cost | Actual spend to date | What you actually spent |
| BAC | Budget at Completion | Total project budget | Original total budget |
| SV | Schedule Variance | EV - PV | Negative = behind schedule |
| CV | Cost Variance | EV - AC | Negative = over budget |
| SPI | Schedule Performance Index | EV / PV | < 1.0 = behind schedule |
| CPI | Cost Performance Index | EV / AC | < 1.0 = over budget |
| EAC | Estimate at Completion | BAC / CPI (typical) | Projected total cost |
| ETC | Estimate to Complete | EAC - AC | Cost to finish remaining work |
| VAC | Variance at Completion | BAC - EAC | Projected budget variance |
| TCPI | To-Complete Performance Index | (BAC - EV) / (BAC - AC) | Required efficiency to meet BAC |

### EAC Variations
- **Typical (CPI trend continues)**: EAC = BAC / CPI
- **Atypical (original estimate still valid)**: EAC = AC + (BAC - EV)
- **Both SPI and CPI factors**: EAC = AC + (BAC - EV) / (CPI × SPI)

## Communication Channels
- **Formula**: n(n-1) / 2 (where n = number of stakeholders)

## PERT Estimates
- **Expected (tE)**: (O + 4M + P) / 6
- **Standard Deviation (σ)**: (P - O) / 6
- **Variance**: σ² = ((P - O) / 6)²

## Point of Total Assumption (PTA) — Fixed Price Incentive Fee
- **PTA** = ((Ceiling Price - Target Price) / Buyer's Share Ratio) + Target Cost

## Procurement Contract Types (Risk Spectrum)
| Type | Buyer Risk | Seller Risk |
|---|---|---|
| Cost Plus Percentage of Cost (CPPC) | Highest | Lowest |
| Cost Plus Fixed Fee (CPFF) | High | Low |
| Cost Plus Incentive Fee (CPIF) | Medium-High | Medium-Low |
| Cost Plus Award Fee (CPAF) | Medium | Medium |
| Time & Materials (T&M) | Medium | Medium |
| Fixed Price Incentive Fee (FPIF) | Medium-Low | Medium-High |
| Firm Fixed Price (FFP) | Lowest | Highest |

## Network Diagram
- **Critical Path**: Longest path through the network (determines minimum project duration)
- **Float/Slack**: LS - ES or LF - EF (zero float = critical path)
- **Free Float**: ES(successor) - EF(current activity)
- **Forward Pass**: Calculate ES and EF (earliest start/finish)
- **Backward Pass**: Calculate LS and LF (latest start/finish)

## Schedule Compression
- **Crashing**: Add resources to critical path activities (increases cost)
- **Fast-tracking**: Perform activities in parallel (increases risk)
