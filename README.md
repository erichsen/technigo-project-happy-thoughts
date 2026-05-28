# Happy Thoughts

A React app where you can share and like happy thoughts with the world. Think of it as a positivity-only social feed!

## About the project

Built with React and connected to a live REST API. Users can:
- Read the 20 most recent happy thoughts
- Post their own happy thought
- Like thoughts with a ❤️ button

New thoughts appear instantly at the top of the feed without needing to refresh the page.

## Tech stack

- React (Vite)
- JavaScript (JSX)
- CSS
- date-fns for timestamp formatting
- REST API: https://happy-thoughts-api-4ful.onrender.com

## How I approached it

I started by fetching and displaying thoughts from the API, then built the form to post new ones, and finally implemented the like button. Components are split into `ThoughtForm` and `ThoughtCard` to keep things clean and reusable.

## If I had more time

- Add loading states while fetching
- Show a character counter on the form input
- Add animations when new thoughts appear

## View it live

https://technigo-project-happy-thoughts.pages.dev/

## Run locally

```bash
npm install --legacy-peer-deps && npm run dev