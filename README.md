# raksul-sample-project

## Problem 1: Test Cases Design and Automation Test 
- Page test: https://raksul.github.io/recruit-qa-engineer-work-sample/

| Automation Tag        | Scenario                                                       | Purpose                                      | Status |
| --------------------- | -------------------------------------------------------------- | -------------------------------------------- | ------ |
| @main                 | As a user, I can submit form                                   | Verify the main flow                         | PASS   |
| @invalidEmail         | As a user, I get notice when I input invalid email             | Verify the email validation                  | PASS   |
| @emptyEmail           | As a user, I get notice when I input empty email               | Verify the email validation                  | PASS   |
| @emptyLastName        | As a user, I get notice when I input empty last name           | Verify the last name validation              | PASS   |
| @emptyFirstName       | As a user, I get notice when I input empty first name          | Verify the first name validation             | PASS   |
| @emptyInfoSource      | As a user, I get notice when I do not select info source       | Verify the info source validation            | PASS   |
| @emptyAssociation     | As a user, I get notice when I do not select association       | Verify the association validation            | PASS   |
| @emptyInterestSevices | As a user, I get notice when I do not select interest services | Verify the interest services validation      | PASS   |
|                       | As a user, I can select multiple interest services             | Verify multilple select of interest services | PASS   |

## Problem 2: Specification understanding and scheduling

### 2-1. Describe the question you would like to ask the stakeholder and the reason.
1. **Question:** Could you provide a list of users who will become the Admin so the developers can grant them permission? **The reason for this question:** 
2. **Question:** Please describle all functions and which functions can be used by General Users. **The reason for this question:** to make clear the requirement
3. **Question:** Do we need to save the history when an Admin adds or deletes the role of other users?. **The reason for this question:** to avoid the concerns about operational errors and fraud

### 2-1. Create test perspectives and scenarios

| Scenario                                            | Purpose                             |
| --------------------------------------------------- | ----------------------------------- |
| As a Admin, I can add Admin role to another user    | Verify the permission of Admin role |
| As a Admin, I can delete Admin role of another user | Verify the permission of Admin role |
| As a Admin, I can do A                              | Verify the permission of Admin role |
| As a Admin, I can do B                              | Verify the permission of Admin role |
| As a Admin, I can do C                              | Verify the permission of Admin role |
| As a User, I can do A                               | Verify the permission of User role  |
| As a User, I can do B                               | Verify the permission of User role  |
| As a User, I can NOT do C                           | Verify the permission of User role  |

### 2-3. Estimate the number of man-hours required for testing
- It's difficult to estimate the time spent on testing with general descriptions like this one. Because I don't know how many functions could be applied for Admin and User. So I assume that a quite simple system with 3 functions that are only applied for Admin and 3 functions that are applied for User.

Manual testing: (27 man-hours)
- Because these are simple functions I just assume that it requires 5 test cases for each function so we have about 45 test cases. I plan to spend 10 minutes designing test cases for each of them so it will take 450 minutes ~ **7.5 man-hours**
- I plan to spend 10 minutes testing for each test case so it will take 450 minutes ~ 7.5 man-hours. If it requires to do manual testing on 2 different environments, testing time increases to 900 minutes ~ 15 man-hours. After all, we have to spend 30% more buffer time to cover any risk that happens so the testing time is **19.5 man-hours**

Automation testing: (13 man-hours)
- I assume that we have to cover 70% of manual test cases so we have to automate 31 cases. I plan to spend 20 minutes for each of them so it will take 620 minutes ~ 10 man-hours. After all, we have to spend 30% more buff time to cover any risk that happens so the automation testing is **13 man-hours**
