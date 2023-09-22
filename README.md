BY HUSNAIN KHAILD
CALL BACK
WHAT ARE CALLBACKS?


What Is CallBack
Callback is just adding functions into the functions By which we can use Web API’s to make our website faster.
Why Call Backs
As we all know that JavaScript is a Single Threaded Language. Now What is a Single-Threaded Language? So Single-Threaded Languages are Languages in which the code is executed line by line. So, that’s where the problem is because when a function which is in between the code of your website is taking too much time and the rest of your website is not loaded then there are 99% possibilities that the customer will leave your website.

So, by using Callbacks we can make it Multi-Threaded. That's why because when our website is being loaded and some of the stuff in it is taking too much time we can save that part for later and when it is being loaded all of the other things will appear. And we will use Promises to do that.
Why Promises & Not Normal Functions:
I am sure you have heard of Pyramid Of Dom. If not then i will tell you it is a type of callback in which we assign a function in the parameters of a function and it will become a mess and will be very complicated and reading of code will be very harsh for you and your teammates. So that's why we will use promises as you an see in the code.

As you can see that it’s very easy in it we can just do it by using .then( ) statement and if there is an error we can catch it by using .catch( ) statement as you can see in the code.

