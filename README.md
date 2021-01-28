# README
# Job Application Organizer
# Goal:
    The goal of our application is to create a platform for everyday chefs ot showcase their unique recipes. A user would be able to post a drink or food recipe and recieve feedback from other users on each individual post. Food and Drink is perfect for hobbyists, enthusiasts, or even the regular person looking for some inspiration.
# Symbols throughout the README:
    1. "" ==> What is displayed in the application terminal
    2. '' ==> What to type into the terminal (excluding the '')
# Prerequisites and installation guide to get started:
    1. Please have the latest version of Ruby and an environment such Visual Studio.
    2. Fork and clone down a copy of this repository into your local machine.
    3. Ensure that all gems have been installed and updated correctly. This will be done for you by running 'bundle install' and 'bundle update' in the terminal.
    4. Run 'rails db:migrate' once to create a database for storage.
    5. Run 'rails s' afterwards to start the server and head over to localhost:3000 in the broswer url bar.
# As a user of our application, a user can do a few things:
    1. Create a chef profile and account. (account is not neccessary to view posts).
    2. View food and drink recipes.
    3. If signed in, can access personal profile page, create recipes, like posts, and comment on posts.
    4. Update or delete any existing posts.
    5. Be showcased on the homepage if their recipes get a lot of traction.
# How to use our application:
    1. To start the application, type into the terminal 'rails s', and go to 'localhostt:3000' within the webrowser.
    2. The navbar at top will contain a few tabs that are always accessible. To create an account, please click on the login button to the right and follow tthe prompts of creating your personal account.
    3. Once an account has been successfully created, you can choose to create recipe posts for either foods or drinks. Simply click on the create new food/drink buttons to create a new recipe and fill out the corressponding forms.
    4. Comments and likes can be committed on each individual post page. As an example, viewing your own or someone elses recipe, the like and comment section are at the bottom. Note: you cn only like a post once.
    5. The homepage will be contain many different links and tabs that you can explore. Your dish may be showcased here as well.
    7. The food and drink index pages located on the navbar will list all available recipes. The all chefs tab to the right will also list all available chefs and the amount of recipes they currently authored.
    8. Most of the user specific actions can be found within the profile page as well.
# Closing Notes:
    -We used polymorphic relational assocations between our models to get the functionality of our application to work the way we intended. Having never used it before, it was interesting to see how it worked and how to implement it into our program models.