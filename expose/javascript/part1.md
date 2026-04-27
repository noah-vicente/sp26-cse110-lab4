1. values added: 20
2. final result: 20
3. You should not use var because var variables can be accessed from any scope of your program and acts as a global variable, even if it is defined and initialized within a function or smaller scope. This causes programs to lead to naming and scoping conflicts more often.
4. values added: 20
5. The code returns an error because the result let variable is initialized in the scope of the if statement. Since line 13 is outside the scope of this if statement and attempts to use result in the console output, it causes an error where result is not defined.
6. This causes an error since line 8 tries to assign a new value of num1 + num2 to the result variable. However, const variable values do not change once initialized, so this causes an assignmnet error.
7. The code returns an error because the result const variable is initialized in the scope of the if statement. Since line 13 is outside the scope of this if statement and attempts to use result in the console output, it causes an error where result is not defined.