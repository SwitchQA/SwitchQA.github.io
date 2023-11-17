jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "percentagePostsWithoutComments.feature",
      "Feature": {
        "Name": "US 020 - View Percentage of Posts Without Comments",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Member submits valid date",
            "Slug": "member-submits-valid-date",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is on the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters a valid date in the format \"2023-11-16\" and clicks on submit",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should calculate and display the \"Result: 100\".",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Member submits data with no records",
            "Slug": "member-submits-data-with-no-records",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the Member is on the statistics Page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters a data with no posts \"1994-11-21\" and clicks on submit",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should display a \"Result: No data found\" message",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Member submits invalid data",
            "Slug": "member-submits-invalid-data",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "The member is on Statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters an invalid date \"2023-1-\" and clicks on submit",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should display a flash message \"Inserted date is not valid, please refresh and try again 😎\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Entering a specific date with valid data and clicking the refresh button",
            "Slug": "entering-a-specific-date-with-valid-data-and-clicking-the-refresh-button",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "The member is on Statistics page already",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters the date \"2023-06-29\" clicks submit button for box 2 and the refresh button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the date field text must be \"\" and the result must be \"Result:\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "delete.feature",
      "Feature": {
        "Name": "US 13 - Delete an account",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Successful account deletion",
            "Slug": "successful-account-deletion",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in as a member without any posts or comments",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the member page button and am redirected to the member page one",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on the delete account button to delete member one",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see a confirmation message \"User deleted successfully! 🎉\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Unsuccessful account deletion due to existing posts or comments",
            "Slug": "unsuccessful-account-deletion-due-to-existing-posts-or-comments",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in as a member which makes a post",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the member page button and am redirected to the member page two",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on the delete account button to delete member two",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see an error message \"Oops! Couldn't delete user. 🙁\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    }
  ],
  "Summary": {
    "Tags": [],
    "Folders": [
      {
        "Folder": "percentagePostsWithoutComments.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "delete.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "percentagePostsWithoutComments.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "delete.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 6,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 6
    },
    "Features": {
      "Total": 2,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 2
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "percentagePostsWithoutComments.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "delete.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "GeneratedOn": "17 November 2023 13:45:01"
  }
});