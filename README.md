# WaiLai Tutor Center Web Project

For HW3, I not only incorporated ReactJS into the project but also gave the WaiLai Tutor Center website a complete revamp. The updated website now features a cleaner, more modern, and dynamic design that I personally really like.

### How to run the Webpage

To run the webpage, follow these steps:

1. Open the webpage with an IDE, specifically VS Code.
2. Use the command line to navigate to the directory.
3. Run the command npm start and wait for the webpage to start.

### New update
`
#### Modulrize my code

I have modularized my code by breaking the entire website into different components, each in its own file. This makes the code more readable and reduces redundancy. For example, both the AboutUs and Services pages share the same React component, which I rebuilt using related variables like `title`, `content`, `section-name`, etc. as input.

#### Better CSS design

I have improved the CSS design by using `:root` to declare local variables that make it more consistent and easier to maintain.

#### Better Slideshow

Instead of showcasing images, I created an article component and use slideshow to showcase different articles that is related to children and parenting.

#### Image Track

To compensate for the lack of images, I added an image track that allows the user to slide through images using their mouse.

#### Remake ContactUs page

I have remade the ContactUs page to focus on how visitors can leave their contact information so that we can start to get in touch. Instead of having three separate forms for customer inquiries, job seeking, and feedback previously, I decided to create a newsletter form for visitors to fill in and receive updates about WaiLai Tutor Center.
