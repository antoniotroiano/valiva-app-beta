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
    "desiredMonthlyIncomeToday": 2500,
    "id": "household",
    "name": "Beispiel",
    "persons": [
      {
        "birthYear": 1988,
        "childrenBirthYears": [],
        "id": "p1",
        "lifeExpectancyAge": 90,
        "name": "Alex Beispiel",
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
    ]
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
        "initialCapital": 5000,
        "lumpSums": [],
        "monthlyContribution": 300,
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
            "currentAmount": 300,
            "id": "g1",
            "monthlyContribution": 120,
            "name": "Fahrrad",
            "priority": 1,
            "startMonth": "2026-12",
            "targetAmount": 2400,
            "targetMonth": "2027-12",
            "taxEnabled": true,
            "taxFreeAllowancePerYear": 1000
          }
        ],
        "schemaVersion": 1
      },
      "statutory": {
        "projectedMonthlyPensionToday": 1450,
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
        "employeeContributionMonthlyGross": 150,
        "employerContributionMonthly": 0,
        "employerSubsidyCustomMonthly": 0,
        "employerSubsidyMode": "auto15",
        "schemaVersion": 1,
        "startMonth": "2027-01"
      }
    }
  }
}
`;export{e as default};