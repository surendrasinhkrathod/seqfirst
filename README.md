# SeqFirst.org Website

## Overview

This is the public-facing marketing site for the UW ORIS Genetic Consent project. It is a redesign of their Squarespace version. The admin and consent portals are located in the [uw-oris-genetics](https://bitbucket.org/freshconsulting/uw-oris-genetics/) repo.


## Technology Stack
- Next.js hosted on Vercel


## Setup
- [Next.js documentation](https://nextjs.org/learn/basics/create-nextjs-app)
- Node v18.0.0 (with npm v8.6.0)


## Local Dev
- Run `npm run dev` from the `uworis-seqfirst-org` directory
- View the site locally at [http://localhost:3000](http://localhost:3000)
- Run `npm run build` to build the project and find any errors


## Deploying
The Vercel account is owned by the UW team: https://vercel.com/seqfirst. Any future devs that require access will need to be added to their account by Tom Ruddle at UW (truddle@uw.edu).

The `master` branch deploys directly to the Production site. The `staging` branch will be used as a staging environment post-launch.

#### Pre-Launch
* The `master` branch currently deploys to https://uworis-seqfirst-org.vercel.app/
* The `staging` branch currently deploys to https://seqfirst-staging.vercel.app/

### Who do I talk to?
* **Project Manager:** Trevor Newman
* **Product Manager:** Jason Prejmerean
* **Frontend Devs:** Jesse Bufkin, Leilani Gomoto
* **Backend Devs** *(part of the larger UW ORIS project)*: Ewerton Willams, Sean McKay, Brian Ellis
