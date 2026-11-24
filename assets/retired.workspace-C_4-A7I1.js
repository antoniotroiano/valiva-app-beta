var e=`{
  "format": "valiva-workspace",
  "schemaVersion": 3,
  "appVersion": "0.0.0",
  "exportedAt": "2026-11-24T12:00:00.000Z",
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
    "desiredMonthlyIncomeToday": 2200,
    "id": "household",
    "name": "Beispiel Rentnerin",
    "persons": [
      {
        "birthYear": 1955,
        "childrenBirthYears": [
          1985
        ],
        "id": "p1",
        "lifeExpectancyAge": 90,
        "name": "Marta Beispiel",
        "personalAssumptions": {
          "employeeSocialInsuranceRatePercent": 20,
          "health": {
            "additionalRatePercent": 2.9,
            "childless": false,
            "mode": "statutoryCompulsory"
          },
          "marginalTaxRateTodayPercent": 35
        },
        "retired": true,
        "retirementStartYear": 2019,
        "targetRetirementAge": 67
      }
    ]
  },
  "activePersonId": "p1",
  "byPerson": {
    "p1": {
      "etfPayout": {
        "holdingContributions": 50000,
        "holdingValue": 80000,
        "schemaVersion": 1,
        "useGlobalAssumptions": true
      },
      "statutory": {
        "actualMonthlyGross": 1650,
        "mode": "actual",
        "projectedMonthlyPensionToday": 0,
        "schemaVersion": 1,
        "statementYear": 2026
      },
      "depot": {
        "costPercentPerYear": 1,
        "lumpSumSharePercent": 0,
        "ownContributionMonthly": 0,
        "payoutEndAge": 85,
        "retiredCapitalToday": 30000,
        "retiredEndAge": 90,
        "schemaVersion": 1,
        "startMonth": "2027-01",
        "variant": "standard"
      },
      "occupational": {
        "annuityAdjustment": {
          "mode": "fixed",
          "percent": 0
        },
        "annuityEndAge": "lifelong",
        "annuityMonthlyGross": 250,
        "costPercentPerYear": 1,
        "employeeContributionMonthlyGross": 0,
        "employerContributionMonthly": 0,
        "employerSubsidyCustomMonthly": 0,
        "employerSubsidyMode": "auto15",
        "retiredForm": "annuity",
        "schemaVersion": 1,
        "startMonth": "2027-01"
      },
      "overview": {
        "enabled": {
          "etf": true,
          "occupational": true,
          "retirementDepot": true,
          "statutory": true
        },
        "schemaVersion": 1
      }
    }
  }
}
`;export{e as default};