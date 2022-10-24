# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: (I have unfortunately done this in one of the Rails challenges 😅) In order to add a foreign key to an existing table, you would need to first create a migration
    'rails g migration migration_name'
Now with a new migration file, we can name what we're doing (adding a column) and add that to the file 
    'add_column :students, :cohort_id'
After running 'rails db:migrate' the Student model will have the foreign key

Researched answer: If you've just created your model and forgot to make a foreign key, an easy workaround is to run
'rails db:rollback'
This rolls back to your previous migration. Then you can run 'rails db:reset' and this allows you to recreate your model with the missing foreign key. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Edit, Update, and Destory all must be passed params, as each of these are accessing a specific entry that we are trying to view, edit, or delete. 

Researched answer: RESTful routes that must always be passed params are GET, PUT, and DELETE. POST is the only route that doesn't need params to be passed as we are creating an entirely new object.

3. Name three rails generator commands. What is created by each?

Your answer:
rails g migration 
- creates a new migration file for the app

rails g model ModelName
- creates a new rails model 

rails g controller ControllerName
- creates a new controller for the new model

Researched answer: The main types of generators in rails are: migrations, models, controllers, and resources. Migrations generate a new instance of a migration which accesses the model. Models accept key:value pairs to  create empty tables that we can later fill out. Resources is similar to generating a model, but creates a few more fodels for you. Controller will generate a controller file, as well as a view file, test file, view helper, and a javascript file.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
"index"
- display all objects in the table
    - this will show all studetns

action: "POST" location: /students
create
- creates a new object 
    - creates a new student 

action: "GET" location: /students/new
new
- displays a form used to create a new object, using the previous method
    - creates a form for a new student

action: "GET" location: /students/2
show
- show specific object 
    - shows student with :id 2

action: "GET" location: /students/2/edit
edit
- displays a form to edit an existing object
    - shows form to edit student with :id 2

action: "PATCH" location: /students/2
update
- after an object has been edited, update will update the exisiting object with new information
    - updates student with :id 2 with a new value

action: "DELETE" location: /students/2
destroy
- deletes object
    - deletes student with :id 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see the landing page of the app

2. As a user, I can see the title of the app, "To-Do List"

3. As a user, I can see a button for "Create New Task"

4. As a user, I can click "Create New Task" and be redirected to a page containing an empty form with the text "Add Task" and a "Submit" button.

5. As a user, I can add text into the form and click "Submit". After click, I can see the page refresh with my new task added to a list.

6. As a user, after the first task has been added, I can a new button for "Edit" next to each task

7. As a user, I can click "Edit", and be redirected to a page with a form containing the existing information. I can change the information and click "Save Changes" to update the new information

8. As a user, after saving changes, I can see the list with the newly editted information

9. As a user, I can click when I click "Edit" I can see a new button by save changes for "Delete Task"

10. As a user, I can click "Delete Task". After click I recieve an alert saying "Are you sure you'd like to delete "task_name"" After clicking yes, the task is deleted and I am redirected to the task list with the task now deleted.
