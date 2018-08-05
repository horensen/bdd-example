Feature: Fibonacci
  As a JavaScriptist
  I want to calculate super fast fibonacci series
  So that I am awesome

  Scenario Outline: Series
    Given "<number>" as the last number in the fibonacci series
    When I ask to generate it
    Then it should give me "<fibonacci_series>"

    Examples:
      | number | fibonacci_series                       |
      | 1      | []                                     |
      | 2      | [1, 1]                                 |
      | 3      | [1, 1, 2]                              |
      | 4      | [1, 1, 2, 3]                           |
      | 6      | [1, 1, 2, 3, 5]                        |
      | 9      | [1, 1, 2, 3, 5, 8]                     |
      | 100    | [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] |
