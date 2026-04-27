1. Since i is declared as a var variable, it can be accessed outside of the for loop that it was declared in. The for loop iterates based on i and terminates when i = 3 (the length of the prices array) which does not satisfy the loop condition. Line 12 then prints this value.
2. Line 13 outputs the value 150 because on the last iteration of the for loop, discountedPrice equates to prices[2] * (1 - discount) which is 300 * 0.5 = 150. The loop then breaks, but because discountedPrice was declared as a var variable, we are able to access it outside of the for loop and print its current value which is 150.
3. Line 14 outputs 150 since on the last iteration of the for loop, finalPrice equates to Math.round(disountedPrice * 100) / 100 = Math.round(150 * 100) / 100 = 150. finalPrice is also declared as a var variable, so we are able to output its value after the for loop breaks.
4. This function returns an array of the discounted prices with the value [50, 100, 150] because after the final discounted price is calculated on each iteration of the for loop, the discount value is pushed to the array. This works since the discounted array is a var variable and can be accessed from anywhere in the code, allowing its values to be updated in the for loop.
5. Line 12 causes an error because it tries to output the value of the i variable. However, because it is a let variable, it is only accessible within the scope of which is was defined (the for loop). So, line 12 tries to reference an undefined variable as it occurs outside the for loop.
6. Line 13 causes an error because it tries to output the value of the discountedPrice variable. However, because it is a let variable, it is only accessible within the scope of which is was defined (the for loop). So, line 13 tries to reference an undefined variable as it occurs outside the for loop.
7. Line 14 outputs 150 since although finalPrice is a let variable, it was declared outside of the for loop. This allows it to be accessed as line 14 occurs within the same scope of outside the for loop.
8. This function returns an array of the discounted prices with the value [50, 100, 150] because after the final discounted price is calculated on each iteration of the for loop, the discount value is pushed to the array. This works since although the discounted array is a let variable, it is defined outside of the for loop and thus within the same scope as the return statement, allowing the funciton to return the array.
9. Line 11 causes an error because it tries to output the value of the i variable. However, because it is a let variable, it is only accessible within the scope of which is was defined (the for loop). So, line 12 tries to reference an undefined variable as it occurs outside the for loop.
10. Line 12 outputs 3 because the length variable was declared on the same scope as line 12. length equates to 3 since that is the length of the prices array.
11. This function returns the discounted array with the value of [50, 100, 150] because although it is declared as a const variable, const variables are able to be mutated in value but not reassigned. Since the for loop pushes values to discounted and thus mutates it, no errors occur regarding reassigning a value to a const keyword variable.
12.  
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. 
    A. '32'
    B. 1
    C. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN
14. 
    A. True
    B. False
    C. True
    D. False
    E. False
    F. True
15. The == operator means lose equality, meaning that the comparison that occurs is performed after type covnersion (when the data types are changed) to a common type for evaluation. The === operator means strict equality, meaning that the two values being compared do not undergo any type conversion when being compared.
17. The result of the function returns the newArr array with the value of [2, 4, 6]. In the modifyArray for loop, we iterate over the elements of the array argument which are [1, 2, 3]. For each element in array, we pass it into the callback function and then push the resulting value into newArr. Since the callback function returns the value of the number passed to it times 2, newArr gets pushed 2, 4, and 6 and the array is returned.
19. The output of the code is:
    1
    4
    3
    2