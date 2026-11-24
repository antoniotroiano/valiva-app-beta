var e=`{
  "format": "valiva-workspace",
  "schemaVersion": 3,
  "appVersion": "0.0.0",
  "exportedAt": "2026-11-18T12:00:00.000Z",
  "meta": {
    "synthetic": true
  },
  "household": {
    "assumptions": {
      "inflationPercent": 2,
      "payoutPhaseReturnPercent": 2,
      "pensionAdjustmentPercent": 2.5,
      "returnScenarios": {
        "neutral": 5,
        "optimistic": 7,
        "pessimistic": 3
      }
    },
    "desiredMonthlyIncomeToday": 4200,
    "id": "household",
    "jointAssessment": true,
    "name": "Beispiel",
    "persons": [
      {
        "birthYear": 1985,
        "childrenBirthYears": [
          2015
        ],
        "id": "p1",
        "lifeExpectancyAge": 90,
        "name": "Anna Beispiel",
        "personalAssumptions": {
          "employeeSocialInsuranceRatePercent": 20,
          "health": {
            "additionalRatePercent": 2.9,
            "childless": false,
            "mode": "statutoryCompulsory"
          },
          "marginalTaxRateTodayPercent": 35
        },
        "targetRetirementAge": 67
      },
      {
        "birthYear": 1983,
        "childrenBirthYears": [
          2015
        ],
        "id": "p2",
        "lifeExpectancyAge": 90,
        "name": "Ben Beispiel",
        "personalAssumptions": {
          "employeeSocialInsuranceRatePercent": 20,
          "health": {
            "additionalRatePercent": 2.9,
            "childless": false,
            "mode": "statutoryCompulsory"
          },
          "marginalTaxRateTodayPercent": 35
        },
        "targetRetirementAge": 67
      }
    ],
    "survivorPension": "new",
    "survivorWishPercent": 100
  },
  "activePersonId": "p1",
  "byPerson": {
    "p1": {
      "etfPlan": {
        "annualContributionIncreasePercent": 0,
        "custodyFeeEurPerYear": 0,
        "custodyFeePercentPerYear": 0,
        "durationYears": 25,
        "entryFeePercent": 0,
        "inflationPercent": 2,
        "initialCapital": 10000,
        "lumpSums": [],
        "monthlyContribution": 400,
        "returnScenarios": {
          "neutral": 5,
          "optimistic": 7,
          "pessimistic": 3
        },
        "taxEnabled": true,
        "ter": 0.2
      },
      "goals": {
        "goals": [
          {
            "accountInterestPercent": 2.5,
            "currentAmount": 500,
            "id": "g1",
            "monthlyContribution": 200,
            "name": "Urlaub",
            "priority": 1,
            "startMonth": "2026-12",
            "targetAmount": 4000,
            "targetMonth": "2028-06",
            "taxEnabled": true,
            "taxFreeAllowancePerYear": 1000
          }
        ],
        "schemaVersion": 1
      },
      "statutory": {
        "projectedMonthlyPensionToday": 1700,
        "schemaVersion": 1,
        "statementYear": 2026
      },
      "depot": {
        "costPercentPerYear": 1,
        "lumpSumSharePercent": 0,
        "ownContributionMonthly": 150,
        "payoutEndAge": 85,
        "schemaVersion": 1,
        "startMonth": "2027-01",
        "variant": "standard"
      },
      "occupational": {
        "costPercentPerYear": 1,
        "employeeContributionMonthlyGross": 200,
        "employerContributionMonthly": 0,
        "employerSubsidyCustomMonthly": 0,
        "employerSubsidyMode": "auto15",
        "schemaVersion": 1,
        "startMonth": "2027-01"
      },
      "otherIncome": {
        "entries": [
          {
            "adjustment": {
              "mode": "fixed",
              "percent": 0
            },
            "amountBasis": "nominalAtStart",
            "amountMonthly": 140,
            "contributions": "none",
            "enabled": true,
            "end": {
              "mode": "lifelong"
            },
            "id": "riester",
            "kind": "riester",
            "name": "Riester laut Standmitteilung",
            "start": {
              "age": 67,
              "mode": "age"
            },
            "survivorPercent": 0,
            "taxMode": "full"
          },
          {
            "adjustment": {
              "mode": "fixed",
              "percent": 1
            },
            "amountBasis": "nominalAtStart",
            "amountMonthly": 220,
            "contributions": "none",
            "enabled": true,
            "end": {
              "mode": "lifelong"
            },
            "id": "rente",
            "kind": "privateAnnuity",
            "name": "Private Rentenversicherung",
            "start": {
              "age": 67,
              "mode": "age"
            },
            "survivorPercent": 60,
            "taxMode": "percent",
            "taxSharePercent": 18
          }
        ],
        "schemaVersion": 1
      }
    },
    "p2": {
      "etfPlan": {
        "annualContributionIncreasePercent": 0,
        "custodyFeeEurPerYear": 0,
        "custodyFeePercentPerYear": 0,
        "durationYears": 25,
        "entryFeePercent": 0,
        "inflationPercent": 2,
        "initialCapital": 8000,
        "lumpSums": [],
        "monthlyContribution": 350,
        "returnScenarios": {
          "neutral": 5,
          "optimistic": 7,
          "pessimistic": 3
        },
        "taxEnabled": true,
        "ter": 0.2
      },
      "statutory": {
        "projectedMonthlyPensionToday": 1900,
        "schemaVersion": 1,
        "statementYear": 2026
      },
      "depot": {
        "costPercentPerYear": 1,
        "lumpSumSharePercent": 0,
        "ownContributionMonthly": 100,
        "payoutEndAge": 85,
        "schemaVersion": 1,
        "startMonth": "2027-01",
        "variant": "standard"
      },
      "occupational": {
        "costPercentPerYear": 1,
        "employeeContributionMonthlyGross": 250,
        "employerContributionMonthly": 0,
        "employerSubsidyCustomMonthly": 0,
        "employerSubsidyMode": "auto15",
        "schemaVersion": 1,
        "startMonth": "2027-01"
      },
      "otherIncome": {
        "entries": [
          {
            "adjustment": {
              "mode": "inflation"
            },
            "amountBasis": "today",
            "amountMonthly": 450,
            "contributions": "none",
            "enabled": true,
            "end": {
              "mode": "lifelong"
            },
            "id": "miete",
            "kind": "rent",
            "name": "Mieteinnahmen nach Kosten",
            "start": {
              "mode": "retirement"
            },
            "survivorPercent": 0,
            "taxMode": "full"
          }
        ],
        "schemaVersion": 1
      }
    }
  }
}
`;export{e as default};