# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
It solves the problem of sharing state further down component trees

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are what provides information for 'store'
Reducers are functions that take an action and a previous state and then combine them for a new state
Store holds state, and you can only have one in an application

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
thunk allows us to have a function returned from another function, and helps with more customizability in applications.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux because it breaks down things in the easiest manner to me.