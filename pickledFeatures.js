jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "delete.feature",
      "Feature": {
        "Name": "US013 - Delete an account",
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
    },
    {
      "RelativeFolder": "averageComments.feature",
      "Feature": {
        "Name": "US015 - View Average Comments Per Day",
        "Description": "",
        "FeatureElements": [
          {
            "Examples": [],
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
                "Name": "the member enters a valid date in the format \"2023-06-26\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member clicks the submit button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should calculate and display the \"Result: 5.0\" rounded with one decimal",
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
            "Examples": [],
            "Name": "Member submits data with no records",
            "Slug": "member-submits-data-with-no-records",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the Member is on the Statistics Page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters a valid date in the format \"1994-11-21\" with no existing comments and posts",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "member clicks the submit button",
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
            "Examples": [],
            "Name": "Member submits invalid data",
            "Slug": "member-submits-invalid-data",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "The member is on statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters an invalid date \"2023-1-\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "The member clicks submit",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should display a flash message \"Inserted date is not valid, please refresh and try again 😎\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the system should not display any result: \"Result:\"",
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
            "Examples": [],
            "Name": "Member submits valid data and refreshes results",
            "Slug": "member-submits-valid-data-and-refreshes-results",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "The Member is on The Statistics Page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member enters a valid date in the format \"2023-06-26\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "The Member Clicks the submit button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member clicks the refresh button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "both date fields and result fields are empty",
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
      "RelativeFolder": "averagePosts.feature",
      "Feature": {
        "Name": "US016 -  View average of posts per day",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Get average of posts for a valid date",
            "Slug": "get-average-of-posts-for-a-valid-date",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am a logged-in member on the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter a valid date in the format \"2023-11-11\" and submit the form",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should calculate average of posts and display \"Result: 3.5\"",
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
            "Name": "Get average of posts for a day without posts",
            "Slug": "get-average-of-posts-for-a-day-without-posts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am a logged-in member at the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter a valid date \"2022-11-11\" and submit",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the system should display \"Result: No data found\"",
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
            "Name": "Get average of posts for an invalid date",
            "Slug": "get-average-of-posts-for-an-invalid-date",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in member on the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter an invalid date \"01-01-2023\" and submit the form",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the message \"Inserted date is not valid, please refresh and try again 😎\" should be displayed",
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
            "Name": "Refresh statistics button",
            "Slug": "refresh-statistics-button",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged-in member on the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter a valid date \"2023-11-11\" and click on submit button and refresh button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the text date field must be reseted \"\" and the result should be \"Result:\"",
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
      "RelativeFolder": "postWithMoreComments.feature",
      "Feature": {
        "Name": "US017 - View the  title of the post with more comments on a specific date",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Entering a specific date with no data for box 2",
            "Slug": "entering-a-specific-date-with-no-data-for-box-2",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a logged-in member",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the statistics page button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter the date \"2023-11-10\" and click submit for box 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result for box 2 should be \"Result: No data found\"",
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
            "Name": "Entering a specific date with valid data for box 2",
            "Slug": "entering-a-specific-date-with-valid-data-for-box-2",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a member logged-in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member clicks on the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member enters the date \"2023-06-26\" and clicks submit for box 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result for box 2 must be \"Result: Dream TeSTer\"",
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
            "Name": "Entering a specific date and clicking the refresh button",
            "Slug": "entering-a-specific-date-and-clicking-the-refresh-button",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a member to login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member clicks on the statistics page button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member enters the date \"2023-07-04\" and clicks refresh button for box 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the date text field for box 2 must be \"\"",
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
                "Name": "a member to login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member clicks on the statistics page button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
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
          },
          {
            "Examples": [],
            "Name": "Entering an invalid date and clicking the submit button",
            "Slug": "entering-an-invalid-date-and-clicking-the-submit-button",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a member is registered",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member goes statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "enters the date \"12345\" in box 2 and clicks the submit button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "an error message should be displayed with the text \"Inserted date is not valid, please refresh and try again 😎\"",
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
      "RelativeFolder": "topThreeMembers.feature",
      "Feature": {
        "Name": "US018 - View top 3 Commenting Members for a Specific Day",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Get the top three commenting members for a specific day",
            "Slug": "get-the-top-three-commenting-members-for-a-specific-day",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in the statistics page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter the statistics page, type the date \"2023-11-13\" and click submit for box 3",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "The result for box 3 should be \"Result: RitaCastro, NatalyLucas, PauloTeixeira\"",
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
            "Name": "Get the top three commenting members for a specific day without a top three",
            "Slug": "get-the-top-three-commenting-members-for-a-specific-day-without-a-top-three",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in the statistics page in scenario 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter the statistics page, type the date \"2023-11-10\" and click submit for box 3 in scenario 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "The result for two for box 3 should be \"Result: There isn't a top three for this date\" in scenario 2",
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
            "Name": "Get the top three commenting members for an invalid date",
            "Slug": "get-the-top-three-commenting-members-for-an-invalid-date",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in the statistics page in scenario 3",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter an invalid date \"222\" and click submit for box 3 in scenario 3",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "The message \"Inserted date is not valid, please refresh and try again 😎\" should be displayed",
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
      "RelativeFolder": "percentagePostsWithoutComments.feature",
      "Feature": {
        "Name": "US020 - View Percentage of Posts Without Comments",
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
                "Name": "the system should calculate and display the \"Result: 50\".",
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
      "RelativeFolder": "highlightsPostsPopular.feature",
      "Feature": {
        "Name": "US021 - Highlights for Posts in Popular Section",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "1 - Highlight Posts with 2/3 of Most Popular Comments",
            "Slug": "1---highlight-posts-with-23-of-most-popular-comments",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a registered member is logged into the DDD forum",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the option to sort by popular is selected",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is a post with a title \"Post with 0 comments testing superior limit\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this post should display background color",
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
            "Name": "2 - No Highlight for Posts without Comments",
            "Slug": "2---no-highlight-for-posts-without-comments",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the visitor is on the dddforum webpage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "visitor selects sort by popular posts option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "posts should not have background color",
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
      "RelativeFolder": "us022-recent.feature",
      "Feature": {
        "Name": "US022 - Recent posts highlighted with a red background",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "1 - Post with highest number of comments",
            "Slug": "1---post-with-highest-number-of-comments",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member logs in on the webppage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the option to sort by new is selected",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is a post title \"Most Commented Post\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the post with this title should not have background color",
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
            "Name": "2 - Post with more than 1/3 whitout background color",
            "Slug": "2---post-with-more-than-13-whitout-background-color",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged on the webppage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "he selects the option to sort by new",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is a post with a title \"Post with more than 1/3\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this one should not have background color",
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
            "Name": "3 - Post with more than 2 comments should not have background color",
            "Slug": "3---post-with-more-than-2-comments-should-not-have-background-color",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member logs in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member selects the sort by new filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is a post with the title \"Post with 2 comments testing superior limit\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this post should not display background color",
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
            "Name": "4 - Highlight posts with 1 comment with red background",
            "Slug": "4---highlight-posts-with-1-comment-with-red-background",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "member selects option to sort by new posts",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member views the post with title \"Post with 1 comment testing inferior limit\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the post should display red-background",
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
            "Name": "5 - Highlight posts with no comment with red background",
            "Slug": "5---highlight-posts-with-no-comment-with-red-background",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged in on the dddforum webpage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "member selects sort by new posts option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "member views a post with the title \"Post with no comments testing inferior limit\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this post should display red-background",
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
            "Name": "6 - Visitor can not see highlighted background posts",
            "Slug": "6---visitor-can-not-see-highlighted-background-posts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the visitor is on the dddforum webpage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "visitor selects sort by new posts option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "this posts should not have highlighted background",
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
      "RelativeFolder": "redTextPostsTimestamp.feature",
      "Feature": {
        "Name": "US023 - Red Timestamps in \"Popular\" Section",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Older than five days posts in \"Popular\" display red timestamps",
            "Slug": "older-than-five-days-posts-in-popular-display-red-timestamps",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the Popular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see posts older than five days with the timestamp in red",
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
            "Name": "Older than five days posts in \"New\" don't display red timestamps",
            "Slug": "older-than-five-days-posts-in-new-dont-display-red-timestamps",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in scenario 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the New filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I shouldn't see posts older than five days with the timestamp in red",
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
            "Name": "Older than five days posts in \"Unpopular\" don't display red timestamps",
            "Slug": "older-than-five-days-posts-in-unpopular-dont-display-red-timestamps",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in scenario 3",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the Unpopular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I shouldn't see posts older than five days with a red timestamp",
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
            "Name": "If user isn't logged in, timestamps aren't displayed in red.",
            "Slug": "if-user-isnt-logged-in-timestamps-arent-displayed-in-red",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm not logged in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the Popular filter in scenario 4",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I shouldn't see posts older than five days with the timestamp in red in scenario 4",
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
      "RelativeFolder": "greenTextPostsTimestamp.feature",
      "Feature": {
        "Name": "US024 - Green Timestamps in \"Unpopular\" Section",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Posts with less than two days must show their dates in green text",
            "Slug": "posts-with-less-than-two-days-must-show-their-dates-in-green-text",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the Unpopular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see posts younger than two days with the timestamp in green",
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
            "Name": "Younger than two days posts in \"New\" don't display green timestamps",
            "Slug": "younger-than-two-days-posts-in-new-dont-display-green-timestamps",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in scenario 2",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the New filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I shouldn't see posts younger than two days with the timestamp in green",
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
            "Name": "Popular posts with less than two days don't show timestamps in green",
            "Slug": "popular-posts-with-less-than-two-days-dont-show-timestamps-in-green",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm a logged in member in scenario 3",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the Popular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I shouldn't see posts younger than two days with a green timestamp",
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
            "Name": "If the user isn't logged in, timestamps aren't displayed in green",
            "Slug": "if-the-user-isnt-logged-in-timestamps-arent-displayed-in-green",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I'm not logged in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I go to the main page and choose the Unpopular filter in scenario 4",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I shouldn't see posts with less than two days with the timestamp in green in scenario 4",
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
      "RelativeFolder": "us025.feature",
      "Feature": {
        "Name": "US025 - Display color yellow on Recent Posts Filter",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "1 - Post created 3 days ago from current date should have yellow text",
            "Slug": "1---post-created-3-days-ago-from-current-date-should-have-yellow-text",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member logs in on the webppage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the option to sort by new is selected",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is a post title \"Yellow Post 3 days ago\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the date text should be yellow",
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
            "Name": "2 - Post created 6 days ago from current date should have yellow text",
            "Slug": "2---post-created-6-days-ago-from-current-date-should-have-yellow-text",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member logs on the web page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "select the option to sort by new",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is a post with title \"Yellow Post 6 days ago\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the date text should appear yellow",
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
            "Name": "3 - Post created 4 days ago from current date should not have yellow text",
            "Slug": "3---post-created-4-days-ago-from-current-date-should-not-have-yellow-text",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged in on the index",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member logs out",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "selects the option to sort posts by new",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a post with title \"Yellow Post 4 days ago\" should NOT display yellow",
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
      "RelativeFolder": "highlightPostsWithoutComments.feature",
      "Feature": {
        "Name": "US026 - Highlight Posts Without Comments",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Verify Highlighting on Post Without Comments on Popular Posts",
            "Slug": "verify-highlighting-on-post-without-comments-on-popular-posts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged in on the index page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member presses the popular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member views the post with title \"Show me purple\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the post with title \"Show me purple\" should display a purple text stating \"Please comment me\"",
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
            "Name": "Verify Highlighting on Post With Comments on Popular Posts",
            "Slug": "verify-highlighting-on-post-with-comments-on-popular-posts",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member logged in on the index page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the post with title \"Dont show me purple\" should NOT display text saying \"Please comment me\"",
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
            "Name": "Verify no Highlighting on Post With Comments on Recent Filter",
            "Slug": "verify-no-highlighting-on-post-with-comments-on-recent-filter",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member logged on the index page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member presses the recent filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member views the post with the title \"Show me purple\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "post with title \"Show me purple\" should NOT display text stating \"Please comment me\"",
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
            "Name": "Verify no Highlighting on Post With Comments on Unpopular Fitler",
            "Slug": "verify-no-highlighting-on-post-with-comments-on-unpopular-fitler",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged on the index page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member presses the unpopular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member views the post \"Show me purple\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "post with a title \"Show me purple\" should NOT display text stating \"Please comment me\"",
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
            "Name": "Verify Link Redirects to Post",
            "Slug": "verify-link-redirects-to-post",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged in on index page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member press the popular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the member clicks on the Please comment me text of a post without comments",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the member should be redirected to the post with title \"Show me purple\"",
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
            "Name": "Verify Functionality for Non-Logged-In Users",
            "Slug": "verify-functionality-for-non-logged-in-users",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the member is logged in on the index",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the member logs out",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "presses popular filter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a post with title \"Show me purple\" should NOT display \"Please comment me\" text",
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
        "Folder": "delete.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "averageComments.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "averagePosts.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "postWithMoreComments.feature",
        "Total": 5,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 5
      },
      {
        "Folder": "topThreeMembers.feature",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Folder": "percentagePostsWithoutComments.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "highlightsPostsPopular.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "us022-recent.feature",
        "Total": 6,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 6
      },
      {
        "Folder": "redTextPostsTimestamp.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "greenTextPostsTimestamp.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "us025.feature",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Folder": "highlightPostsWithoutComments.feature",
        "Total": 6,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 6
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "delete.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "averageComments.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "averagePosts.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "postWithMoreComments.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "topThreeMembers.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "percentagePostsWithoutComments.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "highlightsPostsPopular.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "us022-recent.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "redTextPostsTimestamp.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "greenTextPostsTimestamp.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "us025.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "highlightPostsWithoutComments.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 47,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 47
    },
    "Features": {
      "Total": 12,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 12
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "delete.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "averageComments.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "averagePosts.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "postWithMoreComments.feature",
        "Total": 5,
        "Automated": 5,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "topThreeMembers.feature",
        "Total": 3,
        "Automated": 3,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "percentagePostsWithoutComments.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "highlightsPostsPopular.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "us022-recent.feature",
        "Total": 6,
        "Automated": 6,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "redTextPostsTimestamp.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "greenTextPostsTimestamp.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "us025.feature",
        "Total": 3,
        "Automated": 3,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "highlightPostsWithoutComments.feature",
        "Total": 6,
        "Automated": 6,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "GeneratedOn": "10 December 2023 21:31:26"
  }
});