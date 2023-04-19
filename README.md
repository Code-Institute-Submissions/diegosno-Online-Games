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

# User Stories 
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
- I want the game to be over when the user wins or looses, and for them to know.
- I want the user to be able to provide feedback and see my other projects. 

# Design 
## Color scheme
The colors were chosen based on the sky and outer space. I used a dark color for the header to simulate the night sky.
<details> <summary>View header</summary>

![Header image](/assets/images/header.png)</details>
Then a light blue color for the body of the page to simulate the sky color.
<details> <summary>View example</summary>

![Body image](/assets/images/bodycolor.png)
</details>
And finally a rainbow for the footer to simulate that you are over the rainbow!
<details> <summary>View footer</summary>

![Footer image](/assets/images/rainbowfooter.png)</details>

## Fonts
 I used Google fonts for the website's elements. Two main fonts were used to keep things simple: Press Start 2P for the header to give it a pixelated effect, often related to online games.
 <details> <summary>View header font</summary>

![Header font image](/assets/images/headerfont.png)
</details>
And Russo One for the rest of the elements as it is easy to read. 
 <details> <summary>View body font</summary>

![Body font image](/assets/images/body%20font.png)
</details>

# Structure and features
The structure of the website was designed in a way to keep the header on top and the rest of the content below of it, with the footer being at the bottom, which also includes an icon to the developer's Github page.  Navigation is easily identifiable on the top right corner, and the h1 element is clickable on each of the pages to provide with a refresh option to the user.  The website has three pages, a welcome page, the game page, and the feedback page. It is important to note that all main headings texts were created in a way to create emotions in the user, and give a good user experience. 

## Welcome Page
This page contains the game's instructions as well as a start button which is clickable and responsive. 
<details> <summary>View welcome page</summary>

![Form feedback](/assets/images/welcomepage.png)
</details>

## Game Page
The page contains the game itself. An h2 is displayed to prompt the user to make a choice, with the options to choose from right beneath. I decided use emojis as the options to catch the user's attention. They are also responsive, and on click they will provide the user with feedback about the game. Right below a message will display "YAY!" when the user wins, "DRAW!" if it is a tie, and NAW! if the CPU wins. The user's and CPU choices will update as well as the scoreboard.
 <details> <summary>View game page</summary>

![Game page](/assets/images/gamepage.png)
</details>

 When the game comes to an end a popup is shown up to let the user know if they won or not and a big button to restart the game. I added the popup because I didn't want the user to be taken outside of the page as this can sometimes be tiresome. The popup contains a restart button which on click resets the game values and closes the popup to allow the user to play again. 
 <details> <summary>View popup</summary>

![Popup message](/assets/images/popup.png)
</details>

## Feedback Page 
The feedback page contains a form where the user can provide general feedback, and a submit button which is responsive and provides feedback to the user's request by changing its text from "submit" to "sending.." to "sent".
 <details> <summary>View feedback page</summary>

!["sending.." message image](/assets/images/feedbackpage.png)
</details>

If used improperly, the form will provide feedback as well.
<details> <summary>View example</summary>

![Form feedback image](/assets/images/required.png)
</details>
If the user sends an message, I will receive it as an email. EmailJS was used to add this feature.

# Validation 
## HTML 
No errors were found using the W3C HTML validator.
 <details> <summary>View</summary>

![HTML validotor image](/assets/images/html%20validator.png)
</details>

## CSS
No errors were found using the W3C CSS validator.

<details> <summary>View</summary>

![W3C CSS validator image](/assets/images/css%20validator.png)
</details>

## JavaScript

No errors, only minor details were found using the JSHint Validator

<details> <summary>script.js</summary>

![JavaScript validator image](/assets/images/javascript1.png)

![JavaScript validator image](/assets/images/javascript2.png)
</details>

<details> <summary>form.js</summary>


![JavaScript validator image](/assets/images/formjavascript.png)
</details>

## Accessibility 

The WAVE WebAIM found no errors on the website, only minor warnings regarding the noscript element. 
<details> <summary>View</summary>


![JavaScript validator image](/assets/images/wave%20index.png)

![JavaScript validator image](/assets/images/wave%20game.png)

![JavaScript validator image](/assets/images/wave%20feedback.png)
</details>













 