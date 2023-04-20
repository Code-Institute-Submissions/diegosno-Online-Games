# Online Games
![Am I Responsive image](/assets/images/READMEimages/amiresponsive.png)</details>

by: Diego Serrano

[View Live Project](https://diegosno.github.io/Online-Games/)


# Project Goal
My goal is to create an interactive website where people can play an online game.

## User Goal 
Spend time playing a game online.

## Site Owner Goal 
Create a website where people can spend time for fun. 


# User Experience 

## Target Audience 
Anyone of any age and sex can play the game, as the rules are simple and the site is intuitive. 

## User Requirements and Expectations 
The website's layout is clean, organized and responsive. 

The information presented is concise and clear. 

Functions are present to make the website interactive and intuitive.

Accessibility is always kept in mind. 

## User Stories 
- I want the contrast colors displayed to be nice and not hurt my eyes.
- I want a website that has content that is easy to understand.
- I want the website to be responsive so I can play on my phone or laptop. 
- I want to navigate easily through the site.  
- I want to be able to refresh the page easily.
- I want to be able to start playing easily.  
- I want to be able to see the choice I made and the scores. 
- I want to know when I lost or when I won. 
- I want to be able to send feedback or get in touch with the creator. 
- I want to make sure my message was sent 

## Site Stories 
- I want the website to be interactive, intuitive, and has a nice color contrast. 
- I want that the information is organized and there are easy to navigate pages 
- I want the user to be able to start playing right away.
- I want the game to be engaging by providing constant feedback. 
- I want the game to be over when the user wins or loses, and for them to know.
- I want the user to be able to provide feedback.
- I want the user to be able to be linked to a page so he/she can see my other projects. 


# Design 
## Wireframes

Two main wireframes were used to design the whole layout. I wanted the layout to remain the same throughout the 3 pages (index, game, and feedback), and i wanted the website to look the same on mobile versions but with different proportions. I wanted the popup window not to interfere with the original design so I blended it into the page.

<details> <summary>View wireframe for pages</summary>

![Header image](/assets/images/READMEimages/wireframe.png)</details>

<details> <summary>View wireframe for popup</summary>

![Header image](/assets/images/READMEimages/wireframepopup.png)</details>

## Color scheme
The colors were chosen based on the sky and outer space. I used a dark color for the header to simulate the night sky.
<details> <summary>View header</summary>

![Header image](/assets/images/READMEimages/header.png)</details>

Then a light blue color for the body of the page to simulate the sky color.
<details> <summary>View body</summary>

![Body image](/assets/images/READMEimages/bodycolor.png)
</details>

And finally a rainbow for the footer to simulate that you are over the rainbow!
<details> <summary>View footer</summary>

![Footer image](/assets/images/READMEimages/footer.png)</details>

I did this with the objective to create a cozy layout. 

## Fonts
 I used Google fonts for the website's elements. Two main fonts were used to keep things simple: Press Start 2P for the header to give it a pixelated effect, often related to online games.
 <details> <summary>View header font</summary>

![Header font image](/assets/images/READMEimages/headerfont.png)
</details>
And Russo One for the rest of the elements as it is easy to read. 
 <details> <summary>View body font</summary>

![Body font image](/assets/images/READMEimages/bodyfont.png)
</details>


# Structure and features
The structure of the website was designed in a way to keep the header on top and the rest of the content below of it, with the footer being at the bottom, which also includes an icon to the developer's Github page.  Navigation is easily identifiable on the top right corner, and the h1 element is clickable on each of the pages to provide with a refresh option to the user.  The website has three pages, a welcome page, the game page, and the feedback page. It is important to note that all main headings texts were created in a way to create emotions in the user, and give a good user experience. 

## Welcome Page
This page contains the game's instructions as well as a start button which is clickable and responsive. 
<details> <summary>View welcome page</summary>

![Form feedback](/assets/images/READMEimages/welcomepage.png)
</details>

## Game Page
The page contains the game itself. An h2 is displayed to prompt the user to make a choice, with the options to choose from right beneath. I decided use emojis as the options to catch the user's attention. They are also responsive, and on click they will provide the user with feedback about the game. Right below a message will display "YAY!" when the user wins, "DRAW!" if it is a tie, and NAW! if the CPU wins. The user's and CPU choices will update as well as the scoreboard.
 <details> <summary>View game page</summary>

![Game page](/assets/images/READMEimages/gamepage.png)
</details>

 When the game comes to an end a popup is shown up to let the user know if they won or not and a big button to restart the game. I added the popup because I didn't want the user to be taken outside of the page as this can sometimes be tiresome. The popup contains a restart button which on click resets the game values and closes the popup to allow the user to play again. 
 <details> <summary>View popup</summary>

![Popup message](/assets/images/READMEimages/popup.png)
</details>

## Feedback Page 
The feedback page contains a form where the user can provide general feedback, and a submit button which is responsive and provides feedback to the user's request by changing its text from "submit" to "sending.." to "sent".
 <details> <summary>View feedback page</summary>

!["sending.." message image](/assets/images/READMEimages/feedbackpage.png)
</details>

If used improperly, the form will provide feedback as well.
<details> <summary>View</summary>

![Form feedback image](/assets/images/READMEimages/required.png)
</details>
If the user sends an message, I will receive it as an email. EmailJS was used to add this feature.
<details> <summary>View actual email</summary>

![EmailJS image](/assets/images/READMEimages/emailjs.png)
</details>


# Validation 
## HTML 
No errors were found using the W3C HTML validator.
 <details> <summary>View</summary>

![HTML validator image](/assets/images/READMEimages/htmlvalidator.png)
</details>

## CSS
No errors were found using the W3C CSS validator.

<details> <summary>View</summary>

![W3C CSS validator image](/assets/images/READMEimages/cssvalidator.png)
</details>

## JavaScript

No errors, only minor details were found using the JSHint Validator

<details> <summary>script.js</summary>

![JavaScript validator image](/assets/images/READMEimages/javascript1.png)

![JavaScript validator image](/assets/images/READMEimages/javascript2.png)
</details>

<details> <summary>form.js</summary>


![JavaScript validator image](/assets/images/READMEimages/formjavascript.png)
</details>

## Accessibility 

The WAVE WebAIM found no errors on the website, only minor warnings regarding the noscript element. 
<details> <summary>View for index page</summary>


![Wave index page image](/assets/images/READMEimages/waveindex.png)

</details>

<details> <summary>View for game page</summary>

![Wave game page image](/assets/images/READMEimages/wavegame.png)

</details>

<details> <summary>View for feedback</summary>

![Wave feedback page image](/assets/images/READMEimages/wavefeedback.png)

</details>

## Performance

To test the performance I used Google Lighthouse. Tests ran smoothly with just a minor detail in the feedback page regarding an issue logged into the panel in Chrome Devtools. 

<details> <summary>View for index page</summary>


![Lighthouse index page image](/assets/images/READMEimages/lighthouseindex.png)

</details>

<details> <summary>View for game page</summary>

![Lighthouse game page image](/assets/images/READMEimages/lighthousegame.png)

</details>

<details> <summary>View for feedback page</summary>

![Lighthouse form page image](/assets/images/READMEimages/lighthouseform.png)

</details>


## Testing 

I performed testing using an iPhone 13 Pro and a MacBook Pro, 13-inch, M1, 2020. 

I also performed testing on the Chrome, Safari and Firefox browsers. 

## Bugs

| Bug | Solution |
| :-------: | :-------: |
| Console was showing that the value for restartButton was null even thought it was assigned | Added an if statement  |
| Text was appearing below the popup on the game page| Changed popup height to 100% |
| H1 was not clickable in the pages | Moved its position below the header element|
| Popup was covering the h1 when showing on game page| Moved it down by changing its top %|
| When the popup showed up there was space left below the footer| Changed popup and overlay position from absolute to fixed|



# Deployment 

The site was deployed using GitHub pages. To publish the website from the GitHub repository, I followed these steps:

Go to the Settings tab in your GitHub repository.
Select Pages from the left-hand menu.
Under Source, select main Branch.
Click Save.
Wait for GitHub to refresh, and the website will be published from the repository.
The website's link will appear: "Your site is published at https://yourusername.github.io/Online-Games/".



# Credits

The following videos were watched to take inspiration from. Please note  I did not use any code from them, I created my own code based on the tutorials. 

[How To Code Rock Paper Scissors In JavaScript](https://www.youtube.com/watch?v=1yS-JV4fWqY)

[A game of Rock Paper Scissors written in JavaScript ✋](https://www.youtube.com/watch?v=n1_vHArDBRA)

[Learn JavaScript by Building 7 Games - Full Course](https://www.youtube.com/watch?v=ec8vSKJuZTk&t=402s)

[Contact Form with Email Js | Send Emails using JavaScript through Email Js | Email Js Tutorial](https://www.youtube.com/watch?v=5EZsRnJpUNU)

[Marvel App](https://www.marvelapp.com/) was used to create the wireframes. 

[Am I responsive](https://amiresponsive.co.uk/) was used to create the multi-device mockup. 



For the website's font I used
[Google Fonts](https://fonts.google.com/)


For the GitHub icon I used 
[Font Awesome](https://fontawesome.com/)

[EmailJS](https://www.emailjs.com/) was used to provide the service for the submit form. 


And I also would like to thank my mentor Mo Shami who gave me really valuable advice on how to make my project better and made me feel motivated and not alone throughout the project!











 