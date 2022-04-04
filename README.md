# Birthdays app challenge

## Run the app

```
# install dependencies & run
npm i 
npm run start
```

App is now available on [http://localhost:3000](http://localhost:3000)

## Run the tests

```
npm test
```

## Technical choices

- I used Create React App because this is an easy way to setup the environment (including testing, building, HMR)
- Eslint + Prettier to improve readability and code quality
- React Router because it is an improvement over native browser routing and saves time with declarative approach
- dayjs for date formatting

## Trade-offs & things to be improve

- Tests are not complete, routing and profile page are not tested at all
- Data fetching could be done better and cleaner with a library (example: React Query)
- Preventing memory leaks using fetch with AbortController is advisable
- SCSS is used, but other solutions such as styled-components or Emotion could be used
- List view page should work better responsively
- Use react-window or similar library or custom solution to render a large dataset
- dayjs might be too big library to format one date, something lighter might be preferred

# Contact

- Github: [bhunjadi](https://github.com/bhunjadi)
- Email: [berislav.hunjadi@gmail.com](mailto:berislav.hunjadi@gmail.com)
