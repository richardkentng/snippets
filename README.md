# SNIPPETS
A web app where users can sign in, create “snippets” of data defined with tags, and search through them! (Scroll down to check out the details!)

![home page search results](/public/image/hSearchGreen.png)
### Log In Page
![log in page](/public/image/hLogIn.png)
### Create Page
![create snippet page](/public/image/hCreateSnippet.png)
### Edit Page
![edit snippet page](/public/image/hEditSnippet.png)


### Technologies Used:
- HTML
- CSS
- Javascript
- https://randomuser.me/ (API)

### User Stories:
##### MVP GOALS:
- (Bronze) As a user, when I click “male” or “female”, I only want to view profiles of that gender.
- (Bronze) As a user, when I click “next”, I want to view another user profile that meets the parameters specified above.
##### STRETCH GOALS:
- (Silver) As a user, I can click “either” to view both male and female profiles.
- (Silver) As a user, I can click “age range” to specify an age range.
- (Silver) As a user, I can click “prev fish” to see previous profile.
- (Gold) As a user, I can click “save fish” to save profile.  
- (Gold) As a user, I can click “pond” to view saved profiles.
- (Gold) As a user, when I click “save fish”, I want an animation of a fish to travel from the “save” button to the “pond” button.



## Challenges
##### CORS error:
Sometimes, without explanation, the API will fail to fetch,
and will catch a CORS error.  When this happens 3 times in a
row, I will show the user an alert, asking them to wait for a
moment before continuing.
![silver](/images/cors.png)

## Bugs
Although the gender-selection works flawlessly,
the country-selection occassionaly ignores the 
selected country, and displays random countries
instead.

## Triumphs


### Smart coding
##### API fetches at least 100 results at a time.
I do not want to run the API everytime the user presses 'Next'. 
That would take too long, and it would risk more API errors.
Instead, I wanted to grab at least a hundred results at a time,
so that I can strike a balance between user effciency and risk
of overwhelming the API.

```
let numResults = 100
fetch(`https://randomuser.me/api/?results=${numResults}`)
```
### Cool features
##### Progress bar:  
No application is complete without some kind of progress bar!
This baby simply uses two numbers, the current index, and the array length,
and divides them and stuff in order to get a percentage that I can feed into
the CSS width percentage of my progress bar.
```
//update progress bar
function updateFirst() {
    //calculate percentage fraciton
    const num1 = currentIndex + 1;
    const num2 = peopleGbl.length;
    const fraction = num1/num2
    let percent = Math.floor(fraction * 100)
    if (percent === 99) {
        percent = 100;
    }
    first.style.width = `${percent}%`
}
```

### Layouts vs Results 
##### Age Input?
I did not end up using age input because the API
produced ages that didn't make sense.  For example,
it would show an image of a young man, and claim that 
he was 80 years old!  Instead, I decided to use my time to
 make a select-country input instead.  After all, people 
only want to contact others who speak the same language!  
##### Saving User Profiles?
I suppose I could have explored localStorage, so that users could
maybe store favorited profile information on their computer, but I 
used my allotted time to make a progress bar, and a select-country
input instead.  When I learn about online databases and servers,
that's when I'll look more into saving data!


### Final Thoughts
I'm satisfied with what I was able to acccomplish in one week.
The look is good and the funcitonality is mostly good.
However, there are still bugs that need exploring, CORS errors
that need better handling, more inputs and features that need to be 
added, such as an age-range input, a loading animation, a media query 
to adjust the page on smaller screen widths, etc.  I plan to keep updating 
this project in the future!


