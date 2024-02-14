# Getting Started

### Prerequisites

You need to have the following installed:

- NodeJS ([Download](https://nodejs.org/en/download))
- Docker and Docker Compose ([Guide](https://docs.docker.com/compose/install/))

### Starting the project

In order to limit the number of dependencies in this project, our implementation requires you to run three processes in parallel.

*Turning on the database:*
1. From the root of this project, run:
```
docker compose up
```
2. Navigate to the `./api` directory and run `npm run migrate:latest`. This will create a `tasks` table.
3. From the `./api` directory, run `npm run seed:run`. This will create three tasks in your table.

*Running the API*
1. Navigate to the `./api` directory.
2. Run `npm install`
3. Run `npm run dev`

*Running the Vue app*
1. Navigate to the `./client` directory.
2. Run `npm install`
3. Run `npm run dev`

If you find an error in this documentation, please promptly reach out to me at tim@parseceducation.com


# Your Mission

Your mission, should you choose to accept it, comes in two parts. They are both documented below. Before I dive into the details, you should know a few things:

1. Don't spend more than two hours on this. We hope that you can accomplish both of these tasks within an hour or so.
2. If you think that this is way more work than one hour, please let me know. This is Parsec's first time with this type of challenge. Your feedback would be greatly appreciated.
3. I didn't include an icon for the check mark ¯\_(ツ)_/¯ you can make it with CSS using a ::before tag if you're a wizard. You can also just toggle the color or something like that. I won't dock you points over this.
4. Colors and font sizes are all in `./client/src/assets/base.scss`. Use `--color-accent-one` for blue, and `--color-text` for grey/black.

### Mission One: Add a task input

Complete this mission in:
- `./client/src/components/TaskInput.vue` (see `./client/src/components/Challenge.vue` for details, too)

Design:

*Definition of done:*
- [] User can type into the input
- [] A button with the text "Add" is visible
- [] User can click the button to submit the input

Your submission will be judged out of ten points based on the following criteria:

*Design fidelity - 5 points total*
- Is the spacing correct? (e.g. padding, margin) - 2 points
- Is there good interaction feedback? (e.g. hover, focus, active states--look at the design) - 3 points
*Code quality - 5 points*
- Are concerns clearly separated? (e.g. clear responsibilities for functions, etc.) - 3 point
- Is the code easy to read and understand? - 2 points


### Mission two: Insert a task into the database.

Complete this mission in:
- `./client/src/composables/useSubmitTask.ts` (see `./client/src/composables/useGetTasks.ts` for inspiration/example of how this approach works)
- `./api/src/index.ts`

Write and return a function here which will submit a JSON object to the server to be inserted into the database. Make sure that the response from the server is then placed into the tasks list.

*Definition of done:*
- [] the function sends a post request to the server
- [] the server inserts the task into the database
- [] the newly inserted task is placed into the tasks list

Your submission will be judged out of 10 points based on the following criteria:

*Works as expected - 5 points*
- Ship, ship, ship!
*Code quality - 5 points*
- Is the code clean and easy to read?
- Are there any obvious bugs?
- Are there any obvious performance issues?
- Are there comments where necessary?
